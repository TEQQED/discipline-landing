'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import LogoWithName from '@/assets/logo-with-name.svg';
import twitterAnimationJSON from '@/assets/twitter-x.json';
import Lottie from 'react-lottie-player';
import TwitterLogo from '@/assets/twitter-x.svg';

const Header = () => {
	const [hover, setHover] = useState(false);
	return (
		<header className='flex justify-center px-5 sticky top-0 left-0 w-full z-[99] md:bg-transparent  md:backdrop-blur-[0] max-md:relative'>
			<div className='flex justify-between items-center max-w-[1440px] w-full gap-5 h-[72px] relative'>
				<div className='absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-full max-w-[594px]' style={{background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.18) 49.27%, rgba(255, 255, 255, 0.00) 100.64%)'}}></div>
				<Link href='/'>
					<LogoWithName />
				</Link>
				<a
					target={"_blank"}
					rel={"noopener noreferrer"}
					href='https://twitter.com/disciplineso'
					className='flex items-center gap-3'
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
				>
					<span className='text-neutral-4 transition-all text-sm ease-in-out hover:text-neutral-2 hidden md:block'>
						Stay up to date
					</span>
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
				</a>
			</div>
		</header>
	);
};

export default Header;
