export const useCookieAgree = () =>
	useCookie('cookie_agree', {
		maxAge: 60 * 60 * 24 * 7, // 1 неделя в секундах
		path: '/', // доступно для всего сайта
		httpOnly: false, // если true, JS на клиенте не сможет его прочитать
		secure: !import.meta.dev, // на деве сайт по http — Secure-кука не ставится
		sameSite: 'lax' // защита от CSRF
	});
