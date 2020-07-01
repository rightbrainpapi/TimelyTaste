import React from "react";
import NavBar from "./components/NavBar";
// import { BrowserRouter as Router } from "react-router-dom";
// import Route from "react-router-dom/Route";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import "./App.css";

function App() {
	return (
		<div className="App">
			<NavBar />

			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<Router>
					<Route
						path="/"
						exact={true}
						render={() => {
							return <h1>Welcome</h1>;
						}}
					></Route>
					<Route
						path="/restaurants"
						exact={true}
						render={() => {
							return <h1>Restaurants</h1>;
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
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
