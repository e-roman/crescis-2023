
"use client";
import { useEffect } from "react";
import Link from "next/link";

// Functions
import { initIsotope } from "@/utils/FunctionsIsotope";
import { initPortfolioFilter } from "@/utils/initPortfolioFilter";



export default function Projects() {
  useEffect(() => {
    initIsotope();
    initPortfolioFilter();
  }, []);

  return (
    <>



        <div id="page-header" className="ph-full ph-hero-about">
            <div className="page-header-inner tt-wrap-xl padding-top-100">
                
                <div className="ph-image-bg">
                    <div className="drawLoaded anim-drawing">
					    <svg className="svg-elem-1" width="1319" height="728" viewBox="0 0 1319 728" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1040.23 146.05L1020.07 171.63L971.9 232.75L913.41 306.97L863.05 370.88L838.47 402.07L838.13 402.5L847.91 395.03L778.46 436.76L768.57 442.7L802.87 438.22L701.21 409.82L686.86 405.81L707.67 417.75L657.47 365.88L650.36 358.54L663.8 390.98L665.15 323.89L665.35 314.13L659.38 336.79L688.93 271L735.98 166.25L746.71 142.36L729.46 159.61L751.23 144.75H705.91L717.93 151.54L700.68 134.29L738.37 226.75L743.72 239.88L739.24 205.58L727.56 267.44L709.09 365.24L704.8 387.96L716.74 367.15L685.31 392.8L717.75 379.36L655.04 376.22L694.95 399.44L662.23 348.06L610.13 266.26L598.25 247.6L602.73 281.9L614.71 219.7L633.89 120.1L638.28 97.3L626.34 118.11L669.49 78.58L597.14 68.81L616.46 100.47V55.14L598.97 90.87L627.24 69.14L556.24 95.37L444.09 136.81L418.4 146.3H441.68L363.58 118.73L352.4 114.78L363.42 119.26L279.27 73.71L267.48 67.33L277.26 74.79L249.87 45.33L240.1 117.68L278.42 98.43L244.12 102.91C245.42 103.35 246.7 103.86 247.98 104.37L236.96 99.89C242.75 102.26 248.39 105.09 253.43 108.81L243.65 101.35C245.75 102.96 247.68 104.7 249.34 106.76L241.87 96.98C242.73 98.13 243.46 99.31 244.04 100.63L239.56 89.61C239.88 90.46 240.12 91.3 240.29 92.19L238.8 80.55C238.91 81.46 238.92 82.33 238.84 83.24L240.33 71.6C240.1 73.01 239.7 74.33 239.2 75.67L243.68 64.65C241.99 68.78 239.74 72.71 237.21 76.38L254.46 59.13L231.47 74.45L176.24 111.25L109.06 156.01L51.26 194.52L23.13 213.26L22.73 213.53L1 241.8L5.48 276.1L33.75 297.82L68.05 293.34L107.22 267.24L192.02 210.74L272.15 157.36L295.07 142.09L299.53 139.12L299.78 138.95L317.04 121.69L317.82 120.52L328.71 96.82L322.55 52.83L296.38 27.32L267.46 14.15L230.58 19.88L221.06 24.66L198.95 35.77L194.79 37.86L172.32 71.95L185.02 110.21L205.31 132.03L225.81 149.09L285.68 181.5L332.27 204.65L396.58 227.35L418 234.91L418.43 235.06L424.26 235.81L441.72 235.06L441.76 235.04L442.62 234.72L447.46 232.93L497.82 214.33L571.47 187.12L633 164.39L648.59 158.63L650.11 158.07L650.45 157.94L650.53 157.91H650.55C650.55 157.91 654.25 156.47 656.06 155.66C660.06 154.6 663.52 152.61 666.46 149.69C671.97 145.48 679.87 134.02 679.87 134.02L682.85 127.93L696.29 100.47L702.27 77.79L696.28 55.11L695.63 54.04L692.32 48.62L682.52 32.57L676.96 23.47L642.86 1L604.6 13.7L569.87 45.52L549.48 74.19L547.93 82.22L527.93 186.09L517.9 238.15L514.89 253.79L514.14 257.71L518.46 292.95L562.42 361.97L613.94 442.86L615.14 444.74L627.52 458.29L632.41 462.02C639.45 465.97 655.07 467.99 655.07 467.99H655.12L657.09 468.09L680.63 469.27L709.26 470.7L716.99 471.09L740.43 465.15L751.34 456.76L771.76 440.09L793.64 410.88L798.9 383.01L820.5 268.62L827.41 232.01L827.96 229.11L828.01 205.56L823.32 194.02L818.08 181.15L780.75 89.57L751.22 64.91H705.9L684.96 79.21L666.58 97.69L664.98 101.24L647.55 140.04L594.47 258.24L580.09 290.25L579.65 291.24L573.58 314.13L573.48 319.32L572.9 347.88L572.26 379.54L572.06 389.29L585.71 423.65L622.4 461.56L640.29 480.04L663.59 494.56L666.78 495.45L718.59 509.92L773.76 525.33L779.09 526.82L814.61 522.05L831.48 511.91L884.89 479.82L903.11 467.22L906.93 462.38L964.32 389.56L1047.8 283.63L1102.41 214.33L1105.11 210.9C1109.74 206.6 1112.98 201.5 1114.81 195.61C1117.52 190.28 1118.54 178.46 1118.54 178.46L1105.1 146.02L1072.66 132.59L1040.22 146.03L1040.23 146.05Z" stroke="#FFB2C7" strokeWidth="1.3" strokeMiterlimit="10" fill="transparent"></path></svg>
                    </div>
                </div>
                
                
                <div className="ph-caption about-caption is-hidden">
                    <h1 className="ph-caption-title ph-caption-title-about split-lines-init not-split-in">WE MAKE BRANDS THAT CAN´T BE INGNORED</h1>
                </div> 
                
            </div> 
            
            <a href="#page-content" className="scroll-down-circle" data-offset="30">
              <div className="sdc-inner ph-appear">
                <div className="sdc-icon"><i className="fas fa-chevron-down"></i></div>
                <svg viewBox="0 0 500 500">
                  <defs>
                    <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle"></path>
                  </defs>
                  <text dy="30">
                    <textPath href="#textcircle">
                      Scroll down – Scroll down –
                    </textPath>
                  </text>
                </svg>
              </div> 
            </a>
        </div>








        <div className="tt-section">
            <div className="tt-section-inner">

                <div id="portfolio-grid" className="pgi-cap-inside pgi-cap-hover">

                    <div className="tt-grid ttgr-layout-1-2 ttgr-gap-4">


                        <div className="tt-grid-top">

                            <div className="tt-grid-categories">

                                <div className="ttgr-cat-trigger-wrap ttgr-cat-fixed">
                                    <a href="#portfolio-grid" className="ttgr-cat-trigger not-hide-cursor" data-offset="150">
                                        <div className="ttgr-cat-text">
                                            <span data-hover="Open">Filter</span>
                                        </div>
                                        <div className="ttgr-cat-icon">
                                            <span className="magnetic-item"><i className="fas fa-layer-group"></i></span>
                                        </div>
                                    </a>
                                </div>

                                <div className="ttgr-cat-nav">
                                    <div className="ttgr-cat-list-holder cursor-close">
                                        <div className="ttgr-cat-list-inner">
                                            <div className="ttgr-cat-list-content">
                                                <ul className="ttgr-cat-list">
                                                    <li className="ttgr-cat-close">Close <i className="fas fa-times"></i></li> 
                                                    <li className="ttgr-cat-item"><a href="#" className="active">Show All</a></li>
                                                    <li className="ttgr-cat-item"><a href="#" data-filter=".branding">Branding</a></li>
                                                    <li className="ttgr-cat-item"><a href="#" data-filter=".people">People</a></li>
                                                    <li className="ttgr-cat-item"><a href="#" data-filter=".nature">Nature</a></li>
                                                    <li className="ttgr-cat-item"><a href="#" data-filter=".creative">Creative</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            

                        </div>


                        <div className="tt-grid-items-wrap isotope-items-wrap">

                            <div className="tt-grid-item isotope-item people">
                                <div className="ttgr-item-inner">

                                    <div className="portfolio-grid-item">
                                        <a href={`/projects/Docusing`} className="pgi-image-wrap" data-cursor="View Project">
                                            <div className="pgi-image-holder cover-opacity-2">
                                                <div className="pgi-image-inner anim-zoomin">
                                                    <figure className="pgi-image ttgr-height">
														<video className="pgi-video" loop muted preload="metadata" poster="assets/vids/fashion-week.jpg">
															 <source src="https://d2llx07cilb2cs.cloudfront.net/projects/docusign/09.mp4" type="video/mp4" />
														</video>
                                                    </figure> 
                                                </div>
                                            </div>
                                        </a>

                                        <div className="pgi-caption">
                                            <div className="pgi-caption-inner">
                                                <h2 className="pgi-title">Victorian Girls</h2>
                                                <div className="pgi-categories-wrap">
                                                    <div className="pgi-category">People</div>
                                                    <div className="pgi-category">Varia</div> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                            

                            <div className="tt-grid-item isotope-item creative">
                                <div className="ttgr-item-inner">

                                    <div className="portfolio-grid-item">
                                        <a href="/projcts/projectDetail" className="pgi-image-wrap" data-cursor="View Project">
                                            <div className="pgi-image-holder cover-opacity-2">
                                                <div className="pgi-image-inner anim-zoomin">
                                                    <figure className="pgi-image ttgr-height">
														<video className="pgi-video" loop muted preload="metadata" poster="assets/vids/fashion-week.jpg">
															 <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/01.mp4" type="video/mp4" />
														</video>
                                                    </figure> 
                                                </div>
                                            </div>
                                        </a>

                                        <div className="pgi-caption">
                                            <div className="pgi-caption-inner">
                                                <h2 className="pgi-title">Smithy</h2>
                                                <div className="pgi-categories-wrap">
                                                    <div className="pgi-category">Creative</div>
                                                    <div className="pgi-category">Varia</div> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                            

                            <div className="tt-grid-item isotope-item people">
                                <div className="ttgr-item-inner">

                                    <div className="portfolio-grid-item">
                                        <a href="/projcts/projectDetail" className="pgi-image-wrap" data-cursor="View Project">
                                            <div className="pgi-image-holder cover-opacity-2">
                                                <div className="pgi-image-inner anim-zoomin">
                                                    <figure className="pgi-video-wrap ttgr-height">
														<video className="pgi-video" loop muted preload="metadata" poster="assets/vids/fashion-week.jpg">
															<source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/penta/penta-preview.mp4" type="video/mp4" />
														</video>
                                                    </figure> 
                                                </div>
                                            </div>
                                        </a>

                                        <div className="pgi-caption">
                                            <div className="pgi-caption-inner">
                                                <h2 className="pgi-title">Washion Week</h2>
                                                <div className="pgi-categories-wrap">
                                                    <div className="pgi-category">People</div>
                                                    <div className="pgi-category">Varia</div> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                            

                            <div className="tt-grid-item isotope-item nature">
                                <div className="ttgr-item-inner">

                                    <div className="portfolio-grid-item">
                                        <a href="/projcts/projectDetail" className="pgi-image-wrap" data-cursor="View Project">
                                            <div className="pgi-image-holder cover-opacity-2">
                                                <div className="pgi-image-inner anim-zoomin">
                                                    <figure className="pgi-image ttgr-height">
														<video className="pgi-video" loop muted preload="metadata" poster="assets/vids/fashion-week.jpg">
															 <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-01.mp4" type="video/mp4" />
														</video>
                                                    </figure> 
                                                </div>
                                            </div>
                                        </a>

                                        <div className="pgi-caption">
                                            <div className="pgi-caption-inner">
                                                <h2 className="pgi-title">Mystery Forest</h2>
                                                <div className="pgi-categories-wrap">
                                                    <div className="pgi-category">Nature</div>
                                                    <div className="pgi-category">Varia</div> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                            

                            <div className="tt-grid-item isotope-item branding">
                                <div className="ttgr-item-inner">

                                    <div className="portfolio-grid-item">
                                        <a href="/projcts/projectDetail" className="pgi-image-wrap" data-cursor="View Project">
                                            <div className="pgi-image-holder cover-opacity-2">
                                                <div className="pgi-image-inner anim-zoomin">
                                                    <figure className="pgi-image ttgr-height">
														<video className="pgi-video" loop muted preload="metadata" poster="assets/vids/fashion-week.jpg">
															  <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/dreamforce/01.mp4" type="video/mp4" />
														</video>
                                                    </figure> 
                                                </div>
                                            </div>
                                        </a>

                                        <div className="pgi-caption">
                                            <div className="pgi-caption-inner">
                                                <h2 className="pgi-title">Red Package</h2>
                                                <div className="pgi-categories-wrap">
                                                    <div className="pgi-category">Branding</div>
                                                    <div className="pgi-category">Varia</div> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                            

                            <div className="tt-grid-item isotope-item people">
                                <div className="ttgr-item-inner">

                                    <div className="portfolio-grid-item">
                                        <a href="/projcts/projectDetail" className="pgi-image-wrap" data-cursor="View Project">
                                            <div className="pgi-image-holder cover-opacity-2">
                                                <div className="pgi-image-inner anim-zoomin">
                                                    <figure className="pgi-image ttgr-height">
														<video className="pgi-video" loop muted preload="metadata" poster="assets/vids/fashion-week.jpg">
															  <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/17sigma/01.mp4" type="video/mp4" />
														</video>
                                                    </figure> 
                                                </div>
                                            </div>
                                        </a>

                                        <div className="pgi-caption">
                                            <div className="pgi-caption-inner">
                                                <h2 className="pgi-title">Studio Shoot</h2>
                                                <div className="pgi-categories-wrap">
                                                    <div className="pgi-category">People</div>
                                                    <div className="pgi-category">Varia</div> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                            

                            <div className="tt-grid-item isotope-item nature">
                                <div className="ttgr-item-inner">

                                    <div className="portfolio-grid-item">
                                        <a href="/projcts/projectDetail" className="pgi-image-wrap" data-cursor="View Project">
                                            <div className="pgi-image-holder cover-opacity-2">
                                                <div className="pgi-image-inner anim-zoomin">
                                                    <figure className="pgi-image ttgr-height">
														<video className="pgi-video" loop muted preload="metadata" poster="assets/vids/fashion-week.jpg">
															  <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-01a.mp4" type="video/mp4" />
														</video>
                                                    </figure> 
                                                </div>
                                            </div>
                                        </a>

                                        <div className="pgi-caption">
                                            <div className="pgi-caption-inner">
                                                <h2 className="pgi-title">Breaking Wave</h2>
                                                <div className="pgi-categories-wrap">
                                                    <div className="pgi-category">Nature</div>
                                                    <div className="pgi-category">Varia</div> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                            

                            <div className="tt-grid-item isotope-item branding">
                                <div className="ttgr-item-inner">

                                    <div className="portfolio-grid-item pgi-image-is-light">
                                        <a href="/projcts/projectDetail" className="pgi-image-wrap" data-cursor="View Project">
                                            <div className="pgi-image-holder cover-opacity-2">
                                                <div className="pgi-image-inner anim-zoomin">
                                                    <figure className="pgi-image ttgr-height">
														<video className="pgi-video" loop muted preload="metadata" poster="assets/vids/fashion-week.jpg">
															  <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-01.mp4" type="video/mp4" />
														</video>
                                                    </figure> 
                                                </div>
                                            </div>
                                        </a>

                                        <div className="pgi-caption">
                                            <div className="pgi-caption-inner">
                                                <h2 className="pgi-title">Wall Lamp</h2>
                                                <div className="pgi-categories-wrap">
                                                    <div className="pgi-category">Branding</div>
                                                    <div className="pgi-category">Varia</div> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>

                                </div> 
                            </div>

                            <div className="tt-grid-item isotope-item creative">
                                <div className="ttgr-item-inner">

                                    <div className="portfolio-grid-item">
                                        <a href="/projcts/projectDetail" className="pgi-image-wrap" data-cursor="View Project">
                                            <div className="pgi-image-holder cover-opacity-2">
                                                <div className="pgi-image-inner anim-zoomin">
                                                    <figure className="pgi-image ttgr-height">
                                                        <img src="assets/img/portfolio/portfolio-8.jpg" alt="image"/>
                                                    </figure>
                                                </div> 
                                            </div>
                                        </a> 

                                        <div className="pgi-caption">
                                            <div className="pgi-caption-inner">
                                                <h2 className="pgi-title">Elegant Stoves</h2>
                                                <div className="pgi-categories-wrap">
                                                    <div className="pgi-category">Creative</div>
                                                    <div className="pgi-category">Varia</div>
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                
            </div>
        </div>
    </>
  );
}
