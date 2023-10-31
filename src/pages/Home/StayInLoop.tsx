import React from 'react';

const StayInLoop = () => {
	return (
		<section
			className='px-5 pt-[100px] mb-[20px]'
			style={{
				background:
					'radial-gradient(29.81% 100% at 50% 0%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 100%)',
			}}
		>
			<div className='max-w-[544px] w-full mx-auto'>
				<h2 className='gradient-text text-[45px] font-medium left-[45px]'>
					Stay in the loop
				</h2>
				<p className='block mb-[60px] text-lg leading-[25px] text-[#787878] mt-4'>
					Join our newsletter and stay updated on new technologies,
					developments, articles and cases.
				</p>
				<div className='w-full p-2 before:rounded-xl gradient-border relative z-[8]'>
					<div className='w-full p-4 md:px-5 md:pb-0 before:rounded-lg gradient-border-3 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)0%,rgba(255,255,255,0.00)100%)] backdrop-blur-[45px]'>
						<div id='form-subscription' className='klaviyo-form-SgKkMN'></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StayInLoop;
