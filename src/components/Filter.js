import React, { Component } from "react";

class Filter extends Component {
	constructor() {
		super();
		this.state = {
			name: "Darnell",
		};
	}

	componentWillMount() {
		this.props.populateAction();
	}

	//Dynamically creating city list choices
	cities = (e) => {
		if (this.props.globalState.populateFormsData.cities != undefined) {
			var { cities } = this.props.globalState.populateFormsData;
			console.log(cities);
			return cities.map((item) => {
				return (
					<option key={item} value={item}>
						{item}
					</option>
				);
			});
		}
	};

	//Dynamically creating homeType list choices
	homeTypes = (e) => {
		if (this.props.globalState.populateFormsData.homeTypes != undefined) {
			var { homeTypes } = this.props.globalState.populateFormsData;
			console.log(homeTypes);
			return homeTypes.map((item) => {
				return (
					<option key={item} value={item}>
						{item}
					</option>
				);
			});
		}
	};

	bedrooms = (e) => {
		if (this.props.globalState.populateFormsData.bedrooms != undefined) {
			var { bedrooms } = this.props.globalState.populateFormsData;
			console.log(bedrooms);
			return bedrooms.map((item) => {
				return (
					<option key={item} value={item}>
						{item}+ BR
					</option>
				);
			});
		}
	};

	render() {
		return (
			<section id="filter">
				<div className="inside">
					<h4>Filter</h4>

					<label htmlFor="City">City</label>
					<select
						name="city"
						className=" filters city"
						onChange={this.props.change}
					>
						<option value="All">All</option>
						{this.cities()}
					</select>

					<label htmlFor="Home Type">Home Type</label>
					<select
						name="homeType"
						className="filters homeType"
						onChange={this.props.change}
					>
						<option value="All">All Homes</option>
						{this.homeTypes()}
						{/* <option value='Ranch'>Ranch</option>
                    <option value='Apartment'>Apartment</option>
                    <option value='Studio'>Studio</option>
                    <option value='Room'>Room</option>
                    <option value='Duplex'>Duplex</option> */}
					</select>

					<label htmlFor="Bedrooms">Bedrooms</label>
					<select
						name="bedrooms"
						className="filters bedrooms"
						onChange={this.props.change}
					>
						{/* <option value='0' >0+ BR</option> */}
						{this.bedrooms()}
						{/* <option value='1' >1+ BR</option>
                    <option value='2' >2+ BR</option>
                    <option value='3' >3+ BR</option>
                    <option value='4' >4+ BR</option>
                    <option value='5' >5+ BR</option> */}
					</select>

					<div className="filters price">
						<span className="title">Price</span>

						<div className="price-input">
							<input
								type="text"
								name="min_price"
								value={this.props.globalState.min_price}
								className="min-price"
								onChange={this.props.change}
							/>
							<input
								type="text"
								name="max_price"
								value={this.props.globalState.max_price}
								className="max-price"
								onChange={this.props.change}
							/>
						</div>
					</div>

					<div className="filters floor-space">
						<span className="title">Floor Space</span>

						<div className="floor-space-input">
							<input
								type="text"
								name="min_floor_space"
								value={this.props.globalState.min_floor_space}
								className="min-floor-space"
								onChange={this.props.change}
							/>
							<input
								type="text"
								name="max_floor_space"
								value={this.props.globalState.max_floor_space}
								className="max-floor-space"
								onChange={this.props.change}
							/>
						</div>
					</div>

					<div className="filters extras">
						<span className="title"> Extras </span>

						<label htmlFor="extras">
							<span>Elevators</span>
							<input
								name="elevator"
								value="elevator"
								type="checkbox"
								onChange={this.props.change}
							/>
						</label>
						<label htmlFor="extras">
							<span>Swimming Pool</span>
							<input
								name="swimming_pool"
								value="swimming_pool"
								type="checkbox"
								onChange={this.props.change}
							/>
						</label>
						<label htmlFor="extras">
							<span>Finished Basement</span>
							<input
								name="finished_basement"
								value="finished_basement"
								type="checkbox"
								onChange={this.props.change}
							/>
						</label>
						<label htmlFor="extras">
							<span>Gym</span>
							<input
								name="gym"
								value="gym"
								type="checkbox"
								onChange={this.props.change}
							/>
						</label>
					</div>
				</div>
			</section>
		);
	}
}

export default Filter;
