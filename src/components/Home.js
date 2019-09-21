import React from 'react';

const Home = () => {
	return (
		<div className='home_container'>
			<div className="logo">
				<div className='png' style={{display: 'inline-block'}}></div>
				<span>CLOUDFLARE</span>
			</div>
			<div className='home_nav'>
			<p>Sales 1-888-993-5273  |  </p>
			<ul>
				<li><a href='#'>Home</a></li>
				<li><a href='#'>Features</a></li>
				<li><a href='#'>Help</a></li>
				<li><a href='#'>Sign up</a></li>
				<li><a href='#'>Login</a></li>
				<li><a href='#'><button>Under Attack?</button></a></li>
			</ul>
			</div>
		</div>
	);
}

export default Home;