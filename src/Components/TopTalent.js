import React from 'react'
const data = [
    {imgSrc: "images/tm_hrng_icon1.png", imgAlt: "icon",mainHeading: "Identify your Skill Requirements", content: "We set up a call to understand the specific skills you are looking for in a tech talent."},
    {imgSrc: "images/tm_hrng_icon2.png", imgAlt: "icon",mainHeading: "Pre-Vetted Talent Pool", content: "Our advanced algorithm and HR experts source the best candidates. You have access to a display of pre-vetted candidates on your dashboard."},
    {imgSrc: "images/tm_hrng_icon3.png", imgAlt: "icon",mainHeading: "Schedule Interviews", content: "Once you select your preferred candidates, our dedicated Account Manager sets up interviews with them."},
    {imgSrc: "images/tm_hrng_icon4.png", imgAlt: "icon",mainHeading: "Risk-Free Trial Period", content: "Start your project with confidence with our two-week risk-free trial period."},
]


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
                        {data.map((el,i)=> <li key={i}>
                            <div className="Team_hire_bt_icon"><img src={el.imgSrc} alt={el.imgAlt} /></div> 
                            <h2>{el.mainHeading}</h2>
                            <p>{el.content}</p>        
                            <div className="Team_hire_bt_number">{i+1}</div>
                        </li>)}
                    </ul>

                    <div className="cmn_btn_grp cmn_btn_grp_center"><a href="hire-development-team.html" className="cmn_btn_fill">Hire a Team</a></div>
                </div>
            </div>
        </section>
    </>
  )
}

export default TopTalent;