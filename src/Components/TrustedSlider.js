// import React, { useState } from 'react';
// import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

function TrustedSlider({ defaultTitle, ctaLink, ctaTitle }) {
  // props
  // const [title] = useState(defaultTitle); // use the props value into state
  // simple props
  // function TrustedSlider(props) {
  //   const {title} = props;

  var settings = {
    dots: true,
    nav: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,

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
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <section className="full_width trusted_by hme_trst_slider">
        <div className="container">
          <div className="text_controller text_controller_center">
            <h2>{defaultTitle}</h2>
            <hr />
          </div>

          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <div className="trstd_sldr_row">
                  <img src="images/Alimentation_Couche-Tard.png" alt="logo" />
                </div>
              </div>
              <div>
                <div className="trstd_sldr_row">
                  <img src="images/Amazon_logo.png" alt="logo" />
                </div>
              </div>
              <div>
                <div className="trstd_sldr_row">
                  <img src="images/apple_client.png" alt="logo" />
                </div>
              </div>
              <div>
                <div className="trstd_sldr_row">
                  <img src="images/AT-T.png" alt="logo" />
                </div>
              </div>
              <div>
                <div className="trstd_sldr_row">
                  <img src="images/Chevron_Corporation.png" alt="logo" />
                </div>
              </div>
              <div>
                <div className="trstd_sldr_row">
                  <img src="images/Cisco_Systems.png" alt="logo" />
                </div>
              </div>
              <div>
                <div className="trstd_sldr_row">
                  <img src="images/Enbridge.png" alt="logo" />
                </div>
              </div>
              <div>
                <div className="trstd_sldr_row">
                  <img src="images/Exxon_Mobil.png" alt="logo" />
                </div>
              </div>
              <div>
                <div className="trstd_sldr_row">
                  <img src="images/ford.png" alt="logo" />
                </div>
              </div>
              <div>
                <div className="trstd_sldr_row">
                  <img src="images/General_Electric.png" alt="logo" />
                </div>
              </div>
              <div>
                <div className="trstd_sldr_row">
                  <img src="images/Home_Depot.png" alt="logo" />
                </div>
              </div>
              <div>
                <div className="trstd_sldr_row">
                  <img src="images/IBM_logo.png" alt="logo" />
                </div>
              </div>
              <div>
                <div className="trstd_sldr_row">
                  <img src="images/Manulife__Financial.png" alt="logo" />
                </div>
              </div>
              <div>
                <div className="trstd_sldr_row">
                  <img
                    src="images/reference_johnson-johnson_logo.png"
                    alt="logo"
                  />
                </div>
              </div>
              <div>
                <div className="trstd_sldr_row">
                  <img src="images/toyota.png" alt="logo" />
                </div>
              </div>
              <div>
                <div className="trstd_sldr_row">
                  <img src="images/Walgreens_ Boots_ Alliance.png" alt="logo" />
                </div>
              </div>
              <div>
                <div className="trstd_sldr_row">
                  <img src="images/Walmart-Logo_client.png" alt="logo" />
                </div>
              </div>
            </Slider>
          </div>

          {ctaLink === "" || ctaTitle === "" ? (
            false
          ) : (
            <div class="cmn_btn_grp">
              <NavLink href={ctaLink} className="cmn_btn_fill">
                {ctaTitle}
              </NavLink>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default TrustedSlider;
