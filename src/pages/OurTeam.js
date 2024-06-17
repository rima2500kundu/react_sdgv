import { Helmet } from "react-helmet";
import BlogsSlider from "../Components/BlogsSlider";
import InnerBanner from "../Components/InnerBanner";
import OurTeamTabs from "../Components/OurTeamTabs";
import TrustedSlider from "../Components/TrustedSlider";

export default function OurTeam() {
  return (
    <>
    <Helmet>
    <title>Pre-Vetted Remote Individuals - Meet Our Team</title>
<meta name="description" content="Meet our pre-vetted remote individuals at Sourcedesk. Discover a team of skilled professionals ready to elevate your projects. Your success, our expertise." />
<meta name="title" content="Pre-Vetted Remote Individuals - Meet Our Team" />
    {/* <!-- Canonical & hrefLang --> */}
    <link rel="canonical" href="https://www.sourcedesk.io/our-team" />
    <link rel="alternate" hrefLang="x-default" href="https://www.sourcedesk.io/our-team" />
    <link rel="alternate" hrefLang="en-US" href="https://www.sourcedesk.io/our-team" />

    {/* <!-- Twitter Card meta tags --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@sourcedeskgl" />
    <meta name="twitter:title" content="Pre-Vetted Remote Individuals - Meet Our Team" />
    <meta name="twitter:description" content="Meet our pre-vetted remote individuals at Sourcedesk. Discover a team of skilled professionals ready to elevate your projects. Your success, our expertise." />
    <meta name="twitter:image" content="https://www.sourcedesk.io/public/images/Twitter-1200x600.jpg" />
    {/* <!-- Facebook Open Graph tags --> */}
    <meta property="og:url" content="https://www.sourcedesk.io/our-team" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Pre-Vetted Remote Individuals - Meet Our Team" />
    <meta property="og:description" content="Meet our pre-vetted remote individuals at Sourcedesk. Discover a team of skilled professionals ready to elevate your projects. Your success, our expertise." />
    <meta property="og:image" content="https://www.sourcedesk.io/public/images/Fcebook-2400x1260.jpg" />
    {/* <!-- Additional Open Graph tags for better customization --> */}
    <meta property="og:image:width" content="2400" />
    <meta property="og:image:height" content="1260" />
    <meta property="og:image:alt" content="SourceDesk Global" />
    <meta property="og:locale" content="en_US" />
    <script type="application/ld+json">
{`
  "@context": "http://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.sourcedesk.io/#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.sourcedesk.io/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Why SDG",
      "item": "javascript:void(0)"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Our Team",
      "item": "https://www.sourcedesk.io/our-team"
    }
  ]
`}
</script>
<script type="application/ld+json">
{`
  "@context": "http://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": "Our Team",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "100"
    }
  },
  "author": {
    "@type": "Person",
    "name": "SourceDesk"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.5",
    "bestRating": "5",
    "worstRating": "1"
  },
  "reviewBody": "Review Body"
`}
</script>
    </Helmet>
      <InnerBanner
        bgRepeat="no-repeat"
        bgColor="#fafbfd"
        BnrRightImg="images/our_team_banner_grphcs.png"
        InnBanner="url(images/our_team_bg.png)"
        TitleInn="Unleashing Brilliance, Powering Growth"
        ParaInn="Meet the Visionaries Behind Your Business's Phenomenal Success"
        priCTALink="/"
        priCTATitle="Contact Us for Professional Guidance"
        secCTALink=""
        secCTATitle=""
        BnrLeftImg=""
        BnrLeftImgAlt=""
      />
      <TrustedSlider defaultTitle="Trusted By" />
      <section className="full_width verses_sec fix_padding backing_SDG">
        <div className="container">
          <div className="text_controller text_controller_center">
            <h2>
              {" "}
              <span>Introducing Sourcedesk Global </span> <br />
              Empowering Tech Businesses
            </h2>
            <hr />
            <p>
              At Sourcedesk Global, we understand the challenges of hiring
              skilled tech professionals in the face of budget constraints and
              talent shortages, especially in countries like the USA and Canada.
              We aim to revolutionize hiring through AI-driven top talent
              services. Our platform addresses complexities and cost issues in
              recruitment, onboarding, administration, and benefits management.
              With a global talent pool of pre-vetted professionals, we
              streamline hiring, ensuring technical proficiency and
              problem-solving skills. Rigorous background checks provide added
              security. Our scalable solutions help build high-performing,
              customized teams, reducing costs and unlocking growth potential
              for your business.
            </p>
          </div>
        </div>
      </section>
      <OurTeamTabs />
      <BlogsSlider heading="Leadership Thoughts" />
    </>
  );
}
