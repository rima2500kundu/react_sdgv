import InnerBanner from "../Components/InnerBanner";

export default function Events() {
  return <InnerBanner
  InnBanner="url(images/react_banner_img2.png)"
        bgColor="#fafbfd"
        bgRepeat="no-repeat"
        BnrRightImg="images/react_banner_img.png"
        TitleInn={[
          <span>Events:</span>,<br />,
          "Join Us for a ",<br />, "Memorable Experience",
        ]}
        ParaInn=""
        priCTALink={""}
        priCTATitle={""}
        secCTALink={""}
        secCTATitle={""} />;
}
