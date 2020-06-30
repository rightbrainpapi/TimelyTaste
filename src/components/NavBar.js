import React, { Component } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import "./NavBar.css";
import { BrowserRouter as Router } from "react-router-dom";
// import Route from "react-router-dom/Route";
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
				<div className="socialMediaBar">
					<div className="contact">
						<div style={{ width: 50, height: 50 }}>
							<Icon size={"100%"} icon={phone} />
						</div>

						<div className="tele">347.380.9000</div>
						<div className="email">order@timelytaste.com</div>
					</div>

					<div className="socialMediaLogo">
						<div style={{ width: 50, height: 50 }}>
							<Icon size={"100%"} icon={facebookSquare} />
						</div>
						<div style={{ width: 50, height: 50 }}>
							<Icon size={"100%"} icon={instagram} />
						</div>
						<div style={{ width: 50, height: 50 }}>
							<Icon size={"100%"} icon={twitterSquare} />
						</div>
					</div>
				</div>
				<div className="navBar"></div>
			</div>
		);
	}
}

export default NavBar;

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
