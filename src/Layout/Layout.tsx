import React from 'react';
import Header from './Header';

const Layout = ({ children }: { children?: React.ReactNode }) => {
	return (
		<div>
			<Header />
			<main className='w-full'>{children}</main>
		</div>
	);
};

export default Layout;
