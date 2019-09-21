import React from 'react';

const Nav = () => {
	return (
		<div className='nav_wrap'>
			<div className='nav_container'>
				<p><a href='#'>WHAT WE DO</a></p>
				<ul className='nav_ul'>
					<li><a href='#'>Overview</a></li>
					<li><a href='#'>CDN</a></li>
					<li><a href='#'>DNS</a></li>
					<li><a href='#'>Optimization</a></li>
					<li><a href='#'>Security</a></li>
					<li><a href='#'>SSL</a></li>
					<li><a href='#'>Analystics</a></li>
					<li><a href='#'>Websockets</a></li>
					<li><a href='#'>Apps</a></li>
					<li><a href='#'>Enterprise</a></li>
					<li><a href='#'>plans</a></li>
				</ul>
			</div>
		</div>
	);
}

export default Nav;