import React from 'react'

function PrideHire() {
  return (
    <>
        <section className="full_width Hiring_Genius fix_padding border_top">
            <div className="container">
                <div className="text_controller text_controller_center">
                    <h2>We Take Pride in Attracting and Hiring <br />the Top 10% of Software Engineers</h2>  
                    <hr />
                </div>

                <div className="row d-none d-md-flex">
                    <div className="col-12 col-md-4 col-sm-6 col-xl-4 col-lg-4 Hrng_Gns_left">
                        <ul>
                            <li>Job Application</li>
                            <li>Online Test <span>(40%)</span></li>
                            <li>In-person Interview<span>(20%)</span></li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-4 col-sm-12 col-xl-4 col-lg-4  Hrng_Gns_filter">
                        <img src="images/fliter_process.png" alt="Filter" />
                        <div className="Hrng_Gns_filter_point">
                            <div className="hng_gns_finalPoint">7</div>
                            <h2><span>Staffing Hero </span>(Top 10%)</h2>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-sm-6 col-xl-4 col-lg-4 Hrng_Gns_right">
                        <ul>
                            <li>HR Screening <span> (60%)</span></li>   
                            <li className="text-xxl-nowrap">AI-Powered Technical Test <span>(30%)</span></li>    
                            <li>Live Coding Challenge <span>(15%)</span></li>                         
                        </ul>
                    </div>
                </div>

                <div className="row d-flex d-md-none">
                    <div className="col-12 col-md-4 col-xl-4 col-lg-4 Hrng_Gns_left">
                        <ul>
                            <li>Job Application</li>
                            <li>HR Screening <span> (60%)</span></li>
                            <li>Online Test <span>(40%)</span></li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-4 col-xl-4 col-lg-4  Hrng_Gns_filter">
                        <img src="images/fliter_process.png" alt="Filter" />
                        <div className="Hrng_Gns_filter_point">
                            <div className="hng_gns_finalPoint">7</div>
                            <h2><span>Staffing Hero </span>(Top 10%)</h2>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-xl-4 col-lg-4 Hrng_Gns_right">
                        <ul>
                            <li className="text-xxl-nowrap">AI-Powered Technical Test <span>(30%)</span></li>  
                            <li>In-person Interview<span>(20%)</span></li>  
                            <li>Live Coding Challenge <span>(15%)</span></li>                         
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PrideHire;