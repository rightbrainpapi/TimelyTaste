import React, { Component } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import "./NavBar.css";
// import { BrowserRouter as Router } from "react-router-dom";
// import Route from "react-router-dom/Route";
import { Icon } from "react-icons-kit";
import { phone } from "react-icons-kit/icomoon/phone";

//icons for social media
import { instagram } from "react-icons-kit/fa/instagram";
import { facebookSquare } from "react-icons-kit/fa/facebookSquare";
import { twitterSquare } from "react-icons-kit/fa/twitterSquare";

// icons for bottom nav
import { calendar } from "react-icons-kit/fa/calendar";
import { shoppingCart } from "react-icons-kit/fa/shoppingCart";
import { search } from "react-icons-kit/fa/search";

class NavBar extends Component {
	render() {
		return (
			<div className="NavBarContainer">
				<div className="navTopContainer">
					<div className="navTopLeft">
						<div style={{ width: 50, height: 50 }}>
							<Icon size={"100%"} icon={phone} />
						</div>

						<div className="tele">347.380.9000</div>
						<div className="email">order@timelytaste.com</div>
					</div>

					<img
						className="timely-taste-logo "
						src="https://user-images.githubusercontent.com/44482460/86275944-0d45dd80-bba2-11ea-915f-39adc317d8b7.png"
						alt=""
					/>

					<div className="navTopRight">
						<div className="logo">
							<div className="fbIcon" style={{ width: 50, height: 50 }}>
								<Icon size={"75%"} icon={facebookSquare} />
							</div>
							<div style={{ width: 50, height: 50 }}>
								<Icon size={"75%"} icon={instagram} />
							</div>
							<div style={{ width: 50, height: 50 }}>
								<Icon size={"75%"} icon={twitterSquare} />
							</div>
						</div>

						<div className="dropDownContainer">
							<button className="dropdown" disabled="disabled">
								English
							</button>
						</div>
					</div>
				</div>

				<div className="navBottomContainer">
					<div className="navBottomLeft">
						<h1>
							<a href="/">Home</a>
						</h1>
						<h1>
							<a href="restaurants">Restaurants</a>
						</h1>

						<h1>
							<a href="blog">Blog</a>
						</h1>
					</div>

					<div className="navBottomRight">
						<div className="calendarContainer">
							<div className="calendarIcon" style={{ width: 50, height: 50 }}>
								<Icon size={"100%"} icon={calendar} />
							</div>
							<h1>Book a Table</h1>
						</div>

						<div className="shoppingCartContainer">
							<div className="shoppingCart" style={{ width: 50, height: 50 }}>
								<Icon size={"100%"} icon={shoppingCart} />
							</div>
							<h1>2 items - $20.89</h1>
						</div>

						<div className="searchContainer">
							<div className="search" style={{ width: 50, height: 50 }}>
								<Icon size={"100%"} icon={search} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NavBar;
