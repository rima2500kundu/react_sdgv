import React from 'react'
import InnerBanner from '../Components/InnerBanner';
import TrustedSlider from "../Components/TrustedSlider";
import WhySdg from '../Components/WhySdg';

 function DistinctVettingProcess() {
  return (
    <>
      <InnerBanner
        InnBanner="url(images/inner_banner_grphcs2.png)"
        BnrRightImg=""
        TitleInn={["Build a High-Efficiency Tech Team ", <span>Build a </span>, " Build a High-Efficiency Tech Team"]}
        ParaInn=""
      />

      <TrustedSlider defaultTitle="Trusted Buy" />

      <WhySdg />
    </>
  )
}

export default DistinctVettingProcess;