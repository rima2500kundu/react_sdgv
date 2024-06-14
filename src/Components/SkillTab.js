// import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Accordion from 'react-bootstrap/Accordion';

function SkillTab() {
    const skillData = [
        {
            id: 0,
            eventKey: "first",
            skilltabName: "Digital Marketing",
            skilltabData: [
                {skillTitle: "SEM & PPC Expert"},
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
            eventKey: "second",
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
            eventKey: "third",
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

                <div className='d-none d-lg-block skilltabSec'>
                    <Tabs defaultActiveKey={skillData[0].skilltabName} id="fill-tab-example" className="mb-5" fill>
                        {skillData.map((tab, i)=>{
                            return(
                                <Tab eventKey={tab.skilltabName} title={tab.skilltabName} key={i}>
                                    <div className='three_tab_bt_top'>
                                        <div className='three_tab_bt_top_left'>
                                            <ul>
                                                {tab.skilltabData.map((tab,i) => <li key={i}>{tab.skillTitle}</li>)}
                                            </ul>
                                        </div>

                                        <div className='three_tab_bt_top_right'>
                                            <img src={tab.skilltabImg} alt="images" />
                                        </div>
                                    </div>

                                    <div className="cmn_btn_grp">
                                        <a href="/" className="cmn_btn_fill">Hire Developers</a>
                                        <a href="/" className="cmn_btn_stroke">Apply For Jobs</a>
                                    </div>
                                </Tab>
                            );
                        })}
                    </Tabs>
                </div>

                <div className='d-lg-none v_accordion'>
                    <Accordion defaultActiveKey={skillData[0].eventKey}>
                        {skillData.map((tab,i)=>{
                            return(
                                <Accordion.Item eventKey={tab.eventKey} key={i}>
                                    <Accordion.Header>{tab.skilltabName}</Accordion.Header> 
                                    <Accordion.Body className=''>
                                        <div className='three_tab_bt_top'>
                                            <div className='three_tab_bt_top_left'>
                                                <ul>
                                                    {tab.skilltabData.map((tab,i) => <li key={i}>{tab.skillTitle}</li>)}
                                                </ul>
                                            </div>

                                            <div className='three_tab_bt_top_right'>
                                                <img src={tab.skilltabImg} alt="images" />
                                            </div>
                                        </div>

                                        <div className="cmn_btn_grp">
                                            <a href="/" className="cmn_btn_fill">Hire Developers</a>
                                            <a href="/" className="cmn_btn_stroke">Apply For Jobs</a>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            );
                        })}
                    </Accordion>
                </div>
            </div>    
        </section>
    </>
  )
}

export default SkillTab;