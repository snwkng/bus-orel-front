# syntax=docker/dockerfile:1

# этап сборки
FROM node:24-alpine AS build
WORKDIR /app
# BASE_URL запечён в сборку: routeRules/runtimeConfig/@nuxt/image читают его на этапе build
ARG BASE_URL
ENV BASE_URL=${BASE_URL}
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# продакшн-образ (Nitro node-server, .output самодостаточен)
FROM node:24-alpine AS prod
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
COPY --from=build /app/.output ./.output
USER node
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget -q -O /dev/null "http://127.0.0.1:${PORT}/" || exit 1
CMD ["node", ".output/server/index.mjs"]
