'use client';
import React, { useState } from 'react';
import Lottie from 'react-lottie-player';
import twitterAnimationJSON from '@/assets/twitter-x.json';
import TwitterLogo from '@/assets/twitter-x.svg';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	const [hover, setHover] = useState(false);
	return (
		<footer
			className='px-5 py-20 flex justify-center'
			style={{
				background: 'linear-gradient(180deg, #0F0F0F 0%, #060606 36.02%)',
			}}
		>
			<div className='max-w-[1140px] w-full flex justify-between gap-3'>
				<div>
					<Link href='/' className='mb-5 block'>
						<Image
							src='/assets/footer-logo.svg'
							height={40}
							width={40}
							alt=''
						/>
					</Link>
					<a
						target={'_blank'}
						rel={'noopener noreferrer'}
						href='https://twitter.com/disciplineso'
						className='flex items-center gap-3'
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					>
						{hover ? (
							<div className='w-[20px] flex items-center justify-center'>
								<Lottie
									animationData={twitterAnimationJSON}
									play={hover}
									speed={2}
									style={{ width: 17, height: 17 }}
								/>
							</div>
						) : (
							<div className='w-[20px] flex items-center justify-center'>
								<TwitterLogo />
							</div>
						)}
						<span className='text-neutral-4 transition-all text-sm ease-in-out hover:text-neutral-2 hidden md:block'>
							Follow us on X
						</span>
					</a>
				</div>
				<div className='flex justify-end max-w-[208px]'>
					<div>
						<span className='block text-[#787878] font-medium text-sm'>
							Menu
						</span>
						<ul className='flex flex-col gap-3 mt-3'>
							{FOOTER_LINKS_ONE.map(item => (
								<li key={item.href}>
									<Link
										href={item.href}
										className='text-white text-sm transition-all duration-200 ease-linear hover:text-gray-400'
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='flex justify-end max-w-[208px]'>
					<div>
						<span className='block text-[#787878] font-medium text-sm'>
							Technologies
						</span>
						<ul className='flex flex-col gap-3 mt-3'>
							{FOOTER_TECHNOLOGIES.map(item => (
								<li key={item.href}>
									<Link
										href={item.href}
										className='text-white text-sm transition-all duration-200 ease-linear hover:text-gray-400'
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='flex justify-end max-w-[208px]'>
					<div>
						<span className='block text-[#787878] font-medium text-sm'>
							Contact us
						</span>
						<ul className='flex flex-col gap-3 mt-3'>
							<li>
								<a
									href='mailto:contact@teqqed.com'
									className='text-white text-sm transition-all duration-200 ease-linear hover:text-gray-400'
								>
									contact@teqqed.com
								</a>
							</li>
							<li className='text-white text-sm'>
								Stadhouderlaan 57, 8448 PZ Heerenveen, Netherlands
							</li>
							<li>
								<Link
									href='/contact'
									className='text-white text-sm transition-all duration-200 ease-linear hover:text-gray-400'
								>
									Hire us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

const FOOTER_LINKS_ONE = [
	{
		href: '/',
		name: 'Home',
	},
	{
		href: '/vision',
		name: 'Vision',
	},
	{
		href: '/about',
		name: 'About us',
	},
	{
		href: '/careers',
		name: 'Careers',
	},
];
const FOOTER_TECHNOLOGIES = [
	{
		href: '',
		name: 'React.js',
	},
	{
		href: '',
		name: 'Tailwind.css',
	},
	{
		href: '',
		name: 'Radix.ui',
	},
	{
		href: '',
		name: 'Postgresql',
	},
];

export default Footer;
