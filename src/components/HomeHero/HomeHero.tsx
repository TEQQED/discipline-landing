'use client';
import Layout from '@/Layout';
import { Form } from '@radix-ui/react-form';
import { useFormik } from 'formik';
import Image from 'next/image';
import React from 'react';
import * as Yup from 'yup';
import Spline from '@splinetool/react-spline';
import { toast } from 'react-toastify';

const HomeHero = () => {
	const form = useFormik({
		validationSchema: subscriptionSchema,
		initialValues: {
			email: '',
		},
		onSubmit: values => {
			toast.success('Successfully added ' + values.email);
			form.resetForm();
		},
	});
	return (
		<Layout>
			<div
				className='-mt-[72px] w-full overflow-hidden relative'
				style={{
					background:
						'radial-gradient(113.04% 76.15% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100% ), #000',
				}}
			>
				<div className='h-[72px] w-full block'></div>
				<div
					className='absolute  w-full h-full xmd:left-[-250px] xmd:top-[-180px] xmd:opacity-70'
					style={{ mixBlendMode: 'color-dodge' }}
				>
					<Spline
						className='h-[651px] w-[651px]'
						scene='https://prod.spline.design/iTsATBbyYaz1Konq/scene.splinecode'
					/>
				</div>
				<div className='flex items-center min-h-[calc(100vh-72px)] py-20 justify-center w-full px-5 h-full flex-col'>
					<h1 className='text-center font-medium text-[48px] leading-[60px block] text-neutral-4 block mb-5 xmd:text-[35px] xmd:leading-[35px] xmd:mb-4'>
						Supercharge your business
					</h1>
					<p className='max-w-[325px] w-full mx-auto text-center text-neutral-10'>
						Meet the platform that will help you 100X your service business.
					</p>
					<div className='max-w-[577px] w-full relative mx-auto p-2 gradient-border mt-[100px] before:rounded-2xl xmd:mt-[120px]'>
						<div
							className='absolute h-[1px] w-10 top-0 left-3 animated-line'
							style={{
								background:
									'linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.7) )',
							}}
						></div>

						<div className='w-full p-2 before:rounded-xl gradient-border relative z-[8]'>
							<div className='w-full p-10 before:rounded-lg gradient-border-3 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)0%,rgba(255,255,255,0.00)100%)] backdrop-blur-[45px]'>
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
								<form onSubmit={form.handleSubmit}>
									<div className='flex items-center w-full gap-3 xmd:flex-col'>
										<input
											name='email'
											value={form.values.email}
											onChange={form.handleChange}
											className='bg-transparent py-[11px] px-2 rounded-lg border border-[rgba(255,255,255,0.3)] text-base block flex-1 text-white  placeholder:text-neutral-10 xmd:w-full'
											placeholder='Enter your email'
										/>

										<button
											type='submit'
											className='bg-neutral-4 rounded-lg text-lg h-[48px] px-6 transition-all duration-200 ease-linear hover:bg-white active:scale-90 border-none xmd:block xmd:w-full sm:text-center'
										>
											Join waitlist
										</button>
									</div>
									{form.touched && form.errors.email && (
										<p className='text-sm mt-2 text-red-500 block'>
											{form.errors.email}
										</p>
									)}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

const subscriptionSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
});

export default HomeHero;
