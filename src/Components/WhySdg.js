import React, { useEffect } from 'react';

// svg animation js
const useIntersectionObserver = () => {
    useEffect(() => {
      const inViewport = (entries) => {
        entries.forEach(entry => {
          entry.target.classList.toggle('is-inViewport', entry.isIntersecting);
        });
      };
  
      const obsOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px', // No margin
        threshold: 0.1 // Trigger when 10% of the element is in the viewport
      };
  
      const observer = new IntersectionObserver(inViewport, obsOptions);
  
      // Attach observer to every [data-inviewport] element:
      const elementsInViewport = document.querySelectorAll('[data-inviewport]');
      elementsInViewport.forEach(element => {
        observer.observe(element);
      });
  
      // Cleanup observer on component unmount
      return () => {
        elementsInViewport.forEach(element => {
          observer.unobserve(element);
        });
      };
    }, []);
  };


function WhySdg() {
    useIntersectionObserver();
  return (
    <>
        <section className="full_width why_sdg" data-inviewport="scale-in">
            <div className="container">
                <div className="text_controller text_controller_center">
                    <h2>Why <span>Sourcedesk Global?</span></h2> 
                    <hr />               
                </div>

                <div className="row">
                    <div className="col-6 col-md-3 col-sm-3 col-xl-3 why_sdg_row">
                        <h4>Access Top <br /> Talent with Ease</h4>
                        <div className="two_dots"><img src="images/6lines.png" alt="images" /></div>
                        <h4>Hire in just 5 Days  <br /> with Fast Turnaround</h4>
                    </div>

                    <div className="col-6 col-md-3 col-sm-3 col-xl-3 why_sdg_row">
                        <h4>Vet Top Professionals <br /> in the Top 10%</h4>
                        <div className="two_dots"><img src="images/6lines.png" alt="images" /></div>
                        <h4>Save Costs by <br /> up to 66%</h4>
                    </div>

                    <div className="col-6 col-md-3 col-sm-3 col-xl-3 why_sdg_row">
                        <h4>Match Time <br /> Zones Seamlessly</h4>
                        <div className="two_dots"><img src="images/6lines.png" alt="images" /></div>
                        <h4>Get Full IT Support and <br /> Prestigious Co-Working Spaces</h4>
                    </div>

                    <div className="col-6 col-md-3 col-sm-3 col-xl-3 why_sdg_row">
                        <h4>Enjoy a Hassle-Free Hiring <br /> Process with a 2-Week Free Trial</h4>
                        <div className="two_dots"><img src="images/6lines.png" alt="images" /></div>
                        <h4>Streamline Your <br /> Hiring Effortlessly</h4>
                    </div>

                    <div className="why_sdg_graphics">
                        <svg viewBox="0 0 1000 300">
                            <path d="M2,200  Q140,85 146,86  Q165,70   252,138  Q367,225  381,227  Q395,235   519,141  Q586,92   600,87  Q627,67 722,147  Q820,221 842,228 T1000,110" fill="none" />
                            <path d="M2,110  Q95,191 150,227  Q163,230   264,155  Q379,78  379,85  Q403,67   560,198  Q615,239   623,225  Q690,178 769,123  Q830,77 850,83 T1000,200" fill="none" />
                        </svg>
                    </div>
                </div>

                <div className="cmn_btn_grp"><a href="/" className="cmn_btn_fill">Hire Developers</a></div>
            </div>
        </section> 
    </>
  )
}
export default WhySdg;