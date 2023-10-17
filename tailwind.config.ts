import type {Config} from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontSize: {
                heading: ['48px', '60px'],
                'heading-sm': ['35px', '35px']
            },
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
