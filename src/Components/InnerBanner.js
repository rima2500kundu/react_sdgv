import React from 'react';

function InnerBanner(props) {
  return (
    <>
        <section className="full_width Home_banner inner_banner devlper_banner">
            <div className="Home_banner_sub" style={{background: "#fafbfd url(images/Cube_gr3.png) no-repeat 70% bottom"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 Hom_bnr_left inner_bnr_left">
                            <div className="banner_text">
                                <h1>Accelerate Your Success <span>Harness the Power of Our Top Developers</span></h1>
                                <p>Unlock Exceptional Tech Skills and Collaborate with SDG's Remarkable Developers.</p>
                            </div>

                            <div className="cmn_btn_grp">
                                <a href="" className="cmn_btn_fill">Tap Into Our Talent Pool</a>
                            </div>
                        </div>

                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 inner_bnr_right">
                            <img src="images/Cube_gr2.png" alt="graphics" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default InnerBanner;