/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const HomeFAQ = () => {
	return (
		<section
			className='px-5 pt-[180px] pb-[200px]'
			style={{
				background: 'linear-gradient(146deg, #0F0F0F 19.93%, #060606 65.6%)',
			}}
		>
			<h2 className='text-[35px] text-white leading-10 font-bold text-center'>
				Frequently asked questions
			</h2>
			<div className='flex flex-col mt-[60px] max-w-[754px] mx-auto gap-5'>
				{FAQ_LIST.map(item => (
					<div
						key={item._id}
						className='shadow-faq-card py-[50px] px-10 rounded-2xl flex justify-between gap-4 bg-[#111]'
					>
						<span className='text-neutral-1 text-[20px] font-medium leading-[25px]'>
							{item.label}
						</span>
						<p className='text-[#A1A1A1] text-[20px] font-medium leading-[25px] max-w-[300px]'>
							{item.text}
						</p>
					</div>
				))}
			</div>
			<span className='block mx-auto max-w-[580px] font-medium text-lg w-full text-[#787878] leading-[25px] text-center mt-[60px]'>
				We're 30+ individuals from across the world driven by bold ideas and
				perspectives. Craft, service, and efficiency drive us forward and we see
				our agency as a place for our shared values to collide.
			</span>
		</section>
	);
};

const FAQ_LIST = [
	{
		_id: 1,
		label: 'Strategy',
		text: 'Known for our speed and accuracy. Develop solutions that take your product to the next level.',
	},
	{
		_id: 2,
		label: 'Product design',
		text: 'Clean, clear and usable design. Our designers solve complex design challenges.',
	},
	{
		_id: 3,
		label: 'Fullstack development',
		text: 'With a diverse stack of technologies we build products of the highest possible quality.',
	},
	{
		_id: 4,
		label: 'Growth',
		text: 'We’ve mastered the realm of social media and marketing automation.',
	},
];

export default HomeFAQ;
