import InnerBanner from "../Components/InnerBanner";

export default function Events() {
  return <><InnerBanner
  InnBanner="url(images/banner-bg-events.png)"
        bgColor="#fafbfd"
        bgRepeat="no-repeat"
        BnrRightImg="images/dot_dot_circle1.png"
        BnrLeftImg="images/dot_dot_circle1.png"
        TitleInn={[
          <span>Events:</span>,<br />,
          "Join Us for a ",<br />, "Memorable Experience",
        ]}
        ParaInn=""
        priCTALink={""}
        priCTATitle={""}
        secCTALink={""}
        secCTATitle={""} />
        <section class="full_width fix_padding upcoming_events">
    <div class="container">
        <div class="text_controller text_controller_center">
            <h2>Upcoming Events</h2>  
            <hr />          
            <p>Find the latest upcoming events of our company held across the world. We invite you to participate and acquire knowledge about the latest trends within the industry, innovative concepts, and successful business case studies. These events offer valuable insights into a variety of subjects within the rapidly evolving business landscape.</p>     
        </div>
    </div>
</section>
<section class="full_width leadership_thaught past_events fix_padding">
    <div class="container">
        <div class="text_controller text_controller_center">
            <h2>Past Events</h2>  
            <hr />       
            <p>Did you miss one of our events? No need to worry! We've compiled a brief overview of previous occasions for you.</p>        
        </div>
        <div class="row gy-4">
            <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <a href="https://www.sourcedesk.io/event-details/interview-on-vodafone" class="card-anchor">
                    <div class="past_evnts_items">
                        <div class="img-wrapper"><img src="https://www.sourcedesk.io/public/images/intrvONvodaphone.png" alt="Interview on Vodafone" /></div>
                        <h2>Interview on Vodafone</h2>
                        <p>SDG’s Office, Toronto</p>
                        <h4> Aug 27, 2020</h4>
                    </div>
                </a> 
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <a href="https://www.sourcedesk.io/event-details/quickbooks-connect-toronto-2018" class="card-anchor">
                    <div class="past_evnts_items">
                        <div class="img-wrapper"><img src="https://www.sourcedesk.io/public/images/quickbooks.png" alt="Quickbooks Connect Toronto 2018" /></div>
                        <h2>Quickbooks Connect Toronto 2018</h2>
                        <p>Metro Toronto Convention, Toronto, Canada </p>
                        <h4>Dec 3-5, 2018</h4>
                    </div>
                </a>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <a href="https://www.sourcedesk.io/event-details/live-interview-on-cheddar" class="card-anchor">
                    <div class="past_evnts_items">
                        <div class="img-wrapper"><img src="https://www.sourcedesk.io/public/images/live-interview-on-cheddar.jpg" alt="Live interview on Cheddar – by @AT&amp;T" /></div>
                        <h2>Live interview on Cheddar – by @AT&amp;T.</h2>
                        <p>New York, New York</p>
                        <h4>Sep 18-20, 2018</h4>
                    </div>  
                </a> 
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <a href="https://www.sourcedesk.io/event-details/accountex-usa" class="card-anchor">
                    <div class="past_evnts_items">
                        <div class="img-wrapper"><img src="https://www.sourcedesk.io/public/images/accountexUSA.png" alt="Accountex USA" /></div>
                        <h2>Accountex USA</h2>
                        <p>Hynes Convention Center, Boston, USA</p>
                        <h4>Aug 22-23, 2018</h4>
                    </div>
                </a>  
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <a href="https://www.sourcedesk.io/event-details/hours-to-minutes" class="card-anchor">
                    <div class="past_evnts_items">
                        <div class="img-wrapper"><img src="https://www.sourcedesk.io/public/images/hrs-to-mins.jpg" alt="‘Hours to Minutes’ – by Hubdoc, Intuit &amp; Plooto" /></div>
                        <h2>‘Hours to Minutes’ – by Hubdoc, Intuit &amp; Plooto</h2>
                        <p>Aperture Room, Toronto, Canada</p>
                        <h4>Jun 27-27, 2018</h4>
                    </div>
                </a> 
            </div>
        </div>

        {/* <div class="thoughts slider" id="cmn_slider_btn">
            <div>
                <a href="https://www.sourcedesk.io/event-details/interview-on-vodafone">
                    <div class="past_evnts_items">
                        <img src="https://www.sourcedesk.io/public/images/intrvONvodaphone.png" alt="Interview on Vodafone">
                        <h2>Interview on Vodafone</h2>
                        <p>SDG’s Office, Toronto</p>
                        <h4> Aug 27, 2020</h4>
                    </div>
                </a> 
            </div>
            
            <div> 
                <a href="https://www.sourcedesk.io/event-details/quickbooks-connect-toronto-2018">
                    <div class="past_evnts_items">
                        <img src="https://www.sourcedesk.io/public/images/quickbooks.png" alt="Quickbooks Connect Toronto 2018">
                        <h2>Quickbooks Connect Toronto 2018</h2>
                        <p>Metro Toronto Convention, Toronto, Canada </p>
                        <h4>Dec 3-5, 2018</h4>
                    </div>
                </a>
            </div>      
            
            <div> 
                <a href="https://www.sourcedesk.io/event-details/live-interview-on-cheddar">
                    <div class="past_evnts_items">
                        <img src="https://www.sourcedesk.io/public/images/live-interview-on-cheddar.jpg" alt="Live interview on Cheddar – by @AT&T">
                        <h2>Live interview on Cheddar – by @AT&T.</h2>
                        <p>New York, New York</p>
                        <h4>Sep 18-20, 2018</h4>
                    </div>  
                </a> 
            </div>
            
            <div> 
                <a href="https://www.sourcedesk.io/event-details/accountex-usa">
                    <div class="past_evnts_items">
                        <img src="https://www.sourcedesk.io/public/images/accountexUSA.png" alt="Accountex USA">
                        <h2>Accountex USA</h2>
                        <p>Hynes Convention Center, Boston, USA</p>
                        <h4>Aug 22-23, 2018</h4>
                    </div>
                </a>  
            </div>  
            
            <div class=""> 
                <a href="https://www.sourcedesk.io/event-details/hours-to-minutes">
                    <div class="past_evnts_items">
                        <img src="https://www.sourcedesk.io/public/images/hrs-to-mins.jpg" alt="‘Hours to Minutes’ – by Hubdoc, Intuit & Plooto">
                        <h2>‘Hours to Minutes’ – by Hubdoc, Intuit & Plooto</h2>
                        <p>Aperture Room, Toronto, Canada</p>
                        <h4>Jun 27-27, 2018</h4>
                    </div>
                </a>  
            </div>       
        </div>  */}

    </div>
</section></>



}
