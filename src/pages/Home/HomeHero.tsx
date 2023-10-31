import React from 'react';
import Logo from '@/assets/logo-home-hero.svg';
import PressV from '@/assets/v-press.svg';

const HomeHero = () => {
	return (
		<section className='min-h-screen px-5 py-[120px] flex flex-col justify-center items-center'>
			<div
				style={{
					background:
						'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.12) 100%)',
				}}
				className='text-sm text-white border border-[rgba(255,255,255,0.11)] py-[2px] px-2 rounded-full gap-1 mt-5 mb-3 flex items-center'
			>
				<Logo />
				Coming soon
			</div>
			<h1 className='text-neutral-1 text-[48px] font-medium block mb-[60px]'>
				Supercharge your business
			</h1>
			<div className='flex items-center gap-3 text-sm text-[#787878] font-semibold'>
				<span>Press</span>
				<PressV />
				<span>to view our vision</span>
			</div>
		</section>
	);
};

export default HomeHero;
