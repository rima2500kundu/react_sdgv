// import Particles from '@tsparticles/react';
import React, { useEffect } from 'react'
import ParticlesFunc from './Particles';


function HomeBanner() {
    // banner animation js
    useEffect(() => {
        const loopDNA = document.getElementById("loop_dna");
        const div = document.getElementById("DNA");

        let animationDelay = 0.15;
        let animationProper = "-0.15s";

        for (let i = 0; i < 28; i++) {
            animationDelay += 0.15;

            div.style.animationDelay = animationProper;

            loopDNA.appendChild(div.cloneNode(true));

            animationProper = "-" + animationDelay + "s";
        }
    }, []);

  return (
    <>
        <section className="full_width Home_banner">
            <div className="Home_banner_sub">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 Hom_bnr_left">
                        <div className="Hom_bnr_left_sub">
                            <div className="banner_text">
                                <h1>Experience Unmatched Tech Proficiency with <span> Sourcedesk’s</span> Remote Tech Professionals</h1>
                                <div className="bnr_text_grphs">
                                    <img src="images/oragage_circle.png" alt="icon" className="bnr_text_grphs_main" />
                                    <img src="images/oragage_circle_dots.png" alt="icon" className="dot_pop" />
                                </div> 
                                <p>Discover the future of hiring with our innovative process, combining AI and human intelligence for optimal candidate matching.</p>
                            </div>
                            <div className="cmn_btn_grp">
                                <a href="/" className="cmn_btn_fill">Hire Developers</a>
                                <a href="/" className="cmn_btn_stroke">Apply For Jobs</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 Hom_bnr_right">
                        <ParticlesFunc />
                        <img src="images/bnr_objects.png" alt="" className="bnr_object" />

                        <div className="material" id="loop_dna">
                            <div className="dna" id="DNA"><div className="dna_color"></div></div>
                        </div>

                        <div className="bnr_right_atom1">
                            <img src="images/atom_icon1.png" alt="Icon" />
                            <img src="images/atom1_elmnts1.png" alt="icon" className="bnr_atom1_elimnts1" />
                            <img src="images/atom1_elmnts2.png" alt="icon" className="bnr_atom1_elimnts2" />
                            <img src="images/atom1_elmnts3.png" alt="icon" className="bnr_atom1_elimnts3" />
                        </div>
                        
                        <div className="bnr_right_atom2">
                            <img src="images/atom_icon2.png" alt="Icon" />
                            <img src="images/atom2_elmnts1.png" alt="Icon" className="bnr_atom2_elimnts1" />
                            <img src="images/atom2_elmnts2.png" alt="Icon" className="bnr_atom2_elimnts2" />
                            <img src="images/atom2_elmnts3.png" alt="Icon" className="bnr_atom2_elimnts3" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HomeBanner;