import React from 'react';

const CardThree = () => {
	return (
		<div className="CardThree card selected_card">
			<div className='status selected_status'><p>MOST POPULAR</p></div>
			<div className='heading'>
				<h2>Business</h2>
			</div>
			<div className='list_items'>
				<div className='ul_wrap'>
					<ul>
						<li>Fast site performance</li>
						<li>Broad security protection</li>
						<li><a href='#'>ssl</a></li>
						<li>Powerful status about your visitors</li>
						<li>Peace of mind about running your website so you can get back to whate you love</li>
					</ul>
				</div>
			</div>
			<div className='btn'>
				<input type='button' value='sign up now' />
			</div>
		</div>
	);
}
export default CardThree;