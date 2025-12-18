/* eslint-disable no-param-reassign */
/* eslint-disable no-sequences */
/* eslint-disable vue/max-len */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-rest-params */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
(function (m, e, t, r, i, k, a) {
	m[i] =
		m[i] ||
		function () {
			(m[i].a = m[i].a || []).push(arguments);
		};
	m[i].l = 1 * new Date();
	for (let j = 0; j < document.scripts.length; j++) {
		if (document.scripts[j].src === r) {
			return;
		}
	}
	((k = e.createElement(t)),
		(a = e.getElementsByTagName(t)[0]),
		(k.async = 1),
		(k.src = r),
		a.parentNode.insertBefore(k, a));
})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

ym(30308022, 'init', {
	clickmap: true,
	trackLinks: true,
	accurateTrackBounce: true
});
