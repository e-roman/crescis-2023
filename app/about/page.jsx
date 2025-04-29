

/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect } from "react";

// Functions
import {
    initAccordion
  } from "@/utils/FunctionsAccordion";
  
import {
  initPortfolioSlider,
  initPortfolioCarousel,
  initContentCarousel,
  initTestimonialsSlider
} from "@/utils/FunctionsSwipers";

export default function AboutPage() {
  useEffect(() => {
    initPortfolioSlider();
    initPortfolioCarousel();
    initContentCarousel();      
    initTestimonialsSlider();
    initAccordion();          
  }, []);

  return (
    <>

        <div id="page-header" className="ph-full ph-cap-xxlg ph-center ph-image-cropped ph-image-cover-4 ph-content-parallax">
            <div className="page-header-inner tt-wrap">
                
                <div className="ph-image">
                    <div className="ph-image-inner">
                        <img src="assets/img/page-header/ph-4.jpg" alt="Image" />
                    </div>
                </div>
                
                
                <div className="ph-caption">
                    <h1 className="ph-caption-title ph-appear">About</h1>
                    <div className="ph-caption-title-ghost ph-appear">About</div>
                    <div className="ph-caption-subtitle ph-appear">The House</div>
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

            <div className="made-with-love ph-appear">
              <div className="mwl-inner">
                <div className="mwl-text">Made with</div>
                <div className="mwl-icon"><i className="far fa-heart"></i></div>
              </div>
            </div>
        </div>

        <div id="page-content">

            <div className="tt-section">
                <div className="tt-section-inner tt-wrap">

                    <div className="tt-row">
                        <div className="tt-col-lg-4 padding-right-lg-5-p">
                            <div className="tt-heading tt-heading-sm margin-bottom-60 anim-fadeinup">
                                <h2 className="tt-heading-title text-gray">The<br className="hide-from-md" /> Story</h2>
                            </div>
                        </div> 

                        <div className="tt-col-lg-8">
                            <div className="text-xxlg font-alter">
                                <p className="anim-fadeinup">Hello, we going manor who did. Do ye is considered occasion directly that. May ecstatic did surprise elegance the ignorant age. Own her miss cold. It so numerous if outlived possession.</p>
                                <p className="anim-fadeinup">Fat new smallness few supposing suspicion two. Course sir awesome <a href="https://1.envato.market/tank" target="_blank" rel="noopener">website teplates</a> add entire design. How one dull get busy dare far. At principle perfectly by sweetness do. As mr started arrival.</p>
                            </div>
                        </div> 
                    </div> 

                </div>
            </div>

            <div className="tt-section">
                <div className="tt-section-inner">
                    <div className="tt-content-carousel cc-shifted cursor-drag cc-scale-down cc-hide-pagination cc-hide-navigation" data-simulate-touch="true" data-speed="900">
                        <div className="swiper">
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div className="tt-content-carousel-item">
                                        <figure className="cover-opacity-1">
                                            <img className="tt-cc-image anim-image-parallax swiper-lazy" src="assets/img/low-qlt-thumb.jpg" data-src="assets/img/misc/misc-1.jpg" alt="Image"/>
                                            <figcaption>Image Caption</figcaption>
                                        </figure>
                                    </div> 
                                </div>

                                <div className="swiper-slide">
                                    <div className="tt-content-carousel-item">
                                        <figure className="cover-opacity-1">
                                            <img className="tt-cc-image anim-image-parallax swiper-lazy" src="assets/img/low-qlt-thumb.jpg" data-src="assets/img/misc/misc-2.jpg" alt="Image"/>
                                            <figcaption>Image Caption</figcaption>
                                        </figure>
                                    </div> 
                                </div>

                                <div className="swiper-slide">
                                    <div className="tt-content-carousel-item">
                                        <figure className="cover-opacity-1">
                                            <video className="tt-cc-video" loop muted preload="metadata" poster="assets/vids/office-team.jpg">
                                                <source src="/assets/vids/office-team.mp4" type="video/mp4" />
                                                <source src="/assets/vids/office-team.webm" type="video/webm" />
                                            </video>
                                        </figure>
                                    </div> 
                                </div> 

                                <div className="swiper-slide">
                                    <div className="tt-content-carousel-item">
                                        <figure className="cover-opacity-1">
                                            <img className="tt-cc-image anim-image-parallax swiper-lazy" src="assets/img/low-qlt-thumb.jpg" data-src="assets/img/misc/misc-3.jpg" alt="Image"/>
                                            <figcaption>Image Caption</figcaption>
                                        </figure>
                                    </div> 
                                </div>

                                <div className="swiper-slide">
                                    <div className="tt-content-carousel-item">
                                        <figure className="cover-opacity-1">
                                            <img className="tt-cc-image anim-image-parallax swiper-lazy" src="assets/img/low-qlt-thumb.jpg" data-src="assets/img/misc/misc-4.jpg" alt="Image"/>
                                            <figcaption>Image Caption</figcaption>
                                        </figure>
                                    </div> 
                                </div>

                                <div className="swiper-slide">
                                    <div className="tt-content-carousel-item">
                                        <figure className="cover-opacity-1">
                                            <img className="tt-cc-image anim-image-parallax swiper-lazy" src="assets/img/low-qlt-thumb.jpg" data-src="assets/img/misc/misc-5.jpg" alt="Image"/>
                                            <figcaption>Image Caption</figcaption>
                                        </figure>
                                    </div> 
                                </div>

                            </div>

                        </div>
                        <div className="tt-cc-nav-prev">
                            <div className="tt-cc-nav-arrow magnetic-item"></div>
                        </div>
                        <div className="tt-cc-nav-next">
                            <div className="tt-cc-nav-arrow magnetic-item"></div>
                        </div>
                        <div className="tt-cc-pagination hide-cursor"></div>
                    </div>
                </div>
            </div>





            <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-200">
                <div className="tt-section-inner tt-wrap">

                    <div className="tt-heading tt-heading-xxlg tt-heading-stroke tt-heading-center margin-bottom-10-p anim-fadeinup">
                        <h3 className="tt-heading-subtitle text-gray">What We Do</h3>
                        <h2 className="tt-heading-title">Services</h2>
                    </div>

                    <div className="tt-accordion tt-ac-xlg tt-ac-borders accordion">
                        <div className="tt-accordion-item anim-fadeinup accordion-group">
                            <div className="tt-accordion-heading">
                                <h3 className="tt-ac-head-title">UX / Research</h3>
                                <div className="tt-accordion-subtext">Mauris mauris ante</div>
                                <div className="tt-accordion-caret-wrap">
                                    <div className="tt-accordion-caret magnetic-item"></div>
                                </div>
                            </div> 
                            <div className="accordion-content">
                                <div className="tt-accordion-content">
                                    <p>This GSAP accordion script offers versatile functionality ideal for a range of use cases, such as menus and FAQs. Seamlessly integrated into websites, it enhances navigation and content organization. For menus, users can easily expand sections to view available options, streamlining the browsing experience. In FAQs, collapsible sections conserve space while providing quick access to answers, promoting user engagement. With customizable styling options, the accordion adapts to different design themes, ensuring consistency across the site. GSAP's efficient animation engine guarantees smooth transitions, optimizing performance for both desktop and mobile users.</p>
                                </div>
                            </div>
                        </div>
                        <div className="tt-accordion-item anim-fadeinup accordion-group">
                            <div className="tt-accordion-heading">
                                <h3 className="tt-ac-head-title">UX / Research</h3>
                                <div className="tt-accordion-subtext">Mauris mauris ante</div>
                                <div className="tt-accordion-caret-wrap">
                                    <div className="tt-accordion-caret magnetic-item"></div>
                                </div>
                            </div> 
                            <div className="accordion-content">
                                <div className="tt-accordion-content">
                                    <p>This GSAP accordion script offers versatile functionality ideal for a range of use cases, such as menus and FAQs. Seamlessly integrated into websites, it enhances navigation and content organization. For menus, users can easily expand sections to view available options, streamlining the browsing experience. In FAQs, collapsible sections conserve space while providing quick access to answers, promoting user engagement. With customizable styling options, the accordion adapts to different design themes, ensuring consistency across the site. GSAP's efficient animation engine guarantees smooth transitions, optimizing performance for both desktop and mobile users.</p>
                                </div>
                            </div>
                        </div>
                        <div className="tt-accordion-item anim-fadeinup accordion-group">
                            <div className="tt-accordion-heading">
                                <h3 className="tt-ac-head-title">UX / Research</h3>
                                <div className="tt-accordion-subtext">Mauris mauris ante</div>
                                <div className="tt-accordion-caret-wrap">
                                    <div className="tt-accordion-caret magnetic-item"></div>
                                </div>
                            </div> 
                            <div className="accordion-content">
                                <div className="tt-accordion-content">
                                    <p>This GSAP accordion script offers versatile functionality ideal for a range of use cases, such as menus and FAQs. Seamlessly integrated into websites, it enhances navigation and content organization. For menus, users can easily expand sections to view available options, streamlining the browsing experience. In FAQs, collapsible sections conserve space while providing quick access to answers, promoting user engagement. With customizable styling options, the accordion adapts to different design themes, ensuring consistency across the site. GSAP's efficient animation engine guarantees smooth transitions, optimizing performance for both desktop and mobile users.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-150 padding-left-sm-3-p padding-right-sm-3-p bg-white-accent-2">
                <div className="tt-section-inner tt-wrapp">


                    <div className="tt-testimonials-slider text-center cursor-drag ts-scale-down ts-hide-navigation anim-fadeinup" data-loop="true" data-simulate-touch="true" data-speed="900">

                    
                        <div className="swiper">

                            
                            <div className="swiper-wrapper">

                                <div className="swiper-slide font-alter">
                                    <div className="tt-ts-item">
                                        <div className="tt-ts-text">
                                            "One of the best template I've ever had. I love it! It's fully customizable, well coded, fast and responsive - fitting for all kind of devices."
                                        </div>
                                        <div className="tt-ts-subtext">- Wironimo</div>
                                    </div>
                                </div> 

                                <div className="swiper-slide font-alter">
                                    <div className="tt-ts-item">
                                        <div className="tt-ts-text">
                                            "Brilliant template. Tons of options, many concepts, design flexibility, code quality, explanatory comments in each section for easy styling."
                                        </div>
                                        <div className="tt-ts-subtext">- Gneto</div>
                                    </div>
                                </div>

                                <div className="swiper-slide font-alter">
                                    <div className="tt-ts-item">
                                        <div className="tt-ts-text">
                                            "Easy to customize, plenty of choices to display your portfolio, fast loading times. Excellent support."
                                        </div>
                                        <div className="tt-ts-subtext">- Brendak</div>
                                    </div>
                                </div>

                                <div className="swiper-slide font-alter">
                                    <div className="tt-ts-item">
                                        <div className="tt-ts-text">
                                            "Very nice design and well organised and commented code. Also good customer service."
                                        </div>
                                        <div className="tt-ts-subtext">- Gazzzzz</div>
                                    </div>
                                </div> 

                                <div className="swiper-slide font-alter">
                                    <div className="tt-ts-item">
                                        <div className="tt-ts-text">
                                            "I founded a bug on Iphone and Ipad and the author fixed very quickly. I appreciated his efforts and his quickness in solving the problem."
                                        </div>
                                        <div className="tt-ts-subtext">- Admanente</div>
                                    </div>
                                </div> 

                            </div>

                        </div>


                        <div className="tt-ts-nav-prev">
                            <div className="tt-ts-nav-arrow magnetic-item"></div>
                        </div>
                        <div className="tt-ts-nav-next">
                            <div className="tt-ts-nav-arrow magnetic-item"></div>
                        </div>

                        <div className="tt-ts-pagination hide-cursor"></div>

                    </div>

                </div>
            </div>

            <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-150">
                <div className="tt-section-inner tt-wrap">

                        <div className="tt-row">
                            <div className="tt-col-lg-4 padding-right-md-5-p">

                                <div className="tt-heading tt-heading-sm margin-bottom-60 anim-fadeinup">
                                    <h2 className="tt-heading-title text-gray">Honors &amp;<br className="hide-from-md" /> Mentions</h2>
                                </div>
                                

                            </div> 

                            <div className="tt-col-lg-4">

                                <ul className="list-styled">
                                    <li className="anim-fadeinup">
                                        <h5 className="no-margin"><a href="https://1.envato.market/tank" className="tt-link" target="_blank" rel="noopener">World Brand Design Awards</a></h5>
                                        <p className="text-gray">Donec fringilla tortor at eros.</p>
                                    </li>
                                    <li className="anim-fadeinup">
                                        <h5 className="no-margin"><a href="https://1.envato.market/tank" className="tt-link" target="_blank" rel="noopener">World Design Awards</a></h5>
                                        <p className="text-gray">Cras quis hendrerit nulla.</p>
                                    </li>
                                    <li className="anim-fadeinup">
                                        <h5 className="no-margin"><a href="https://1.envato.market/tank" className="tt-link" target="_blank" rel="noopener">Product Design Awards</a></h5>
                                        <p className="text-gray">Pellentesque et fermentum.</p>
                                    </li>
                                    <li className="anim-fadeinup">
                                        <h5 className="no-margin"><a href="https://1.envato.market/tank" className="tt-link" target="_blank" rel="noopener">Lighting Design Awards</a></h5>
                                        <p className="text-gray">In non leo quis risus blandit.</p>
                                    </li>
                                </ul>

                            </div> 

                            <div className="tt-col-lg-4">

                                <ul className="list-styled">
                                    <li className="anim-fadeinup">
                                        <h5 className="no-margin"><a href="https://1.envato.market/tank" className="tt-link" target="_blank" rel="noopener">Red Dot Award Design Concept</a></h5>
                                        <p className="text-gray">Curabitur rhoncus ligula.</p>
                                    </li>
                                    <li className="anim-fadeinup">
                                        <h5 className="no-margin"><a href="https://1.envato.market/tank" className="tt-link" target="_blank" rel="noopener">One Color Award</a></h5>
                                        <p className="text-gray">Orci varius natoque penatibus.</p>
                                    </li>
                                    <li className="anim-fadeinup">
                                        <h5 className="no-margin"><a href="https://1.envato.market/tank" className="tt-link" target="_blank" rel="noopener">London International Creative Competition</a></h5>
                                        <p className="text-gray">Aliquam tellus leone.</p>
                                    </li>
                                    <li className="anim-fadeinup">
                                        <h5 className="no-margin"><a href="https://1.envato.market/tank" className="tt-link" target="_blank" rel="noopener">Green Concept Award</a></h5>
                                        <p className="text-gray">Phasellus a interdum tellus.</p>
                                    </li>
                                </ul>

                            </div> 
                        </div> 

                </div>
            </div>

            <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-150 bg-white-accent-2">
                <div className="tt-section-inner tt-wrap">

                    <div className="tt-heading tt-heading-xxlg tt-heading-stroke tt-heading-center margin-bottom-10-p anim-fadeinup">
                        <h3 className="tt-heading-subtitle text-gray">Proudly Served</h3>
                        <h2 className="tt-heading-title">Brands</h2>
                    </div>
                
                    <ul className="tt-logo-wall cl-col-44 anim-fadeinup">
                        <li><a href="https://1.envato.market/tank" className="cursor-alter" target="_blank" rel="noopener"><img src="assets/img/clients/client-1.png" alt="Client"/></a></li>
                        <li><a href="https://1.envato.market/tank" className="cursor-alter" target="_blank" rel="noopener"><img src="assets/img/clients/client-2.png" alt="Client"/></a></li>
                        <li><a href="https://1.envato.market/tank" className="cursor-alter" target="_blank" rel="noopener"><img src="assets/img/clients/client-3.png" alt="Client"/></a></li>
                        <li><a href="https://1.envato.market/tank" className="cursor-alter" target="_blank" rel="noopener"><img src="assets/img/clients/client-4.png" alt="Client"/></a></li>
                        <li><a href="https://1.envato.market/tank" className="cursor-alter" target="_blank" rel="noopener"><img src="assets/img/clients/client-5.png" alt="Client"/></a></li>
                        <li><a href="https://1.envato.market/tank" className="cursor-alter" target="_blank" rel="noopener"><img src="assets/img/clients/client-6.png" alt="Client"/></a></li>
                        <li><a href="https://1.envato.market/tank" className="cursor-alter" target="_blank" rel="noopener"><img src="assets/img/clients/client-7.png" alt="Client"/></a></li>
                        <li><a href="https://1.envato.market/tank" className="cursor-alter" target="_blank" rel="noopener"><img src="assets/img/clients/client-8.png" alt="Client"/></a></li>
                        <li><a href="https://1.envato.market/tank" className="cursor-alter" target="_blank" rel="noopener"><img src="assets/img/clients/client-9.png" alt="Client"/></a></li>
                        <li><a href="https://1.envato.market/tank" className="cursor-alter" target="_blank" rel="noopener"><img src="assets/img/clients/client-10.png" alt="Client"/></a></li>

                    
                        <li><img src="assets/img/clients/client-1.png" alt="Client" /></li>
                    </ul>

                </div>
            </div>

            <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-150">
                <div className="tt-section-inner tt-wrap">


                    <div className="tt-page-nav tt-pn-scroll">
                        <a href="portfolio-grid-modern.html" className="tt-pn-link anim-fadeinup">
                            <div className="tt-pn-title">Portfolio</div>
                            <div className="tt-pn-hover-title">Portfolio</div>
                        </a> 

                        <div className="tt-pn-subtitle anim-fadeinup">Selected Works</div>

                        <div className="tt-pn-image">
                            <img src="assets/img/page-header/ph-1.jpg" alt="image"/>
                        </div>
                    </div>

                </div>
            </div>

        </div>  
    </>
  );
}
