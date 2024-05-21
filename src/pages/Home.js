import React from "react";
import TrustedSlider from "../Components/TrustedSlider";

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

            <TrustedSlider title="Trusted Buy" />

            <section className="full_width USP_bottom_sec" data-inviewport="scale-in">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 USP_bottom_image">
                            <div className="USP_bottom_image_grp">
                                <div className="USP_bt_border">
                                    <svg>
                                        <line x1="0" y1="5%" x2="100%" y2="5%" className="ln1"/>
                                        <line x1="95%" y1="0" x2="95%" y2="100%" className="ln1"/>
                                        <line x1="100%" y1="95%" x2="0" y2="95%" className="ln1"/>
                                        <line x1="5%" y1="0" x2="5%" y2="100%" className="ln1"/>
                                    </svg>
                                </div>

                                <div className="cube_design">
                                    <svg>
                                        <line x1="0%" y1="49%" x2="20%" y2="21%"/> 
                                        <line x1="20%" y1="21%" x2="55%" y2="11%"/> 
                                        <line x1="80%" y1="33%" y2="11%" x2="55%"/> 
                                        <line x1="80%" y1="33%" x2="46%" y2="44%"/> 
                                        <line x1="46%" y1="44%" x2="20%" y2="21%"/> 
                                        <line x1="44%" y1="90%" x2="0%" y2="49%"/>
                                        <line x1="97%" y1="71%" x2="44%" y2="90%"/>
                                        <line x1="44%" y1="90%" x2="46%" y2="44%"/>
                                        <line x1="97%" y1="71%" x2="80%" y2="33%"/> 
                                        <line x1="97%" y1="71%" x2="52%" y2="32%" className="faded_line"/>
                                        <line x1="0%" y1="49%" x2="52%" y2="32%" className="faded_line"/>
                                        <line x1="52%" y1="32%" x2="55%" y2="11%" className="faded_line"/>                          
                                    </svg>   
                                </div>

                                <div className="piramid_dsgn">
                                    <img src="images/piramid1.png" alt="Icon" />
                                    <img src="images/piramid2.png" alt="Icon" />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 USP_bottom_text">
                            <div className="text_controller">
                                <h2>Revolutionize Your <br />Hiring Process with Our AI-Powered Platform</h2>
                                <hr />
                                <p>Secure the best tech talent with our cutting-edge AI-driven platform. Our comprehensive hiring solution offers deeply vetted developers, tech leads, and other professionals with technical expertise to drive your business's success. Our advanced algorithms analyze résumés, code samples, and online profiles to identify candidates who meet your technical requirements, ensuring you find the right talent for your needs.</p>
                            </div>

                            <div className="text_controller">
                                <h2>Accelerate Your <br /> Career with SDG</h2>
                                <hr />
                                <p>Sourcedesk Global’s innovative platform connects you with leading companies seeking skilled developers, providing access to a wide range of projects and challenges. Our cutting-edge technology analyzes your skills and experience to match you with the best possible opportunities. Whether starting out or seeking to make a change, our platform empowers professionals to find the perfect job to take their career to the next level.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="full_width why_sdg" data-inviewport="scale-in">
                <div className="container">
                    <div className="text_controller text_controller_center">
                        <h2>Why <span>Sourcedesk Global?</span></h2> 
                        <hr />               
                    </div>

                    <div className="row">
                        <div className="col-6 col-md-3 col-sm-3 col-xl-3 why_sdg_row">
                            <h4>Access Top <br /> Talent with Ease</h4>
                            <div className="two_dots"><img src="images/6lines.png" alt="images" /></div>
                            <h4>Hire in just 5 Days  <br /> with Fast Turnaround</h4>
                        </div>

                        <div className="col-6 col-md-3 col-sm-3 col-xl-3 why_sdg_row">
                            <h4>Vet Top Professionals <br /> in the Top 10%</h4>
                            <div className="two_dots"><img src="images/6lines.png" alt="images" /></div>
                            <h4>Save Costs by <br /> up to 66%</h4>
                        </div>

                        <div className="col-6 col-md-3 col-sm-3 col-xl-3 why_sdg_row">
                            <h4>Match Time <br /> Zones Seamlessly</h4>
                            <div className="two_dots"><img src="images/6lines.png" alt="images" /></div>
                            <h4>Get Full IT Support and <br /> Prestigious Co-Working Spaces</h4>
                        </div>

                        <div className="col-6 col-md-3 col-sm-3 col-xl-3 why_sdg_row">
                            <h4>Enjoy a Hassle-Free Hiring <br /> Process with a 2-Week Free Trial</h4>
                            <div className="two_dots"><img src="images/6lines.png" alt="images" /></div>
                            <h4>Streamline Your <br /> Hiring Effortlessly</h4>
                        </div>

                        <div className="why_sdg_graphics">
                            <svg viewBox="0 0 1000 300">
                                <path d="M2,200  Q140,85 146,86  Q165,70   252,138  Q367,225  381,227  Q395,235   519,141  Q586,92   600,87  Q627,67 722,147  Q820,221 842,228 T1000,110" fill="none" />
                                <path d="M2,110  Q95,191 150,227  Q163,230   264,155  Q379,78  379,85  Q403,67   560,198  Q615,239   623,225  Q690,178 769,123  Q830,77 850,83 T1000,200" fill="none" />
                            </svg>
                        </div>
                    </div>

                    <div className="cmn_btn_grp"><a href="schedule-a-call.html" className="cmn_btn_fill">Hire Developers</a></div>
                </div>
            </section>        

            <section className="full_width We_harness fix_padding border_top" data-inviewport="scale-in">
                <div className="container">
                    <div className="text_controller text_controller_center">
                        <h2><span> Unleashing the Potential of Exceptional Minds </span> <br /> Maximizing Output and Optimizing Contribution </h2>  
                        <hr />               
                        <p>Sourcedesk Global helps top-talent unleash their full potential through world-class benefits and support to deliver the best for you.</p>
                    </div>

                    <div className="row We_harness_bottom">
                        <div className="col-12 col-md-6 col-sm-5 col-xl-5 We_hrns_image">
                            <svg viewBox="0 0 610 610">
                                <circle cx="306" cy="292" r="290" fill="none"/> 
                            </svg>

                            <div className="We_hrns_image_grp">
                                <img src="images/flower1.png" alt="Flower" className="We_hrns_image_main" />                      
                                <img src="images/flower1_wings1.png" alt="Flower" className="wings_left" />                      
                                <img src="images/flower1_wings2.png" alt="Flower" className="wings_right" />             
                            </div>         
                        </div>

                        <div className="col-12 col-md-6 col-sm-12 col-xl-7 We_hrns_usp">
                            <ul>
                                <li>
                                    <div className="We_hrns_usp_icon"><img src="images/harness_icon1.png" alt="Icon" /></div>
                                    <h4>Comprehensive Medical Benefits</h4>
                                </li>
                                <li>
                                    <div className="We_hrns_usp_icon"><img src="images/harness_icon2.png" alt="Icon" /></div>
                                    <h4>Performance and Review Bonuses</h4>
                                </li>
                                <li>
                                    <div className="We_hrns_usp_icon"><img src="images/harness_icon3.png" alt="Icon" /></div>
                                    <h4>Access to Prestigious Co-Working Spaces, <br /> Daily Meals, and Additional Perks</h4>
                                </li>
                                <li>
                                    <div className="We_hrns_usp_icon"><img src="images/harness_icon4.png" alt="Icon" /></div>
                                    <h4>Gym Membership</h4>
                                </li>
                                <li>
                                    <div className="We_hrns_usp_icon"><img src="images/harness_icon5.png" alt="Icon" /></div>
                                    <h4>Onboarding and Continuous Support Throughout the Engagement</h4>
                                </li>
                                <li>
                                    <div className="We_hrns_usp_icon"><img src="images/harness_icon6.png" alt="Icon" /></div>
                                    <h4>Training and Development Programs for Upskilling</h4>
                                </li>
                                <li>
                                    <div className="We_hrns_usp_icon"><img src="images/harness_icon7.png" alt="Icon" /></div>
                                    <h4>Opportunities for Working Abroad in the ICT Industry</h4>
                                </li>
                            </ul>
                            <div className="cmn_btn_grp"><a href="apply-as-talent.html" className="cmn_btn_fill">Apply For Jobs</a></div>
                        </div>
                    </div>
                </div>
            </section>                

            <section className="full_width talent_sec fix_padding border_top">
                <div className="container">
                    <div className="talent_sec_top">
                        <div className="tlnt_sec_top_left text_controller">
                            <h2>Unleash the Power of <span> SDG's </span> IT Talent Network</h2>  
                        </div>

                        <div className="tlnt_sec_top_right">
                            <p>Discover 50,000+ Pre-Vetted Talents for Your Next Project</p>                
                            <p>Hire a Single Developer or Build a Team with Ease</p>
                        </div>
                    </div>

                    <div className="talent_sec_bottom">
                        <div id="verticalTab">
                            <ul className="resp-tabs-list">
                                <li>Web Development</li>
                                <li>UX/UI</li>
                                <li>Mobile App</li>
                                <li>CMS</li>
                            </ul>

                            <div className="resp-tabs-container">
                                <div>
                                    <div className="home_talent_tab">
                                        <ul>
                                            <li><a href="/"><img src="images/wd_javascript.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/wd_nodejs.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/wd_angular.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/wd_laravel.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/wd_codeigniter.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/wd_net.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/wd_java.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/wd_plsql.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/wd_aspnet.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/wd_c++.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/wd_chash.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/wd_linux.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/wd_python.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/wd_expressjs.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/wd_oracle.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/wd_vuejs.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/wd_transactsql.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/wd_wpf.png" alt="Icon" /></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <div className="home_talent_tab">
                                        <ul>
                                            <li><a href="/"><img src="images/photoshop.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/adobe_XD.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/figma.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/marvel.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/premiere_pro.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/sketch.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/axure.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/craft.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/framer_x.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/original_studio.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/luchidchart.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/balsamic.png" alt="Icon" /></a></li>
                                        </ul>
                                    </div>  
                                </div>

                                <div>
                                    <div className="home_talent_tab">
                                        <ul>                            
                                            <li><a href="/"><img src="images/react_js.png" alt="icon" /></a></li>
                                            <li><a href="/"><img src="images/Swift.png" alt="icon" /></a></li>
                                            <li><a href="/"><img src="images/flutter.png" alt="icon" /></a></li>
                                            <li><a href="/"><img src="images/kotlin.png" alt="icon" /></a></li>
                                            <li><a href="/"><img src="images/lonic.png" alt="icon" /></a></li>
                                            <li><a href="/"><img src="images/xamarin.png" alt="icon" /></a></li>
                                            <li><a href="/"><img src="images/objective_c.png" alt="icon" /></a></li>
                                            <li><a href="/"><img src="images/action_script.png" alt="icon" /></a></li>
                                            <li><a href="/"><img src="images/dart.png" alt="icon" /></a></li>
                                            <li><a href="/"><img src="images/android_app.png" alt="icon" /></a></li>
                                            <li><a href="/"><img src="images/ios_app.png" alt="icon" /></a></li>
                                            <li><a href="/"><img src="images/windows.png" alt="icon" /></a></li>                    
                                        </ul>
                                    </div>    
                                </div>

                                <div>
                                    <div className="home_talent_tab">
                                        <ul>                            
                                            <li><a href="/"><img src="images/wordpress.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/shopify.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/magento.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/drupal.png" alt="Icon" /></a></li>
                                            <li><a href="/"><img src="images/sitecore.png" alt="Icon" /></a></li>
                                        </ul>
                                    </div>
                                </div>        
                            </div>
                        </div>
                    </div> 
                </div> 
            </section>    

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