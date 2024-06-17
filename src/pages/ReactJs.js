import { Helmet } from "react-helmet";
import AccordionComp from "../Components/AccordionComp";
import DevProfiles from "../Components/DevProfiles";
import InnerBanner from "../Components/InnerBanner";
import Platforms from "../Components/Platforms";
import Process from "../Components/Process";
import TrustedSlider from "../Components/TrustedSlider";

export default function ReactJs() {
  return (
    <>
    <Helmet>
    <title>Hire Deeply-Vetted Remote React JS Developers Now from Sourcedesk</title>
    <meta name="title" content="Hire Deeply-Vetted Remote React JS Developers Now from Sourcedesk" />
    <meta name="description" content="Sourcedesk offers highly-vetted React JS developers for remote hire. Elevate your projects with skilled professionals. Hire now for optimal development success." />
    </Helmet>
      <InnerBanner
        InnBanner="url(images/react_banner_img2.png)"
        bgColor="#fafbfd"
        bgRepeat="no-repeat"
        BnrRightImg="images/react_banner_img.png"
        TitleInn={[
          <span>Hire Exceptional ReactJS Developers Fast – </span>,
          "Elevate Your Business with Premier Remote Talent in 3-5 Days",
        ]}
        ParaInn="SDG streamlines remote ReactJS developer onboarding, utilizing Sourcedesk Global's advanced talent pool. Employ AI and HI for seamless sourcing, assessment, matching, and efficient management of over 50k developers for your innovative engineering team."
        priCTALink={"/"}
        priCTATitle={"Hire Top-Tier ReactJS Developers"}
        secCTALink={""}
        secCTATitle={""}
      />
      <TrustedSlider defaultTitle={"Trusted By"} />
      <DevProfiles />
      <AccordionComp />
      <Platforms />
      <section class="full_width react_classif fix_padding">
        <div class="container">
          <div class="text_controller text_controller_center">
            <h2>
              Unlock <span> Sourcedesk Global’s </span> Unique Differentiators
            </h2>
            <hr />
            <p>Discover What Is Unique About Sourcedesk Global</p>
          </div>

          <div class="row">
            <div class="col-12  col-md-6 col-xl-3 react_left_cnt">
              <ul>
                <li>
                  <strong>
                    Advanced AI-Powered Application Tracking System
                  </strong>
                  <p>
                    Unmatched screening process with AI and human intelligence
                  </p>
                </li>

                <li>
                  <strong>Cutting-Edge AI-Powered Vetting Process</strong>
                  <p>
                    Chatbot interviews, gaming assessments, video interviews,
                    and predictive analytics
                  </p>
                </li>

                <li>
                  <strong>Global Availability</strong>
                  <p>Resources available for any time zone</p>
                </li>

                <li>
                  <strong>Competitive Rates</strong>
                  <p>Up to 60% cost savings compared to leading competitors</p>
                </li>
              </ul>
            </div>

            <div class="col-12 col-md-6   col-xl-6 react_mid_cnt">
              <img
                src="images/react_classif_img.png"
                alt="Filter"
              />
            </div>

            <div class="col-12 col-md-6  col-xl-3 react_right_cnt">
              <ul>
                <li>
                  <strong>Enhanced Job Benefits &amp; Perks</strong>
                  <p>
                    Comprehensive incentives for maximum job satisfaction and
                    retention
                  </p>
                </li>

                <li>
                  <strong>Extensive Infrastructure Support</strong>
                  <p>
                    Full IT support and access to prestigious co-working spaces
                  </p>
                </li>

                <li>
                  <strong>Flexible Engagement Options</strong>
                  <p>Customizable notice and contract periods</p>
                </li>

                <li>
                  <strong>Personalized Account Management</strong>
                  <p>
                    Dedicated account managers, ensuring productivity and
                    performance
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Process />
    </>
  );
}
