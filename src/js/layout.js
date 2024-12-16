import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import DetailedView  from './views/detailedView.js';
import PlanetView from "./views/planetView.js";
import VehicleView from "./views/vehicleView.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/detailedView/:uid" element={<DetailedView />} />
						<Route path="/planetView/:uid" element={<PlanetView />} />
						<Route path="/vehicleView/:uid" element={<VehicleView />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={							
							<div className="container-fluid position-relative text-center p-0">
								<div style={{"margin-top":"65px"}} className="position-absolute top-0 start-50 translate-middle-x w-75 bg-dark bg-opacity-50 text-white p-3 rounded">
									<h1>This isn't the page you are looking for.</h1>
								</div>
							</div>							
							} 
						/>
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
