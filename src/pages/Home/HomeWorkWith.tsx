import React from 'react';

const HomeWorkWith = () => {
	return (
		<section className='px-5 pt-[120px] pb-[180px] relative'>
			<div
				className='absolute top-0 left-1/2 -translate-x-1/2 max-w-[754px] w-full h-[1px]'
				style={{
					background:
						'linear-gradient(90deg, #070707 0%, #404040 51.38%, #060606 100.66%)',
				}}
			></div>
			<h2 className='text-[45px] text-center text-neutral-1 font-medium block mb-[60px]'>
				Work with us and get <br />{' '}
				<span className='text-[#787878]'>things done. Fast.</span>
			</h2>
			<div className='max-w-[754px] mx-auto pt-[60px] border-t border-t-[#1F1F1F]'>
				<div className='flex justify-between gap-5'>
					<div className='flex flex-col gap-10'>
						<div className='max-w-[230px]'>
							<span className='block text-neutral-1 text-[48px] font-semibold mb-2'>
								250+
							</span>
							<p className='text-sm text-[#787878]'>
								Projects delivered on-time and within budget.
							</p>
						</div>
						<div className='max-w-[230px]'>
							<span className='block text-neutral-1 text-[48px] font-semibold mb-2'>
								30+
							</span>
							<p className='text-sm text-[#787878]'>
								Highly specialized, talented professionals that work hyperfast.
							</p>
						</div>
					</div>
					<span className='max-w-[464px] text-[26px] font-medium text-[#A1A1A1] leading-[35px]'>
						We are passionate about uncovering the best digital innovations for
						forward—thinking brands looking to push boundaries and drive
						significant impact.
					</span>
				</div>
			</div>
		</section>
	);
};

export default HomeWorkWith;
