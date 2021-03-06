import React, { Component } from "react";

class Hero extends Component {
	render() {
		return (
			<div className="heroContainer dark-img ">
				<img
					className="heroImage"
					src="https://user-images.githubusercontent.com/44482460/86302014-73982380-bbd5-11ea-8446-81592a20a181.png"
					alt=""
				/>
				<div className="heroTextContainer">
					<h1>TIMELY TASTE</h1>
					<h2>A Modern Virgin Islands Restaurant Ordering Service</h2>
					<button>
						<a href="#content-area">Explore Now</a>
					</button>
				</div>
			</div>
		);
	}
}

export default Hero;
