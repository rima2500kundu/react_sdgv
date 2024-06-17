import InnerBanner from "../Components/InnerBanner";
import TrustedSlider from "../Components/TrustedSlider";
// import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
function CustomerReviewSlider() {
  const settings = {
    dots: true,
    variableWidth:false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#c2c2c2",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        }
      }
    ]
  };
  return (

    <div className="slider-container customer-review-slider cus_rev_testi" id="cmn_slider_btn">
      <Slider {...settings} className="">
          <div>
            <div className="testimony_main">
              <div className="testimony_client">
                <img
                  src="images/customer_review_avatar.png"
                  alt="Img"
                />
              </div>

              <div className="testimony_sub">
                <img
                  src="images/customer_review_rating.png"
                  alt="Img"
                />

                <p>
                  "Sourcedesk Global's resource hiring service has been a
                  game-changer for our organization. Their comprehensive
                  approach to understanding our business needs and culture
                  ensured that the resources they provided were not just skilled
                  but also aligned with our values. The entire process was
                  smooth and efficient, saving us countless hours that we would
                  have otherwise spent on sourcing, screening, and onboarding
                  candidates. With their support, we were able to rapidly scale
                  our team without compromising on quality."
                </p>
                <h3>Samantha Lee</h3>
                <h4>Chief People Officer</h4>
              </div>
            </div>
          </div>
          <div>
            <div className="testimony_main">
              <div className="testimony_client">
                <img
                  src="images/customer_review_avatar.png"
                  alt="Img"
                />
              </div>

              <div className="testimony_sub">
                <img
                  src="images/customer_review_rating.png"
                  alt="Img"
                />

                <p>
                  "Sourcedesk Global's resource hiring service has been a
                  game-changer for our organization. Their comprehensive
                  approach to understanding our business needs and culture
                  ensured that the resources they provided were not just skilled
                  but also aligned with our values. The entire process was
                  smooth and efficient, saving us countless hours that we would
                  have otherwise spent on sourcing, screening, and onboarding
                  candidates. With their support, we were able to rapidly scale
                  our team without compromising on quality."
                </p>
                <h3>Samantha Lee</h3>
                <h4>Chief People Officer</h4>
              </div>
            </div>
          </div>
          <div>
            <div className="testimony_main">
              <div className="testimony_client">
                <img
                  src="images/customer_review_avatar.png"
                  alt="Img"
                />
              </div>

              <div className="testimony_sub">
                <img
                  src="images/customer_review_rating.png"
                  alt="Img"
                />

                <p>
                  "Sourcedesk Global's resource hiring service has been a
                  game-changer for our organization. Their comprehensive
                  approach to understanding our business needs and culture
                  ensured that the resources they provided were not just skilled
                  but also aligned with our values. The entire process was
                  smooth and efficient, saving us countless hours that we would
                  have otherwise spent on sourcing, screening, and onboarding
                  candidates. With their support, we were able to rapidly scale
                  our team without compromising on quality."
                </p>
                <h3>Samantha Lee</h3>
                <h4>Chief People Officer</h4>
              </div>
            </div>
          </div>
      </Slider>
    </div>

  );
}
export default function CustomerReview() {
  return (
    <>
    <Helmet>
    <title>Hear from Our Clients: Sourcedesk Customer Reviews and Testimonials</title>
    <meta name="description" content="Sourcedesk's strength unfolds in client reviews. Explore testimonials revealing satisfaction and success. Elevate your confidence in our exceptional services." />
    </Helmet>
      <InnerBanner
        bgRepeat="no-repeat"
        bgColor="#fafbfd"
        BnrRightImg="images/customer_review_right.png"
        InnBanner="url(images/customer_review_banner.png)"
        TitleInn="Insights from Our Loyal Client Base"
        ParaInn="Review the structured evaluations and appreciative comments from those who have utilized our specialized services."
        priCTALink="/"
        priCTATitle="Connect with Our Expert Professionals Now"
        secCTALink=""
        secCTATitle=""
        BnrLeftImg=""
        BnrLeftImgAlt=""
      />
      <section className="full_width leadership_thaught cus_rev_slider fix_padding">
        <div className="container">
          <div className="text_controller text_controller_center">
            <h2>
              Genuine User Testimonials <span>|</span> Evaluating Engagement and
              Satisfaction
            </h2>
            <hr />
          </div>
          <div className="devloper_slider slider" id="cmn_slider_btn">
            <div>
              <div
                className="vettng_video"
                style={{
                  background:
                    "url(images/vttng_prcs_bg.png)",
                  backgroundPosition: "50% 50%; background-size: cover",
                }}
              >
                <a href="/">
                  <div className="vdo_btn">
                    <img
                      src="images/vdo_triangle.png"
                      alt="Icon"
                    />
                  </div>
                </a>
                <h2>Video Title Here</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="full_width vettng_video_black pricing_pgbk customer_review_pgbk">
        <div className="container">
          <h2>
            Ready to Build a High-Caliber Tech Team? <br /> Start Now
          </h2>
          <div className="cmn_btn_grp cmn_btn_grp_center">
            <a
              href="https://www.sourcedesk.io/how-it-works"
              className="cmn_btn_stroke"
            >
              Initial Overview: How It Functions{" "}
            </a>
            <a
              href="https://www.sourcedesk.io/schedule-a-call"
              className="cmn_btn_fill"
            >
              {" "}
              Begin Now{" "}
            </a>
          </div>
        </div>
      </section>

      <section className="full_width fix_padding" style={{background: "#f9fcfc", overflowX: "hidden"}}>
        <div className="container">
          <div className="text_controller">
            <h2>Customer Feedback and Reviews</h2>
            <hr />
          </div>
        </div>
        <CustomerReviewSlider />
      </section>
      
      <div className="full_width trusted_by cr_slider fix_padding">
        <TrustedSlider
          defaultTitle="Discover Clients Who Trust Our Services"
          ctaLink="/"
          ctaTitle="Start Working with Us"
        />
      </div>

      <section className="full_width vettng_video_black foot_gap sdg_advntg_video_black  ">
        <div className="container text_controller text_controller_center">
          <h2>Explore Exceptional Talent</h2>
          <div className="cmn_btn_grp ">
            <NavLink href="/pricing" className="cmn_btn_fill">
              View Our Pricing Rate Card
            </NavLink>
            <NavLink
              href="/schedule-a-call"
              className="cmn_btn_stroke"
            >
              {" "}
              Connect with Leading Industry Experts{" "}
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
