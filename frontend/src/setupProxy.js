const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
	app.use(createProxyMiddleware('/apis', {
			logLevel: 'debug',
			target: "http://localhost:8080/",
			changeOrigin: true,
			secure: true,
		}

	));
};
