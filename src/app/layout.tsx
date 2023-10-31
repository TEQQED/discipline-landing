import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Discipline',
	description: 'Discipline',
	icons: {
		icon: '/assets/site-logo.svg',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className}`}>
				{children}
				<ToastContainer
					position='bottom-right'
					autoClose={5000}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='dark'
				/>
				<Script
					async
					type='text/javascript'
					src='https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XQmg7h'
				></Script>
			</body>
		</html>
	);
}
