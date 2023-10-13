import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			xl: { max: '1440px' },
			lg: { max: '1024px' },
			md: { max: '768px' },
			xmd: { max: '576px' },
			sm: { max: '425px' },
			xsm: { max: '375px' },
		},
		extend: {
			colors: {
				neutral: {
					2: '#F9F9FB',
					4: '#EBEBEF',
					10: '#7E808A',
					12: '#1C2024',
				},
			},
		},
	},
	plugins: [],
};
export default config;
