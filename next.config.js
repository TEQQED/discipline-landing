/** @type {import("next").NextConfig} */
module.exports = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	webpack: config => {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		});
		return config;
	},
	images: {
		domains: ['images.unsplash.com', 'plus.unsplash.com'],
	},
};