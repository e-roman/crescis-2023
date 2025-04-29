
"use client";
import { useEffect } from "react";
import { initIsotope } from "@/utils/FunctionsIsotope";
import { initPortfolioFilter } from "@/utils/initPortfolioFilter";

export default function Projects() {
  useEffect(() => {
    initIsotope();
    initPortfolioFilter();
  }, []);

  return (
    <>
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
                                        <a href="/projcts/projectDetail" className="pgi-image-wrap" data-cursor="View Project">
                                            <div className="pgi-image-holder cover-opacity-2">
                                                <div className="pgi-image-inner anim-zoomin">
                                                    <figure className="pgi-image ttgr-height">
                                                        <img src="assets/img/portfolio/portfolio-1.jpg" alt="image"/>
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
                                                        <img src="assets/img/portfolio/portfolio-2.jpg" alt="image"/>
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
                                                            <source src="assets/vids/fashion-week.mp4" type="video/mp4"/>
                                                            <source src="assets/vids/fashion-week.webm" type="video/webm"/>
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
                                                        <img src="assets/img/portfolio/portfolio-3.jpg" alt="image"/>
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
                                                        <img src="assets/img/portfolio/portfolio-4.jpg" alt="image"/>
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
                                                        <img src="assets/img/portfolio/portfolio-5.jpg" alt="image"/>
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
                                                        <img src="assets/img/portfolio/portfolio-6.jpg" alt="image"/>
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
                                                        <img src="assets/img/portfolio/portfolio-7.jpg" alt="image"/>
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
