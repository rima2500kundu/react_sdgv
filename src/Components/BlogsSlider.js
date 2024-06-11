import Slider from "react-slick"; import "slick-carousel/slick/slick.css"; import "slick-carousel/slick/slick-theme.css"; export default function BlogsSlider() { const settings = { dots: true, infinite: false, speed: 500, slidesToShow: 3, slidesToScroll: 1, arrows: true, }; return ( <section className="full_width leadership_thaught blog_popular fix_padding">
  <div className="container blog_popular" id="cmn_slider_btn">
      <div className="text_controller text_controller_center">
          <h2> Most <span>Popular</span> </h2>
          <hr />
      </div>
      {/* <div className="slider-container thoughts" id="cmn_slider_btn"> */}
          <Slider {...settings}>
              <div>
                  <div className="ldrshp_thght_items"> <img src="images/Embracing-the-power-of-dedicated-full-stack-JavaScript-developers.jpg" alt="full-stack JavaScript teams" />
                      <h4>May 28, 2024</h4>
                      <h2> Unlock Efficiency: Benefits of Dedicated Full-Stack Developers for Your JavaScript Venture </h2>
                      <p> Businesses should have a robust online presence to thrive in the evolving digital landscape... </p> <a href="{{url('blog-details/unlock-efficiency-with-dedicated-full-stack-javascript-developers')}}" className="cmn_btn_stroke"> Read More </a>
                  </div>
              </div>
              <div>
                  <div className="ldrshp_thght_items"> <img src="images/Tactics-for-Recruiting-and-Hiring-Salesforce-Developers.jpg" alt="Hire Salesforce developers" />
                      <h4>May 28, 2024</h4>
                      <h2> Salesforce Developers: Proven Tactics for Recruiting and Hiring Exceptional Candidates </h2>
                      <p> Customer relationship management (CRM) is integral to an organization’s ability to thrive and stay ahead of its competitors... </p> <a href="{{url('blog-details/salesforce-developers-proven-tactics-for-recruiting-and-hiring-exceptional-candidates')}}" className="cmn_btn_stroke"> Read More </a>
                  </div>
              </div>
              <div>
                  <div className="ldrshp_thght_items"> <img src="images/Top-Hiring-Platform-for-Salesforce-Developers.jpg" alt="Salesforce Developers" />
                      <h4>April 13, 2024</h4>
                      <h2> Benefits of Being a Salesforce Developer with Sourcedesk Global </h2>
                      <p> Are you a Salesforce developer searching for new challenges and opportunities?... </p> <a href="{{url('blog-details/benefits-of-being-a-salesforce-developer-with-sourcedesk-global')}}" className="cmn_btn_stroke"> Read More </a>
                  </div>
              </div>
              <div>
                  <div className="ldrshp_thght_items"> <img src="images/How-Dedicated-Shopify-Developers-Can-Transform-Your-Online-Store.jpg" alt="Shopify developers" />
                      <h4>March 9, 2024</h4>
                      <h2> How Dedicated Shopify Developers Enhance Your E-Commerce Presence </h2>
                      <p> Have you ever wondered why some e-commerce businesses excel while others struggle to keep up in today's digital age?... </p> <a href="{{url('blog-details/how-dedicated-shopify-developers-enhance-your-e-commerce-presence')}}" className="cmn_btn_stroke"> Read More </a>
                  </div>
              </div>
          </Slider>
      {/* </div> */}
  </div> {/*<div className="cmn_btn_grp cmn_btn_grp_center"><a href="" className="cmn_btn_fill">View All</a></div>*/}
</section> ); }