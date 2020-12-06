import React from 'react';

const Card =({name, email, id})=>{
	// const {name, email, id} =props;
	return (
		// <h1> Robofriends</h1> error as we only return one element.
		<div className ="bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5 tc">
			<img alt ="robots" src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>

		);
}

export default Card;