module.exports = {
	apps: [
		{
			name: 'bus-orel-front',
			port: '3000',
			exec_mode: 'cluster',
			instances: 'max',
			script: './.output/server/index.mjs',
			exp_backoff_restart_delay: 100
		}
	]
}
