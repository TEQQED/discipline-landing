import Layout from '@/Layout';
import Image from 'next/image';
import React from 'react';
import dynamic from 'next/dynamic';

const Cube = dynamic(() => import('../SplineAnimation'), { ssr: true });

const HomeHero = () => {
	return (
		<Layout>
			<div
				className={'w-full'}
				style={{
					background:
						'radial-gradient(113.04% 76.15% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100% ), #000',
				}}
			>
				<div className='-mt-[72px] overflow-hidden w-full relative max-w-[1440px] mx-auto'>
					<div className='h-[72px] w-full block'></div>

					{/* <div
						className='absolute w-[651px] h-[651px] top-[284px] md:top-[234px] left-[-230px] md:left-8 md:opacity-70'
						style={{ mixBlendMode: 'color-dodge' }}
					>
						<div className={'w-[651px] h-[651px]'}>
							<Cube />
						</div>
					</div> */}
					<div className='flex items-center min-h-[calc(100vh-72px)] py-20 justify-center w-full px-5 h-full flex-col'>
						{/* <Image
							src='/assets/hero-circle.svg'
							alt='circle'
							height={95}
							width={95}
						/> */}
						<div
							style={{
								background:
									'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.12) 100%)',
							}}
							className='text-sm text-white border border-[rgba(255,255,255,0.11)] py-[2px] px-2 rounded-[3px] block mt-5 mb-3'
						>
							Coming soon
						</div>
						<h1 className='text-center font-medium text-heading-sm md:text-heading text-neutral-4 block mb-5 xmd:text-[35px] xmd:leading-[35px] xmd:mb-4'>
							Supercharge your business
						</h1>
						<p className='max-w-[325px] w-full mx-auto text-center text-neutral-10'>
							Meet the platform that will help you 100X your service business.
						</p>
						<div className='max-w-[577px] w-full relative mx-auto p-2 gradient-border mt-10 before:rounded-2xl xmd:mt-[120px]'>
							<div className='h-[255px] w-[255px] border-[30px] border-[#FFF8E1] rounded-full absolute left-1/2 -translate-x-1/2 -top-[80px] blur-[10px] opacity-40 animated-circle max-md:top-[60px]'></div>
							{/* <Image
								className='absolute left-1/2 -translate-x-1/2 -top-[110px] max-sm:w-[200px] max-sm:h-[200px] max-sm:top-[-70px]'
								src='/assets/hero-blurred-circle.svg'
								height={280}
								width={280}
								alt='Circle'
							/> */}
							<div
								className='absolute h-[1px] w-10 top-0 left-3 animated-line'
								style={{
									background:
										'linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.7) )',
								}}
							></div>

							<div className='w-full p-2 before:rounded-xl gradient-border relative z-[8]'>
								<div className='w-full p-4 md:p-10 before:rounded-lg gradient-border-3 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)0%,rgba(255,255,255,0.00)100%)] backdrop-blur-[45px]'>
									<div className='flex justify-center mb-[6px]'>
										<Image
											src='./assets/images/avatars.svg'
											alt='Avtars'
											height={24}
											width={70}
										/>
									</div>
									<span className='text-base font-medium text-neutral-10 text-center block mb-6'>
										Join 2.000+ ambitious entrepreneurs.
									</span>
									<div
										id='form-subscription'
										className='klaviyo-form-SgKkMN'
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

// const subscriptionSchema = Yup.object().shape({
// 	email: Yup.string().email('Invalid email').required('Required'),
// });

export default HomeHero;
