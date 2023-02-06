import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Views/Home";
import About from "../Views/About";
import Contact from "../Views/Contact";
import Detail from "../Views/Detail";
import NotFound from "../Views/NotFound";

export default function Router() {
    return (
		<React.Fragment>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</React.Fragment>
	);    
};
