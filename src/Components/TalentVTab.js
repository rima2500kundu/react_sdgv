import React from 'react'

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import Accordion from 'react-bootstrap/Accordion';

function TalentVTab() {
    const tabsData = [
        {
            id: 0,
            eventKey: "first",
            tabName: "Web Development", 
            webdevImg: [
                {src: "images/wd_javascript.png", alt: "wd_javascript"},
                {src: "images/wd_nodejs.png", alt: "wd_nodejs"},
                {src: "images/wd_angular.png", alt: "wd_angular"},
                {src: "images/wd_laravel.png", alt: "wd_laravel"},
                {src: "images/wd_codeigniter.png", alt: "wd_codeigniter"},
                {src: "images/wd_net.png", alt: "wd_net"},
                {src: "images/wd_java.png", alt: "wd_java"},
                {src: "images/wd_plsql.png", alt: "wd_plsql"},
                {src: "images/wd_aspnet.png", alt: "wd_aspnet"},
                {src: "images/wd_c++.png", alt: "wd_c++"},
                {src: "images/wd_chash.png", alt: "wd_chash"},
                {src: "images/wd_linux.png", alt: "wd_linux"},
                {src: "images/wd_python.png", alt: "wd_python"},
                {src: "images/wd_expressjs.png", alt: "wd_expressjs"},
                {src: "images/wd_oracle.png", alt: "wd_oracle"},
                {src: "images/wd_vuejs.png", alt: "wd_vuejs"},
                {src: "images/wd_transactsql.png", alt: "wd_transactsql"},
                {src: "images/wd_wpf.png", alt: "wd_wpf"},
            ]
        },
        {
            id: 1,
            eventKey: "second",
            tabName: "UX/UI",
            webdevImg: [
                {src: "images/photoshop.png", alt: "photoshop"},
                {src: "images/adobe_XD.png", alt: "adobe_XD"},
                {src: "images/figma.png", alt: "figma"},
                {src: "images/marvel.png", alt: "marvel"},
                {src: "images/premiere_pro.png", alt: "premiere_pro"},
                {src: "images/sketch.png", alt: "sketch"},
                {src: "images/axure.png", alt: "axure"},
                {src: "images/craft.png", alt: "craft"},
                {src: "images/framer_x.png", alt: "framer_x"},
                {src: "images/original_studio.png", alt: "original_studio"},
                {src: "images/luchidchart.png", alt: "luchidchart"},
                {src: "images/balsamic.png", alt: "balsamic"},
            ]
        },
        {
            id: 2,
            eventKey: "third",
            tabName: "Mobile App",
            webdevImg: [
                {src: "images/react_js.png", alt: "react_js"},
                {src: "images/Swift.png", alt: "Swift"},
                {src: "images/flutter.png", alt: "flutter"},
                {src: "images/kotlin.png", alt: "kotlin"},
                {src: "images/lonic.png", alt: "lonic"},
                {src: "images/xamarin.png", alt: "xamarin"},
                {src: "images/objective_c.png", alt: "objective_c"},
                {src: "images/action_script.png", alt: "action_script"},
                {src: "images/dart.png", alt: "dart"},
                {src: "images/android_app.png", alt: "android_app"},
                {src: "images/ios_app.png", alt: "ios_app"},
                {src: "images/windows.png", alt: "windows"},
            ]
        },
        {
            id: 3,
            eventKey: "forth",
            tabName: "CMS",
            webdevImg: [
                {src: "images/wordpress.png", alt: "wordpress"},
                {src: "images/shopify.png", alt: "shopify"},
                {src: "images/magento.png", alt: "magento"},
                {src: "images/drupal.png", alt: "drupal"},
                {src: "images/sitecore.png", alt: "sitecore"},
            ]
        },
      ];

    return (
        <>
            <section className="full_width talent_sec fix_padding border_top">
                <div className="container">
                    <div className="talent_sec_top mb-5">
                        <div className="tlnt_sec_top_left text_controller">
                            <h2>Unleash the Power of <span>SDG's</span> IT Talent Network</h2>  
                        </div>

                        <div className="tlnt_sec_top_right">
                            <p>Discover 50,000+ Pre-Vetted Talents for Your Next Project</p>                
                            <p>Hire a Single Developer or Build a Team with Ease</p>
                        </div>
                    </div>

                    <div className='d-none d-lg-block'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey={tabsData[0].eventKey}>
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            {tabsData.map((tab,i)=>{
                                                return(
                                                    <Nav.Link className='desk_tb_title' eventKey={tab.eventKey} key={i}>{tab.tabName}</Nav.Link> 
                                                );
                                            })}
                                        </Nav.Item>
                                    </Nav>
                                </Col>

                                <Col sm={9}>
                                    <Tab.Content className='desk_tb_content'>
                                        {tabsData.map((tab,i)=>{
                                            return(
                                                <Tab.Pane eventKey={tab.eventKey} key={i}>
                                                    <ul>
                                                        {tab.webdevImg.map((tab,i) => <li key={i}><a href='/'><img src={tab.src} alt={tab.alt} /></a></li>)}
                                                    </ul>
                                                </Tab.Pane>
                                            );
                                        })}
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>

                    <div className='d-lg-none v_accordion'>
                        <Accordion defaultActiveKey={tabsData[0].eventKey}>
                            {tabsData.map((tab,i)=>{
                                return(
                                    <Accordion.Item eventKey={tab.eventKey} key={i}>
                                        <Accordion.Header>{tab.tabName}</Accordion.Header> 
                                        <Accordion.Body className='desk_tb_content'>
                                            <ul>
                                                {tab.webdevImg.map((tab,i) => <li key={i}><a href='/'><img src={tab.src} alt={tab.alt} /></a></li>)}
                                            </ul>
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

export default TalentVTab;