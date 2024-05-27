import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function SkillTab() {
    const skillData = [
        {
            id: 0,
            skilltabName: "Digital Marketing",
            skilltabData: [
                <li>SEM &amp; PPC Expert</li>,
                <li>SEO Expert</li>,
                <li>Programmatic Ad Manager</li>,
                <li>Content Writer</li>,
                <li>Social Media Manager</li>,
                <li>Email Marketing Expert</li>,
                <li>Video Marketing Expert</li>,
                <li>ASO Expert</li>,
            ],
            skilltabImg: "images/threeTabimg1.png",
        },

        {
            id: 1,
            skilltabName: "Accounting & Finance",
            skilltabData: [
                <li>Accountants</li>,
                <li>Bookkeepers</li>,
                <li>Payroll Experts</li>,
                <li>Financial Analysts</li>,
                <li>QuickBooks</li>,
                <li>Tax Consultants</li>,
                <li>Payroll Experts</li>,
                <li>Financial Analysts</li>,
                <li>Tax Preparation Experts</li>,
            ],
            skilltabImg: "images/threeTabimg2.png",
        },

        {
            id: 1,
            skilltabName: "Virtual Assistant",
            skilltabData: [
                <li>Personal VA</li>,
                <li>Real Estate VA</li>,
                <li>Data Entry Experts</li>,
                <li>Ecommerce VA</li>,
            ],
            skilltabImg: "images/threeTabimg3.png",
        },
    ];

    const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
        <section className="full_width three_tab fix_padding border_top">
            <div className="container">
                <div className="three_tab_top text_controller">
                    <h2>Discover Additional Technical Skills of <span> Sourcedesk Global’s</span> IT Talent Network</h2>  
                    <hr />
                </div>

                <Tabs className='three_tab_bottom' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        {skillData.map((tab, i) => {
                            return (
                                <Tab className='resp-tab-item' key={i}>{tab.skilltabName}</Tab>
                            );
                        })}
                    </TabList>

                    <div className='resp-tabs-container'>
                        {skillData.map((tab,i) => {
                            return (
                                <TabPanel key={i}>
                                    <div className='three_tab_bt_top_left'>
                                        <ul>{tab.skilltabData}</ul>
                                    </div>

                                    <div className='three_tab_bt_top_right'>
                                        <img src={tab.skilltabImg} alt="images" />
                                    </div>
                                </TabPanel>
                            );
                        })}
                    </div>
                </Tabs>
            </div>    
        </section>
    </>
  )
}

export default SkillTab;