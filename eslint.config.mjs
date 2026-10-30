// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
	rules: {
		// Форматирование отдано Prettier: он самозакрывает void-элементы (<br />)
		'vue/html-self-closing': 'off'
	}
});
