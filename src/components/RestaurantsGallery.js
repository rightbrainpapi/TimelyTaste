import React, { Component } from "react";

import Filter from "./Filter";
import Listings from "./Listings";
// import RestaurantsGallery from "./RestaurantsGallery";
import listingsData from "./data/listingsData";

class RestaurantsGallery extends Component {
	constructor() {
		super();
		this.state = {
			name: "Darnell",
			listingsData: listingsData,
			city: "All",
			homeType: "All",
			bedrooms: 0,
			min_price: 0,
			max_price: 10000000,
			min_floor_space: 0,
			max_floor_space: 50000,
			elevator: false,
			swimming_pool: false,
			finished_basement: false,
			gym: false,

			filteredData: listingsData,
			populateFormsData: "",
			sortby: "price-dsc",
			view: "box",
			search: "",
		};
	}

	componentWillMount() {
		//Default sorting listings from lowest price t highest price.
		var listingsData = this.state.listingsData.sort((a, b) => {
			return a.price - b.price;
		});

		this.setState({
			listingsData,
		});
	}
	change = (e) => {
		var name = e.target.name;
		var value =
			e.target.type === "checkbox" ? e.target.checked : e.target.value;
		this.setState(
			{
				[name]: value, //this takes the value of the field and creates a state key using the name of the form.
			},
			() => {
				console.log(this.state);
				this.filteredData();
			}
		);
	};

	changeView = (viewName) => {
		this.setState({
			view: viewName,
		});
	};

	filteredData = (e) => {
		var newData = this.state.listingsData.filter((item) => {
			return (
				item.price >= this.state.min_price &&
				item.price <= this.state.max_price &&
				item.floorSpace >= this.state.min_floor_space &&
				item.floorSpace <= this.state.max_floor_space &&
				item.rooms >= this.state.bedrooms
			);
		});

		//if the state.city is not equal to 'All', filter to find only the particular city
		if (this.state.city != "All") {
			newData = newData.filter((item) => {
				return item.city == this.state.city;
			});
		}

		//if the state.homeType is not equal to 'All', filter to find only the particular city
		if (this.state.homeType != "All") {
			newData = newData.filter((item) => {
				return item.homeType == this.state.homeType;
			});
		}

		//if the state.homeType is not equal to 'All', filter to find only the particular city
		if (this.state.sortby == "price-dsc") {
			newData = newData.sort((a, b) => {
				return a.price - b.price;
			});
		}

		//if the state.homeType is not equal to 'All', filter to find only the particular city
		if (this.state.sortby == "price-asc") {
			newData = newData.sort((a, b) => {
				return b.price - a.price;
			});
		}

		//if the state.homeType is not equal to 'All', filter to find only the particular city
		if (this.state.search != "") {
			newData = newData.filter((item) => {
				// make every item lower case and store it in city variable
				var city = item.city.toLowerCase();
				// take the text that was typed into the search field make it lower case  then story it to the variable searchText
				var searchText = this.state.search.toLowerCase();
				// match the searchText with the spelling of all city.
				var n = city.match(searchText);

				//if it matches then return the array
				if (n != null) {
					return true;
				}
			});
		}

		this.setState({
			filteredData: newData,
		});
	};

	populateForms = (e) => {
		//----------------CITY
		var cities = this.state.listingsData.map((item) => {
			return item.city;
		});
		//Set removes any repeates and keeps only one instance of the city
		cities = new Set(cities);
		cities = [...cities].sort(); //This creates an array using the data that is in the set

		//----------------HOMETYPES
		var homeTypes = this.state.listingsData.map((item) => {
			return item.homeType;
		});
		//Set removes any repeates and keeps only one instance of the homeType
		homeTypes = new Set(homeTypes);
		homeTypes = [...homeTypes].sort(); //This creates an array using the data that is in the set

		//----------------ROOMS
		var bedrooms = this.state.listingsData.map((item) => {
			return item.rooms;
		});
		//Set removes any repeates and keeps only one instance of the room
		bedrooms = new Set(bedrooms);
		bedrooms = [...bedrooms].sort(); //This creates an array using the data that is in the set

		this.setState(
			{
				populateFormsData: {
					homeTypes,
					bedrooms,
					cities,
				},
			},
			() => {
				console.log(this.state);
			}
		);
	};
	render() {
		return (
			<div>
				{" "}
				<section id="content-area">
					<Filter
						change={this.change}
						globalState={this.state}
						populateAction={this.populateForms}
					/>
					<Listings
						changeView={this.changeView}
						change={this.change}
						globalState={this.state}
						listingsData={this.state.filteredData}
					/>
				</section>
			</div>
		);
	}
}

export default RestaurantsGallery;
