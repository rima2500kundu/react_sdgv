import React from "react";
import TrustedSlider from "../Components/TrustedSlider";
import TableApi from "../Components/TableApi";
import InnerBanner from "../Components/InnerBanner";

const About = () => {
    return(
        <>
            <InnerBanner
                InnBanner="url(images/Cube_gr3.png)"
                BnrRightImg="images/Cube_gr2.png"
                TitleInn={["Build a High-Efficiency Tech Team ", <span>Build a </span>, " Build a High-Efficiency Tech Team"]}
                ParaInn="gfdfdf"
            />

            <TableApi />
            
            <TrustedSlider defaultTitle="About Trusted Buy" />
        </>
    );
}

export default About;