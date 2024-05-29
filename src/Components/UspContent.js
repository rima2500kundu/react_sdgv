import React, { useEffect } from 'react'

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

function UspContent() {
    useIntersectionObserver();
  return (
    <>
      <section className="full_width USP_bottom_sec" data-inviewport="scale-in">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 USP_bottom_image">
                    <div className="USP_bottom_image_grp">
                        <div className="USP_bt_border">
                            <svg>
                                <line x1="0" y1="5%" x2="100%" y2="5%" className="ln1"/>
                                <line x1="95%" y1="0" x2="95%" y2="100%" className="ln1"/>
                                <line x1="100%" y1="95%" x2="0" y2="95%" className="ln1"/>
                                <line x1="5%" y1="0" x2="5%" y2="100%" className="ln1"/>
                            </svg>
                        </div>

                        <div className="cube_design">
                            <svg>
                                <line x1="0%" y1="49%" x2="20%" y2="21%"/> 
                                <line x1="20%" y1="21%" x2="55%" y2="11%"/> 
                                <line x1="80%" y1="33%" y2="11%" x2="55%"/> 
                                <line x1="80%" y1="33%" x2="46%" y2="44%"/> 
                                <line x1="46%" y1="44%" x2="20%" y2="21%"/> 
                                <line x1="44%" y1="90%" x2="0%" y2="49%"/>
                                <line x1="97%" y1="71%" x2="44%" y2="90%"/>
                                <line x1="44%" y1="90%" x2="46%" y2="44%"/>
                                <line x1="97%" y1="71%" x2="80%" y2="33%"/> 
                                <line x1="97%" y1="71%" x2="52%" y2="32%" className="faded_line"/>
                                <line x1="0%" y1="49%" x2="52%" y2="32%" className="faded_line"/>
                                <line x1="52%" y1="32%" x2="55%" y2="11%" className="faded_line"/>                          
                            </svg>   
                        </div>

                        <div className="piramid_dsgn">
                            <img src="images/piramid1.png" alt="Icon" />
                            <img src="images/piramid2.png" alt="Icon" />
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 USP_bottom_text">
                    <div className="text_controller">
                        <h2>Revolutionize Your <br />Hiring Process with Our AI-Powered Platform</h2>
                        <hr />
                        <p>Secure the best tech talent with our cutting-edge AI-driven platform. Our comprehensive hiring solution offers deeply vetted developers, tech leads, and other professionals with technical expertise to drive your business's success. Our advanced algorithms analyze résumés, code samples, and online profiles to identify candidates who meet your technical requirements, ensuring you find the right talent for your needs.</p>
                    </div>

                    <div className="text_controller">
                        <h2>Accelerate Your <br /> Career with SDG</h2>
                        <hr />
                        <p>Sourcedesk Global’s innovative platform connects you with leading companies seeking skilled developers, providing access to a wide range of projects and challenges. Our cutting-edge technology analyzes your skills and experience to match you with the best possible opportunities. Whether starting out or seeking to make a change, our platform empowers professionals to find the perfect job to take their career to the next level.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default UspContent;