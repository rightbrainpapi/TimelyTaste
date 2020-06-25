import React from "react";

// import "./NavBar.css";

function NavBar() {
	return (
		<div className="NavBar">
			<img
				className="timely-taste-logo"
				src="https://user-images.githubusercontent.com/44482460/84946475-cb536c80-b0b6-11ea-9744-4a1da49e106d.png"
				alt=""
			/>
			<nav>
				<ul>
					<li>
						<a href="www.google.com">Home</a>
					</li>

					<li>
						<a href="www.google.com">Menu</a>
					</li>

					<li>
						<a href="www.google.com">Order Now</a>
					</li>

					<li>
						<a href="www.google.com">Contact Us</a>
					</li>
					<li>
						<a href="www.google.com">Registration</a>
					</li>
					<li>
						<a href="www.google.com">Sign In</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default NavBar;
