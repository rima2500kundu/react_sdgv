import Accordion from "react-bootstrap/Accordion";
export default function AccordionComp() {
  return (
    <section className="full_width react_why_sdg bg_dark_blue fix_padding">
      <div className="container">
        <div className="text_controller text_controller_center white_text_center">
          <h2>
            Discover Why Sourcedesk Global Excels in Hiring ReactJS Developers
          </h2>
          <hr />
          <p>
            Tap into Sourcedesk Global's curated talent pool for your ReactJS
            project. Our rigorous vetting guarantees top-notch matches tailored
            to your unique needs.
          </p>
        </div>

        <div className="row">
          <div className="col-md-5 col-sm-6 react_accordion">
            <Accordion defaultActiveKey="0" className="stppng_accordian">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Seasoned Professionals</Accordion.Header>
                <Accordion.Body>
                  Our dedicated ReactJS experts seamlessly integrate with your
                  team, delivering exceptional work aligned with your business
                  goals.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>AI-Powered Matchmaking</Accordion.Header>
                <Accordion.Body>
                  We acknowledge unique organizational needs. Using AI and human
                  expertise, our matchmaking process tailors ReactJS
                  professionals for your project, meeting your organization's
                  specific demands.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Successful Project Delivery</Accordion.Header>
                <Accordion.Body>
                  Armed with cutting-edge technology, our ReactJS developers
                  ensure project success. With a record of ### placements, we
                  build growth-focused teams for our clients.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Rigorous Vetting Process</Accordion.Header>
                <Accordion.Body>
                  Our React JS developer vetting is rigorously thorough,
                  evaluating coding skills and language proficiency to select
                  the most qualified candidates, ensuring an ideal fit for your
                  project.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-md-7 col-sm-6">
            <div className="react_right_img">
              <img
                src="images/react_acc_img.png"
                alt="react_acc_img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
