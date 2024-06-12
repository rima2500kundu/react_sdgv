import InnerBanner from "../Components/InnerBanner";

export default function EventDetails() {
  return <InnerBanner 
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
        secCTATitle={""} />
}
