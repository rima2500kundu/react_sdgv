import React from "react";
import TrustedSlider from "../Components/TrustedSlider";
import UspContent from "../Components/UspContent";
import WhySdg from "../Components/WhySdg";
import Potential from "../Components/Potential";
import TalentVTab from "../Components/TalentVTab";

function Home(){
    return(
        <>
            <section className="full_width Home_banner">
                <div className="Home_banner_sub">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 Hom_bnr_left">
                                <div className="Hom_bnr_left_sub">
                                    <div className="banner_text">
                                        <h1>Experience Unmatched Tech Proficiency with <span> Sourcedesk’s</span> Remote Tech Professionals</h1>
                                        <div className="bnr_text_grphs">
                                            <img src="images/oragage_circle.png" alt="icon" className="bnr_text_grphs_main" />
                                            <img src="images/oragage_circle_dots.png" alt="icon" className="dot_pop" />
                                        </div> 
                                        <p>Discover the future of hiring with our innovative process, combining AI and human intelligence for optimal candidate matching.</p>
                                    </div>
                                    <div className="cmn_btn_grp">
                                        <a href="schedule-a-call.html" className="cmn_btn_fill">Hire Developers</a>
                                        <a href="apply-as-talent.html" className="cmn_btn_stroke">Apply For Jobs</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 Hom_bnr_right">
                                <div id="particles-js"></div> 
                                <img src="images/bnr_objects.png" alt="" className="bnr_object" />

                                <div className="material" id="loop_dna">
                                    <div className="dna" id="DNA"><div className="dna_color"></div></div>
                                    
                                </div>
                                <div className="bnr_right_atom1">
                                    <img src="images/atom_icon1.png" alt="Icon" />
                                    <img src="images/atom1_elmnts1.png" alt="icon" className="bnr_atom1_elimnts1" />
                                    <img src="images/atom1_elmnts2.png" alt="icon" className="bnr_atom1_elimnts2" />
                                    <img src="images/atom1_elmnts3.png" alt="icon" className="bnr_atom1_elimnts3" />
                                </div>
                                <div className="bnr_right_atom2">
                                    <img src="images/atom_icon2.png" alt="Icon" />
                                    <img src="images/atom2_elmnts1.png" alt="Icon" className="bnr_atom2_elimnts1" />
                                    <img src="images/atom2_elmnts2.png" alt="Icon" className="bnr_atom2_elimnts2" />
                                    <img src="images/atom2_elmnts3.png" alt="Icon" className="bnr_atom2_elimnts3" />
                                </div>
                            </div>
                        </div>
                </div>
            </section>

            <TrustedSlider defaultTitle="Trusted Buy" />

            <UspContent />

            <WhySdg />

            <Potential />

            <TalentVTab />

            <section className="full_width three_tab fix_padding border_top">
                <div className="container">
                    <div className="three_tab_top text_controller">
                        <h2>Discover Additional Technical Skills of <span> Sourcedesk Global’s</span> IT Talent Network</h2>  
                        <hr />
                    </div>

                    <div className="three_tab_bottom" id="horizontalTab">
                        <ul className="resp-tabs-list">
                            <li>Digital Marketing</li>
                            <li>Accounting & Finance</li>
                            <li>Virtual Assistant</li>
                        </ul>

                        <div className="resp-tabs-container">
                            <div>
                                <div className="three_tab_bt_top">
                                    <div className="three_tab_bt_top_left">
                                        <ul>
                                            <li>SEM & PPC Expert</li>
                                            <li>SEO Expert</li>
                                            <li>Programmatic Ad Manager</li>
                                            <li>Content Writer</li>
                                            <li>Social Media Manager</li>
                                            <li>Email Marketing Expert</li>
                                            <li>Video Marketing Expert</li>
                                            <li>ASO Expert</li>
                                        </ul>
                                    </div>  
                                    <div className="three_tab_bt_top_right"><img src="images/threeTabimg1.png" alt="Dots_Img" /></div>  
                                </div>

                                <div className="cmn_btn_grp">
                                    <a href="schedule-a-call.html" className="cmn_btn_fill">Hire Developers</a>
                                    <a href="apply-as-talent.html" className="cmn_btn_stroke">Apply For Jobs</a>
                                </div>
                            </div>
                            
                            <div>
                                <div className="three_tab_bt_top">
                                    <div className="three_tab_bt_top_left">
                                        <ul>
                                            <li>Accountants</li>
                                            <li>Bookkeepers</li>
                                            <li>Payroll Experts</li>
                                            <li>Financial Analysts</li>
                                            <li>QuickBooks</li>
                                            <li>Tax Consultants</li>
                                            <li>Payroll Experts</li>
                                            <li>Financial Analysts</li>
                                            <li>Tax Preparation Experts</li>
                                        </ul>
                                    </div>  
                                    <div className="three_tab_bt_top_right"><img src="images/threeTabimg2.png" alt="Dots_Img" /></div>  
                                </div>

                                <div className="cmn_btn_grp">
                                    <a href="schedule-a-call.html" className="cmn_btn_fill">Hire Developers</a>
                                    <a href="apply-as-talent.html" className="cmn_btn_stroke">Apply For Jobs</a>
                                </div>
                            </div>

                            <div>
                                <div className="three_tab_bt_top">
                                    <div className="three_tab_bt_top_left">
                                        <ul>
                                            <li>Personal VA</li>
                                            <li>Real Estate VA</li>
                                            <li>Data Entry Experts</li>
                                            <li>Ecommerce VA</li>
                                        </ul>
                                    </div>  
                                    <div className="three_tab_bt_top_right"><img src="images/threeTabimg3.png" alt="Dots_Img" /></div>  
                                </div>

                                <div className="cmn_btn_grp">
                                    <a href="schedule-a-call.html" className="cmn_btn_fill">Hire Developers</a>
                                    <a href="apply-as-talent.html" className="cmn_btn_stroke">Apply For Jobs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </section>    

            <section className="full_width Human_img fix_padding border_top">
                <div className="container">
                    <div className="text_controller">
                        <h2><span> Pre-Vetted and Qualified IT Talent Network</span> <br /> Parameters for Quality Assurance</h2>
                        <hr />
                    </div>

                    <div className="row Human_img_bottom">
                        <div className="col-12 col-md-7 col-sm-7 col-xl-7 Hmn_img_bt_left">
                            <ul>
                                <li>
                                    <div className="Hmn_bt_left_border"></div>
                                    <div className="Hmn_bt_left_text">Excellent Communication</div>
                                </li>
                                <li>
                                    <div className="Hmn_bt_left_border"></div>
                                    <div className="Hmn_bt_left_text">Technical Expertise</div>
                                </li>
                                <li>
                                    <div className="Hmn_bt_left_border"></div>
                                    <div className="Hmn_bt_left_text">Cultural Fit</div>
                                </li>
                                <li>
                                    <div className="Hmn_bt_left_border"></div>
                                    <div className="Hmn_bt_left_text">Problem-Solving Abilities</div>
                                </li>
                                <li>
                                    <div className="Hmn_bt_left_border"></div>
                                    <div className="Hmn_bt_left_text">Self-Discipline and Time Management Skills</div>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-5 col-sm-5 col-xl-5 Hmn_img_bt_right"><img src="images/Human_img.png" alt="images" /></div>
                    </div>
                </div>
            </section>        

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

            <section className="full_width Team_hire border_top fix_padding">
                <div className="container">
                    <div className="text_controller text_controller_center">
                        <h2>Streamlined Process for Hiring Top Talent</h2>   
                        <hr />
                    </div>

                    <div className="Team_hire_bt"> 
                        <ul>
                            <li>
                                <div className="Team_hire_bt_icon"><img src="images/tm_hrng_icon1.png" alt="Icon" /></div> 
                                <h2>Identify your <br /> Skill Requirements</h2>
                                <p>We set up a call to understand the specific skills you are looking for in a tech talent.</p>        
                                <div className="Team_hire_bt_number">1</div>
                            </li>
                            <li>
                                <div className="Team_hire_bt_icon"><img src="images/tm_hrng_icon2.png" alt="Icon" /></div> 
                                <h2>Pre-Vetted <br /> Talent Pool</h2>
                                <p>Our advanced algorithm and HR experts source the best candidates. You have access to a display of pre-vetted candidates on your dashboard.</p>         
                                <div className="Team_hire_bt_number">2</div>
                            </li>
                            <li>
                                <div className="Team_hire_bt_icon"><img src="images/tm_hrng_icon3.png" alt="Icon" /></div> 
                                <h2>Schedule <br /> Interviews</h2>
                                <p>Once you select your preferred candidates, our dedicated Account Manager sets up interviews with them.</p>       
                                <div className="Team_hire_bt_number">3</div>
                            </li>
                            <li>
                                <div className="Team_hire_bt_icon"><img src="images/tm_hrng_icon4.png" alt="Icon" /></div> 
                                <h2>Risk-Free <br /> Trial Period</h2>
                                <p>Start your project with confidence with our two-week risk-free trial period.</p>        
                                <div className="Team_hire_bt_number">4</div>
                            </li>
                        </ul>

                        <div className="cmn_btn_grp cmn_btn_grp_center"><a href="hire-development-team.html" className="cmn_btn_fill">Hire a Team</a></div>
                    </div>
                </div>
            </section>

            <section className="full_width home_pgbk fix_padding">
                <div className="container">
                    <div className="text_controller text_controller_center">
                        <h2>Access a Network of Top-Tier Talent</h2>  
                    </div>
                    <div className="cmn_btn_grp cmn_btn_grp_center">
                        <a href="/" className="cmn_btn_stroke">Download Our Transparent Pricing Guide</a>
                        <a href="schedule-a-call" className="cmn_btn_fill">Collaborate with the Best in Business</a>
                    </div>
                </div>        
            </section>
        </>
    )  

}

export default Home;