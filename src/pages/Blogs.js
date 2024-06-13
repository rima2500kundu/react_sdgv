import BlogsSlider from "../Components/BlogsSlider";
import InnerBannerForm from "../Components/InnerBannerForm";

export default function Blogs() {
  return (
    <>
      <InnerBannerForm
        TitleInn="Insights"
        InnBanner="url(images/blog_bnr.png)"
        BnrRightImg="images/blog_grphcs1.png"
        bgRepeat="no-repeat"
        bgColor="#fafbfd"
placeHolderText="Email"
submitText="Subscribe"

      />
      <BlogsSlider heading={["Most", <span> Popular</span>]}  />
      <BlogsSlider heading={["Leadership", <span> Recent</span>]} bgColor="#f9fcfc" />
      <section class="full_width blog_pgbk foot_gap fix_padding">
    <div class="container">
        <div class="text_controller text_controller_center">
            <h2>Stay informed with the SDG Newsletter -
                <br /><span>subscribe now!</span></h2>  
            <p>Get exclusive insights on remote work, hiring, and engineering management delivered straight to your inbox by signing up for our newsletter.</p>                         
        </div>
        <div class="pgbk_form">
            <form action="post">
                <div class="cmn_btn_grp">
                    <input type="text" placeholder="Full name" class="cmn_btn_stroke" />
                    <input type="email" placeholder="Enter your email" class="cmn_btn_stroke" />
                    <input type="submit" value="Subscribe" class="cmn_btn_fill" />
                </div>
             </form>
        </div>
    </div>
</section>
    </>
  );
}
