import React from 'react';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import CardThree from './CardThree';

const Body = () => {
	return (
		<div className='body_container'>
			<h2>Plans</h2>
			<p>CloudFlare supercharges websites. To get a sense of whate that means,compare our plans below.</p>
			<hr />
			<div className='body_wraper'>
				<CardOne />
				<CardTwo />
				<CardThree />
			</div>
		</div>
	);
}

export default Body;