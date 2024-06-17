import { Helmet } from "react-helmet";


export default function EventDetails() {
  return <>
  <Helmet>
  <title>Interview on Vodafone</title>
  </Helmet>
  <section class="full_width Home_banner inner_banner apply_talent_banner our_team_banner">
    <div class="Home_banner_sub hide-bg-early-1400-events-details" style={{background: "#f9fcfc url(images/events-pg-bg-with-mark.png) no-repeat center/cover"}}>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <div class="text_controller">
                        <h1><span>INTERVIEW ON VODAFONE</span><br />TORONTO</h1>                         
                    </div>
                    <p class="event-date-tag no-arrow mt-3">AUG 27-22, 2020</p>

                </div>

                <div class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 inner_bnr_right"><img src="images/events-detail-hero.png" alt="graphics" /></div>
            </div>
        </div>
    </div>
</section>

<section class="full_width fix_padding section-event-venue">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-8">
                <div class="text_controller">
                    <h2>Venue: <span>SDG’s Office, Toronto</span></h2>
                    <p class="event-date-tag mt-3">AUG 27-22, 2020</p>
                    <hr />
                </div>
                <ul class="mb-4">
                    <li><p><strong>Genre:</strong> Interview</p></li>
                    <li><p><strong>Participation Area:</strong> Vodafone Business</p></li>
                    <li><p><strong>Outline:</strong> Top Marketing Tips for Businesses</p></li>
                    <li><p><strong>Speakers/ Participants:</strong> Jas Saran</p></li>
                </ul>   
                <h3 class="text_controller"><span>Summary:</span></h3>
                <p>Jas Saran, the Managing Partner (Business Development) of Sourcedesk Global (SDG) was interviewed by the Vodafone Business team, partnered with Harvard Business Review and MIT Technology Review (ES). The project aimed at preparing short documentaries with global thought leaders who speak about innovation, technology, digital transformation and their vision of the future. Being the head of a reputable digital marketing company, Jas shared his ideas on how businesses can achieve new heights with successful online marketing.</p>
                <div>
                <iframe style={{width:"100%"}} width="1250" height="703" src="https://www.youtube.com/embed/S7E8l9NCJHs" title="Cuatro consejos cautelosos de marketing digital antes de lanzar un pequeño negocio | Jaspreet Saran" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div class="col-md-4"><img src="images/location-pointer.png" alt="" class="d-md-block d-none" /></div>
        </div>
    </div>
</section>
  </>
}
