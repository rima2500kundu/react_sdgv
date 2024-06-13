import BlogsSlider from "../Components/BlogsSlider";
import InnerBanner from "../Components/InnerBanner";
import OurTeamTabs from "../Components/OurTeamTabs";
import TrustedSlider from "../Components/TrustedSlider";

export default function OurTeam() {
  return (
    <>
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
