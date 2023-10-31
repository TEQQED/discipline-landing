import React from 'react';
import HomeHero from './HomeHero';
import HomeFAQ from './HomeFAQ';
import HomeWorkWith from './HomeWorkWith';
import StayInLoop from './StayInLoop';

const Home = () => {
	return (
		<>
			<HomeHero />
			<HomeWorkWith />
			<HomeFAQ />
			<StayInLoop />
		</>
	);
};

export default Home;
