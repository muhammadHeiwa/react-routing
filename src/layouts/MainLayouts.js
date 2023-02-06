import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayouts(props) {
    return(
        <React.Fragment>
            <Navbar />
                {props.children}
            <Footer />
        </React.Fragment>
    )
};
