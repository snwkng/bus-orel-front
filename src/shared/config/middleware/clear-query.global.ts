export default defineNuxtRouteMiddleware((to) => {
  // Проверяем, есть ли query-параметры и главная ли это страница
  if (to.path === '/' && Object.keys(to.query).length > 0) {
    // Редирект на чистую главную
    // replace: true заменяет текущую запись в истории, 
    // чтобы кнопка "Назад" не вела на URL с параметрами
    return navigateTo('/', { replace: true })
  }
})