import React from "react";
import TrustedSlider from "../Components/TrustedSlider";
import UspContent from "../Components/UspContent";
import WhySdg from "../Components/WhySdg";
import Potential from "../Components/Potential";
import TalentVTab from "../Components/TalentVTab";
import TalentParameter from "../Components/TalentParameter";
import PrideHire from "../Components/PrideHire";
import TopTalent from "../Components/TopTalent";
import SkillTab from "../Components/SkillTab";
import Homepgbrk from "../Components/Homepgbrk";
import HomeBanner from "../Components/HomeBanner";

function Home(){
    return(
        <>
            <HomeBanner />

            <TrustedSlider defaultTitle="Trusted Buy" />

            <UspContent />

            <WhySdg />

            <Potential />

            <TalentVTab />

            <SkillTab />

            <TalentParameter />

            <PrideHire />

            <TopTalent />

            <Homepgbrk />
        </>
    )  

}

export default Home;