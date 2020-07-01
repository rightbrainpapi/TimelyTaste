import React, { Component } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import "./NavBar.css";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Icon } from "react-icons-kit";
import { phone } from "react-icons-kit/icomoon/phone";

//icons for social media
import { instagram } from "react-icons-kit/fa/instagram";
import { facebookSquare } from "react-icons-kit/fa/facebookSquare";
import { twitterSquare } from "react-icons-kit/fa/twitterSquare";

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

					<div className="navBottomRight"></div>
				</div>
			</div>
		);
	}
}

export default NavBar;
// <div className="timelyTasteLogo"></div>
// <img
// className="timely-taste-logo"
// src="https://user-images.githubusercontent.com/44482460/86069471-ed020b80-ba47-11ea-8053-c4fcdcad96fd.png"
// alt=""
// />

// <nav>
// <ul>
// 	<li>
// 		<a href="/">Home</a>
// 	</li>

// 	<li>
// 		<a href="menu">Menu</a>
// 	</li>

// 	<li>
// 		<a href="www.google.com">Order Now</a>
// 	</li>

// 	<li>
// 		<a href="login">Login</a>
// 	</li>
// 	<li>
// 		<a href="registration">registration</a>
// 	</li>
// </ul>

// <Router>
// 	<Route
// 		path="/"
// 		exact={true}
// 		render={() => {
// 			return <h1>Welcome</h1>;
// 		}}
// 	></Route>
// 	<Route
// 		path="/menu"
// 		exact={true}
// 		render={() => {
// 			return <h1>Menu</h1>;
// 		}}
// 	></Route>

// 	<Route
// 		path="/Registration"
// 		exact={true}
// 		render={() => {
// 			return <h1>Registration</h1>;
// 		}}
// 	></Route>
// </Router>
// </nav>
