import React from "react";
import NavBar from "./components/NavBar";
// import { BrowserRouter as Router } from "react-router-dom";
// import Route from "react-router-dom/Route";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import "./App.css";
//////////////////////////////////////////
// import Hero from "./components/Hero";
import Home from "./components/Home";
import RestaurantsGallery from "./components/RestaurantsGallery";

function App() {
	return (
		<div className="App">
			<NavBar />

			<header>
				<Router>
					<Route
						path="/"
						exact={true}
						render={() => {
							return <Home />;
						}}
					></Route>
					<Route
						path="/restaurants"
						exact={true}
						render={() => {
							return <RestaurantsGallery />;
						}}
					></Route>

					<Route
						path="/blog"
						exact={true}
						render={() => {
							return <h1>Blog</h1>;
						}}
					></Route>
				</Router>
			</header>
		</div>
	);
}

export default App;
