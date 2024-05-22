import React from "react";
import TrustedSlider from "../Components/TrustedSlider";
import TableApi from "../Components/TableApi";
import InnerBanner from "../Components/InnerBanner";

const About = () => {
    return(
        <>
            <InnerBanner />

            <TableApi />
            
            <TrustedSlider defaultTitle="About Trusted Buy" />
        </>
    );
}

export default About;