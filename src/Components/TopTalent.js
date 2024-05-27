import React from 'react'

function TopTalent() {
  return (
    <>
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
    </>
  )
}

export default TopTalent;