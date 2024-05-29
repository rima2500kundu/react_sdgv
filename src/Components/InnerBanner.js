import React, { useState } from 'react';

// style={{background: "#fafbfd url(images/Cube_gr3.png) no-repeat 70% bottom"}}

function InnerBanner({InnBanner, BnrRightImg, TitleInn, ParaInn}) {
  return (
    <>
        <section className="full_width Home_banner inner_banner devlper_banner">
            <div className="Home_banner_sub" style={{backgroundImage: InnBanner}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 Hom_bnr_left inner_bnr_left">
                            <div className="banner_text">
                                <h1>{TitleInn}</h1>
                                {ParaInn==="" ? false : <p>{ParaInn}</p>}
                            </div>

                            <div className="cmn_btn_grp">
                                <a href="" className="cmn_btn_fill">Tap Into Our Talent Pool</a>
                            </div>
                        </div>

                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 inner_bnr_right">
                            {BnrRightImg==="" ? false : <img src={BnrRightImg} alt="graphics" />} 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default InnerBanner;