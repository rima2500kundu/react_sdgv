import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// https://mui.com/material-ui/react-tabs/
// https://www.youtube.com/watch?v=ZLIK7VEe1Hg&ab_channel=CodingMSTR

function TalentVTab() {
    const tabsData = [
        {
            id: 0,
            tabName: "Web Development", 
            webdevImg: [
                <li><a href="/"><img src="images/wd_javascript.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/wd_nodejs.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/wd_angular.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/wd_laravel.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/wd_codeigniter.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/wd_net.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/wd_java.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/wd_plsql.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/wd_aspnet.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/wd_c++.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/wd_chash.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/wd_linux.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/wd_python.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/wd_expressjs.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/wd_oracle.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/wd_vuejs.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/wd_transactsql.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/wd_wpf.png" alt="images" /></a></li>,
            ]
        },
        {
            id: 1,
            tabName: "UX/UI",
            webdevImg: [
                <li><a href="/"><img src="images/photoshop.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/adobe_XD.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/figma.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/marvel.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/premiere_pro.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/sketch.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/axure.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/craft.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/framer_x.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/original_studio.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/luchidchart.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/balsamic.png" alt="images" /></a></li>,
            ]
        },
        {
            id: 2,
            tabName: "Mobile App",
            webdevImg: [
                <li><a href="/"><img src="images/react_js.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/Swift.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/flutter.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/kotlin.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/lonic.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/xamarin.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/objective_c.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/action_script.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/dart.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/android_app.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/ios_app.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/windows.png" alt="images" /></a></li>,
            ]
        },
        {
            id: 3,
            tabName: "CMS",
            webdevImg: [
                <li><a href="/"><img src="images/wordpress.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/shopify.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/magento.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/drupal.png" alt="images" /></a></li>,
                <li><a href="/"><img src="images/sitecore.png" alt="images" /></a></li>,
            ]
        },
      ];

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <>
            <section className="full_width talent_sec fix_padding border_top">
                <div className="container">
                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList className="vtab_tabs">
                            {tabsData.map((tab, i) => {
                                return (
                                    <Tab key={i}>{tab.tabName}</Tab>
                                );
                            })}
                        </TabList>

                        <div className='vtab_tab_item'>
                            {tabsData.map((tab,i) => {
                                return (
                                    <TabPanel key={i}>
                                        <ul>{tab.webdevImg}</ul>
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

export default TalentVTab;