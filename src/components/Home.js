import React, { Component } from "react";

import Hero from "./Hero";
import RestaurantsGallery from "./RestaurantsGallery";

class Home extends Component {
	render() {
		return (
			<div>
				<Hero />
				<RestaurantsGallery />
			</div>
		);
	}
}

export default Home;
