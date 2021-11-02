import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
import Freelances from "./pages/Freelances";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import { ThemeProvider } from "./utils/context";
import GlobalStyle from "./utils/style/GlobalStyle";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ThemeProvider>
				<GlobalStyle>
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
					<Footer />
				</GlobalStyle>
			</ThemeProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
