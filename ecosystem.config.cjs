module.exports = {
	apps: [
		{
			name: 'bus-orel-front',
			port: '3000',
			exec_mode: 'cluster',
			instances: 'max',
			script: './.output/server/index.mjs',
			restart_delay: 3000
		}
	]
}
