import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./components/Error";
import Header from "./components/Header";
import "./index.css";
import Freelances from "./pages/Freelances";
import Home from "./pages/Home";
import Survey from "./pages/Survey";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<div className={`max-w-screen-xl mx-auto font-display`}>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/survey/:questionNumber">
						<Survey />
					</Route>
					<Route exact path="/freelances">
						<Freelances />
					</Route>
					<Route>
						<Error />
					</Route>
				</Switch>
			</div>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
