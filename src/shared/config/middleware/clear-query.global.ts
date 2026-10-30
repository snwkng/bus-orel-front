const TRACKING_PARAMS = ['yclid', 'ymclid', 'gclid', 'fbclid', 'from'];

export default defineNuxtRouteMiddleware((to) => {
	// Проверяем, есть ли query-параметры и главная ли это страница
	if (to.path !== '/' || Object.keys(to.query).length === 0) return;

	// Рекламные метки (utm_*, yclid и т.п.) не трогаем:
	// редирект срежет их до того, как их прочитает Метрика
	const hasTrackingParams = Object.keys(to.query).some(
		(key) => key.startsWith('utm_') || TRACKING_PARAMS.includes(key)
	);
	if (hasTrackingParams) return;

	// Редирект на чистую главную
	// replace: true заменяет текущую запись в истории,
	// чтобы кнопка "Назад" не вела на URL с параметрами
	return navigateTo('/', { replace: true });
});
