import React from "react";
import TrustedSlider from "../Components/TrustedSlider";
import UspContent from "../Components/UspContent";
import WhySdg from "../Components/WhySdg";
import Potential from "../Components/Potential";
import TalentVTab from "../Components/TalentVTab";
import TalentParameter from "../Components/TalentParameter";
import PrideHire from "../Components/PrideHire";
import TopTalent from "../Components/TopTalent";
import SkillTab from "../Components/SkillTab";
import Homepgbrk from "../Components/Homepgbrk";
import HomeBanner from "../Components/HomeBanner";
import { Helmet } from "react-helmet";

function Home(){
    return(
        <>
        
            <Helmet>
    <title>Hire Pre-Vetted Remote Individuals or Build a Team | Sourcedesk</title>
    <meta name="description" content="Hire pre-vetted remote professionals or build your dream team effortlessly with Sourcedesk. Streamlined hiring, top 10% talent, and cutting-edge AI await." />
    <meta name="title" content="Hire Pre-Vetted Remote Individuals or Build a Team | Sourcedesk" />
    {/* <!-- Canonical & hrefLang --> */}
    <link rel="canonical" href="https://www.sourcedesk.io/" />
    <link rel="alternate" hrefLang="x-default" href="https://www.sourcedesk.io/" />
    <link rel="alternate" hrefLang="en-US" href="https://www.sourcedesk.io/" />

    {/* <!-- Twitter Card meta tags --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@sourcedeskgl" />
    <meta name="twitter:title" content="Hire Pre-Vetted Remote Individuals or Build a Team | Sourcedesk" />
    <meta name="twitter:description" content="Hire pre-vetted remote professionals or build your dream team effortlessly with Sourcedesk. Streamlined hiring, top 10% talent, and cutting-edge AI await." />
    <meta name="twitter:image" content="https://www.sourcedesk.io/public/images/Twitter-1200x600.jpg" />
    {/* <!-- Facebook Open Graph tags --> */}
    <meta property="og:url" content="https://www.sourcedesk.io/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Hire Pre-Vetted Remote Individuals or Build a Team | Sourcedesk" />
    <meta property="og:description" content="Hire pre-vetted remote professionals or build your dream team effortlessly with Sourcedesk. Streamlined hiring, top 10% talent, and cutting-edge AI await." />
    <meta property="og:image" content="https://www.sourcedesk.io/public/images/Fcebook-2400x1260.jpg" />
    {/* <!-- Additional Open Graph tags for better customization --> */}
    <meta property="og:image:width" content="2400" />
    <meta property="og:image:height" content="1260" />
    <meta property="og:image:alt" content="SourceDesk Global" />
    <meta property="og:locale" content="en_US" />
    {/* Organization Schema */}
    <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Sourcedesk",
            "logo": "https://www.sourcedesk.io/public/images/logo.png",
            "url": "https://www.sourcedesk.io/",
            "description": "AI-Powered Hiring Platform",
            "sameAs": [
              "https://www.linkedin.com/company/sourcedesk",
              "https://twitter.com/sourcedesk"
            ]
          }
        `}</script>
        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://www.sourcedesk.io/#breadcrumb",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.sourcedesk.io/"
              }
            ]
          }
        `}</script>
        {/* LocalBusiness Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "branchOf": {
              "@type": "Organization",
              "name": "SourceDesk"
            },
            "name": "SourceDesk",
            "address": [
              {
                "@type": "PostalAddress",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "postalCode": "M9C 5K6",
                "streetAddress": "5399 Eglinton Ave. West Suite 212",
                "addressCountry": "Canada"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Kolkata",
                "postalCode": "700091",
                "streetAddress": "Shaila Tower, EP-204, Salt Lake, Sector-V",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "New York",
                "postalCode": "10006",
                "streetAddress": "One Liberty Plaza, 165 Broadway, Suite 2301",
                "addressCountry": "USA"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Medellín",
                "addressRegion": "Antioquia",
                "addressCountry": "CO",
                "streetAddress": "Cra. 42 #3 Sur 81 Torre 1 Piso 15, El Poblado"
              }
            ],
            "telephone": "1-888-445-3334",
            "url": "https://www.sourcedesk.io/",
            "openingHours": "N/A"
            }
            `}</script>
    </Helmet>
            <HomeBanner />

            <TrustedSlider defaultTitle="Trusted By" />

            <UspContent />

            <WhySdg />

            <Potential />

            <TalentVTab />

            <SkillTab />

            <TalentParameter />

            <PrideHire />

            <TopTalent />

            <Homepgbrk />
        </>
    )  

}

export default Home;