import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function SkillTab() {
    const skillData = [
        {
            id: 0,
            skilltabName: "Digital Marketing",
            skilltabData: [
                {skillTitle: "SEM &amp; PPC Expert"},
                {skillTitle: "SEO Expert"},
                {skillTitle: "Programmatic Ad Manager"},
                {skillTitle: "Content Writer"},
                {skillTitle: "Social Media Manager"},
                {skillTitle: "Email Marketing Expert"},
                {skillTitle: "Video Marketing Expert"},
                {skillTitle: "ASO Expert"},
            ],
            skilltabImg: "images/threeTabimg1.png",
        },
        {
            id: 1,
            skilltabName: "Accounting & Finance",
            skilltabData: [
                {skillTitle: "Accountants"},
                {skillTitle: "Bookkeepers"},
                {skillTitle: "Payroll Experts"},
                {skillTitle: "Financial Analysts"},
                {skillTitle: "QuickBooks"},
                {skillTitle: "Tax Consultants"},
                {skillTitle: "Payroll Experts"},
                {skillTitle: "Financial Analysts"},
                {skillTitle: "Tax Preparation Experts"},
            ],
            skilltabImg: "images/threeTabimg2.png",
        },
        {
            id: 2,
            skilltabName: "Virtual Assistant",
            skilltabData: [
                {skillTitle: "Personal VA"},
                {skillTitle: "Real Estate VA"},
                {skillTitle: "Data Entry Experts"},
                {skillTitle: "Ecommerce VA"},
            ],
            skilltabImg: "images/threeTabimg3.png",
        },
    ];

  return (
    <>
        <section className="full_width three_tab fix_padding border_top">
            <div className="container">
                <div className="three_tab_top text_controller">
                    <h2>Discover Additional Technical Skills of <span> Sourcedesk Global’s</span> IT Talent Network</h2>  
                    <hr />
                </div>

                <Tabs defaultActiveKey={skillData[0].skilltabName} id="fill-tab-example" className="mb-3" fill>
                    {skillData.map((tab, i)=>{
                        return(
                            <Tab eventKey={tab.skilltabName} title={tab.skilltabName} key={i}>
                                <div className='three_tab_bt_top_left'>
                                    <ul>
                                        {tab.skilltabData.map((tab,i) => <li key={i}>{tab.skillTitle}</li>)}
                                    </ul>
                                </div>

                                <div className='three_tab_bt_top_right'>
                                    <img src={tab.skilltabImg} alt="images" />
                                </div>
                            </Tab>
                        );
                    })}
                </Tabs>
            </div>    
        </section>
    </>
  )
}

export default SkillTab;