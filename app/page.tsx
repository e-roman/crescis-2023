/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect } from "react";
import Image from "next/image";

// Functions
import { initScrollingText, initTitleHoverProjects } from '@/utils/themeFunctions';
import { initPortfolioGrid } from '@/utils/themeFunctions2';


import {
    initAccordion
  } from "@/utils/FunctionsAccordion";
  
import {
  initPortfolioSlider,
  initPortfolioCarousel,
  initContentCarousel,
  initTestimonialsSlider
} from "@/utils/FunctionsSwipers";

export default function Home() {
  useEffect(() => {
    initPortfolioSlider();
    initPortfolioCarousel();
    initContentCarousel();      
    initTestimonialsSlider();
    initAccordion();
    initScrollingText();       
    initTitleHoverProjects();   
    initPortfolioGrid();    
  }, []);

  return (
    <>
      <div id="page-header" className="ph-full ph-cap-sm ph-image-cropped ph-image-cover-3 ph-content-parallax">
        <div className="page-header-inner tt-wrap">
            <div className="ph-image">
            <div className="ph-image-inner">
                <Image
                src="/assets/img/portfolio/wsl_website.jpg"
                alt="Logo"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="/assets/img/portfolio/wsl_website.jpg"
                />
            </div>
            </div>
        
            <div className="ph-caption max-width-1000">
                <h1 className="ph-caption-title ph-appear font-normal"><em>Hello stranger!</em><br/> We are a creative design agency based in Melbourne. We bring your <em><u>ideas</u></em> to life.</h1>
                <div className="ph-caption-title-ghost ph-appear">Hello!</div>
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



    <div className="tt-section no-padding-bottom">
							<div className="tt-section-inner">
								<div className="tt-heading tt-heading-lg tt-heading-center margin-bottom-10-p anim-fadeinup">
									<h3 className="tt-heading-subtitle text-gray">Latest Projects</h3>
									<h2 className="tt-heading-title">Works</h2>
									<div className="tt-btn tt-btn-link margin-top-20">
										<a href="portfolio-grid-creative-1.html" data-hover="See All Works">See All Works</a>
									</div>
								</div>
								{/*End tt-Heading */}

								<div id="portfolio-grid" className="pgi-cap-inside pgi-hover">


									<div className="tt-grid ttgr-layout-creative-2 ttgr-not-cropped ttgr-gap-4">

										{/*Begin tt-Grid items wrap */}
										<div className="tt-grid-items-wrap isotope-items-wrap">


											{/*Begin tt-Grid item*/}
											<div className="tt-grid-item isotope-item people">
												<div className="ttgr-item-inner">

													{/*Begin portfolio grid item */}
													<div className="portfolio-grid-item">
														<a href="single-project-1.html" className="pgi-image-wrap" data-cursor="View Project">
															<div className="pgi-image-holder cover-opacity-2">
																<div className="pgi-image-inner anim-zoomin">
																	<figure className="pgi-image ttgr-height">
																		<img src="/assets/img/portfolio/portfolio-1.jpg" alt="image" />
																	</figure> {/*/.pgi-image */}
																</div> {/*/.pgi-image-inner */}
															</div> {/*/.pgi-image-holder */}
														</a> {/*/.pgi-image-wrap */}

														<div className="pgi-caption">
															<div className="pgi-caption-inner">
																<h2 className="pgi-title">Victorian Girls</h2>
																<div className="pgi-categories-wrap">
																	<div className="pgi-category">People</div>
																	{/*<div className="pgi-category">Varia</div> */}
																</div> {/*/.pli-categories-wrap */}
															</div> {/*/.pgi-caption-inner */}
														</div> {/*/.pgi-caption */}
													</div>
													{/*End portfolio grid item */}

												</div> {/*/.ttgr-item-inner */}
											</div>
											{/*End tt-Grid item */}


											{/*Begin tt-Grid item*/}
											<div className="tt-grid-item isotope-item creative">
												<div className="ttgr-item-inner">


													<div className="portfolio-grid-item anim-parallax">
														<a href="single-project-2.html" className="pgi-image-wrap" data-cursor="View Project">
															<div className="pgi-image-holder cover-opacity-2">
																<div className="pgi-image-inner anim-zoomin">
																	<figure className="pgi-image ttgr-height">
																		<img src="/assets/img/portfolio/portfolio-2.jpg" alt="image" />
																	</figure> {/*/.pgi-image */}
																</div> {/*/.pgi-image-inner */}
															</div> {/*/.pgi-image-holder */}
														</a> {/*/.pgi-image-wrap */}

														<div className="pgi-caption">
															<div className="pgi-caption-inner">
																<h2 className="pgi-title">Smithy</h2>
																<div className="pgi-categories-wrap">
																	<div className="pgi-category">Creative</div>
																	{/*<div className="pgi-category">Varia</div> */}
																</div> {/*/.pli-categories-wrap */}
															</div> {/*/.pgi-caption-inner */}
														</div> {/*/.pgi-caption */}
													</div>
													{/*End portfolio grid item */}

												</div> {/*/.ttgr-item-inner */}
											</div>
											{/*End tt-Grid item */}


											{/*Begin tt-Grid item*/}
											<div className="tt-grid-item isotope-item people">
												<div className="ttgr-item-inner">

													{/*Begin portfolio grid item  */}
													<div className="portfolio-grid-item">
														<a href="single-project-3.html" className="pgi-image-wrap" data-cursor="View Project">
															<div className="pgi-image-holder cover-opacity-2">
																<div className="pgi-image-inner anim-zoomin">
																	<figure className="pgi-video-wrap ttgr-height">
																		<video className="pgi-video" loop muted preload="metadata" poster="assets/vids/fashion-week.jpg">
																			<source src="/assets/vids/fashion-week.mp4" type="video/mp4" />
																			<source src="/assets/vids/fashion-week.webm" type="video/webm" />
																		</video>
																	</figure> {/*/.pgi-video-wrap */}
																</div> {/*/.pgi-image-inner */}
															</div> {/*/.pgi-image-holder */}
														</a> {/*/.pgi-image-wrap */}

														<div className="pgi-caption">
															<div className="pgi-caption-inner">
																<h2 className="pgi-title">Washion Week</h2>
																<div className="pgi-categories-wrap">
																	<div className="pgi-category">People</div>
																	{/*<div className="pgi-category">Varia</div> */}
																</div> {/*/.pli-categories-wrap */}
															</div> {/*/.pgi-caption-inner */}
														</div> {/*/.pgi-caption */}
													</div>
													{/*End portfolio grid item */}

												</div> {/*/.ttgr-item-inner */}
											</div>
											{/*End tt-Grid item */}


											{/*Begin tt-Grid item*/}
											<div className="tt-grid-item isotope-item nature">
												<div className="ttgr-item-inner">

													{/*Begin portfolio grid item  */}
													<div className="portfolio-grid-item">
														<a href="single-project-4.html" className="pgi-image-wrap" data-cursor="View Project">
															<div className="pgi-image-holder cover-opacity-2">
																<div className="pgi-image-inner anim-zoomin">
																	<figure className="pgi-image ttgr-height">
																		<img src="/assets/img/portfolio/portfolio-3.jpg" alt="image" />
																	</figure> {/*/.pgi-image */}
																</div> {/*/.pgi-image-inner */}
															</div> {/*/.pgi-image-holder */}
														</a> {/*/.pgi-image-wrap */}

														<div className="pgi-caption">
															<div className="pgi-caption-inner">
																<h2 className="pgi-title">Mystery Forest</h2>
																<div className="pgi-categories-wrap">
																	<div className="pgi-category">Nature</div>
																	{/*<div className="pgi-category">Varia</div> */}
																</div> {/*/.pli-categories-wrap */}
															</div> {/*/.pgi-caption-inner */}
														</div> {/*/.pgi-caption */}
													</div>
													{/*End portfolio grid item */}

												</div> {/*/.ttgr-item-inner */}
											</div>
											{/*End tt-Grid item */}

										</div>
										{/*End tt-Grid items wrap  */}

									</div>
									{/*End tt-Grid */}

								</div>
								{/*End portfolio grid */}

							</div> {/*/.tt-section-inner */}
						</div>








            <div className="tt-section padding-bottom-xlg-150">
							<div className="tt-section-inner tt-wrap">

								<div className="tt-heading tt-heading-center tt-heading-lg margin-bottom-10-p anim-fadeinup">
									<h3 className="tt-heading-subtitle text-gray">Latest Projects</h3>
									<h2 className="tt-heading-title">Works</h2>
									<div className="tt-btn tt-btn-link margin-top-20">
										<a href="portfolio-interactive-compact.html" data-hover="See All Works">See All Works</a>
									</div>
								</div>
								{/*}End tt-Heading */}

								<div className="portfolio-interactive pi-borders pi-compact pi-force-scroll">

									{/*}Begin portfolio interactive item 
									====================================== 
									* Adjust the "data-scroll-speed" attribute to find a suitable scrolling speed (no effect on mobile devices!).
									 */}
									<div className="portfolio-interactive-item anim-skewinup" data-scroll-speed="3">
										<a href="single-project-1.html" className="pi-item-title-link">
											<h2 className="pi-item-title">Victorian Girls</h2>
											<div className="pi-item-hover-title">Victorian Girls</div>
										</a>
										<div className="pi-item-category-wrap">
											<div className="pi-item-category">People</div>
											<div className="pi-item-category">Varia</div>
										</div>
										<figure className="pi-item-image cover-opacity-2">
											<img src="/assets/img/portfolio/portfolio-1.jpg" alt="image" />
										</figure>
									</div>
									{/*}End portfolio interactive item */}

									{/*}Begin portfolio interactive item 
									====================================== 
									* Adjust the "data-scroll-speed" attribute to find a suitable scrolling speed (no effect on mobile devices!).
									 */}
									<div className="portfolio-interactive-item anim-skewinup" data-scroll-speed="2">
										<a href="single-project-2.html" className="pi-item-title-link">
											<h2 className="pi-item-title">Smithy</h2>
											<div className="pi-item-hover-title">Smithy</div>
										</a>
										<div className="pi-item-category-wrap">
											<div className="pi-item-category">Creative</div>
											<div className="pi-item-category">Varia</div>
										</div>
										<figure className="pi-item-image cover-opacity-2">
											<img src="/assets/img/portfolio/portfolio-2.jpg" alt="image" />
										</figure>
									</div>
									{/*}End portfolio interactive item */}

									{/*}Begin portfolio interactive item 
									====================================== 
									* Adjust the "data-scroll-speed" attribute to find a suitable scrolling speed (no effect on mobile devices!).
									 */}
									<div className="portfolio-interactive-item anim-skewinup" data-scroll-speed="3">
										<a href="single-project-3.html" className="pi-item-title-link">
											<h2 className="pi-item-title">Fashion Week</h2>
											<div className="pi-item-hover-title">Fashion Week</div>
										</a>
										<div className="pi-item-category-wrap">
											<div className="pi-item-category">People</div>
											<div className="pi-item-category">Varia</div>
										</div>
										<figure className="pi-item-image cover-opacity-2">
											<video className="pi-item-video" loop muted preload="metadata" poster="assets/vids/fashion-week.jpg">
												<source src="/assets/vids/fashion-week.mp4" type="video/mp4" />
												<source src="/assets/vids/fashion-week.webm" type="video/webm" />
											</video>
										</figure>
									</div>
									{/*}End portfolio interactive item */}

									{/*}Begin portfolio interactive item 
									====================================== 
									* Adjust the "data-scroll-speed" attribute to find a suitable scrolling speed (no effect on mobile devices!).
									 */}
									<div className="portfolio-interactive-item anim-skewinup" data-scroll-speed="3">
										<a href="single-project-4.html" className="pi-item-title-link">
											<h2 className="pi-item-title">Mystery Forest</h2>
											<div className="pi-item-hover-title">Mystery Forest</div>
										</a>
										<div className="pi-item-category-wrap">
											<div className="pi-item-category">Nature</div>
											<div className="pi-item-category">Varia</div>
										</div>
										<figure className="pi-item-image cover-opacity-2">
											<img src="/assets/img/portfolio/portfolio-3.jpg" alt="image" />
										</figure>
									</div>
									{/*}End portfolio interactive item */}

									{/*}Begin portfolio interactive item 
									====================================== 
									* Adjust the "data-scroll-speed" attribute to find a suitable scrolling speed (no effect on mobile devices!).
									 */}
									<div className="portfolio-interactive-item anim-skewinup" data-scroll-speed="3">
										<a href="single-project-5.html" className="pi-item-title-link">
											<h2 className="pi-item-title">Red Package</h2>
											<div className="pi-item-hover-title">Red Package</div>
										</a>
										<div className="pi-item-category-wrap">
											<div className="pi-item-category">Branding</div>
											<div className="pi-item-category">Varia</div>
										</div>
										<figure className="pi-item-image cover-opacity-2">
											<img src="/assets/img/portfolio/portfolio-4.jpg" alt="image" />
										</figure>
									</div>
									{/*}End portfolio interactive item */}

								</div>
								{/*}End portfolio interactive */}

							</div> {/*}/.tt-section-inner */}
						</div>
						{/*}End tt-section */}



						<div className="tt-section padding-top-xlg-150 padding-bottom-xlg-100 padding-left-sm-3-p padding-right-sm-3-p bg-white-accent-3">
							<div className="tt-section-inner">

								<div className="tt-testimonials-slider ts-full-width text-center cursor-drag ts-scale-down ts-hide-navigation anim-fadeinup" data-loop="true" data-simulate-touch="true" data-speed="900">

									{/*}Begin swiper container */}
									<div className="swiper">

										{/*}Begin swiper wrapper (required) */}
										<div className="swiper-wrapper">

											{/*}Begin swiper slide 
											======================== */}
											<div className="swiper-slide font-alter">
												<div className="tt-ts-item">
													<div className="tt-ts-text">
														"One of the best template I've ever had. I love it! It's fully customizable, well coded, fast and responsive - fitting for all kind of devices."
													</div>
													<div className="tt-ts-subtext">- Wironimo</div>
												</div>
											</div> 
											{/*}End swiper slide */}

											{/*}Begin swiper slide 
											======================== */}
											<div className="swiper-slide font-alter">
												<div className="tt-ts-item">
													<div className="tt-ts-text">
														"Brilliant template. Tons of options, many concepts, design flexibility, code quality, explanatory comments in each section for easy styling."
													</div>
													<div className="tt-ts-subtext">- Gneto</div>
												</div>
											</div>
											{/*}End swiper slide */}

											{/*}Begin swiper slide 
											======================== */}
											<div className="swiper-slide font-alter">
												<div className="tt-ts-item">
													<div className="tt-ts-text">
														"Easy to customize, plenty of choices to display your portfolio, fast loading times. Excellent support."
													</div>
													<div className="tt-ts-subtext">- Brendak</div>
												</div>
											</div>
											{/*}End swiper slide */}

											{/*}Begin swiper slide 
											======================== */}
											<div className="swiper-slide font-alter">
												<div className="tt-ts-item">
													<div className="tt-ts-text">
														"Very nice design and well organised and commented code. Also good customer service."
													</div>
													<div className="tt-ts-subtext">- Gazzzzz</div>
												</div>
											</div> 
											{/*}End swiper slide */}

											{/*}Begin swiper slide 
											======================== */}
											<div className="swiper-slide font-alter">
												<div className="tt-ts-item">
													<div className="tt-ts-text">
														"I founded a bug on Iphone and Ipad and the author fixed very quickly. I appreciated his efforts and his quickness in solving the problem."
													</div>
													<div className="tt-ts-subtext">- Admanente</div>
												</div>
											</div> 
											{/*}End swiper slide */}

										</div>
										{/*}End swiper wrapper */}

									</div>
									{/*}End swiper container */}

									{/*}Testimonials slider navigation (arrows) */}
									<div className="tt-ts-nav-prev">
										<div className="tt-ts-nav-arrow magnetic-item"></div>
									</div>
									<div className="tt-ts-nav-next">
										<div className="tt-ts-nav-arrow magnetic-item"></div>
									</div>

									{/*}Testimonials slider pagination */}
									<div className="tt-ts-pagination hide-cursor"></div>

								</div>
								{/*}End testimonials slider */}

							</div> {/*}/.tt-section-inner */}
						</div>
						{/*}End tt-section */}





        {/*Acorrdion */}
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


        {/*Slider Testimonials*/}
        <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-100 padding-left-sm-3-p padding-right-sm-3-p bg-white-accent-3">
          <div className="tt-section-inner">
          
            <div className="tt-testimonials-slider ts-full-width text-center cursor-drag ts-scale-down ts-hide-navigation anim-fadeinup" data-loop="true" data-simulate-touch="true" data-speed="900">

              {/* Begin swiper container */}
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
                  {/* End swiper slide */}

                  <div className="swiper-slide font-alter">
                    <div className="tt-ts-item">
                      <div className="tt-ts-text">
                        "Brilliant template. Tons of options, many concepts, design flexibility, code quality, explanatory comments in each section for easy styling."
                      </div>
                      <div className="tt-ts-subtext">- Gneto</div>
                    </div>
                  </div>
                  {/* End swiper slide */}

                  <div className="swiper-slide font-alter">
                    <div className="tt-ts-item">
                      <div className="tt-ts-text">
                        "Easy to customize, plenty of choices to display your portfolio, fast loading times. Excellent support."
                      </div>
                      <div className="tt-ts-subtext">- Brendak</div>
                    </div>
                  </div>
                  {/* End swiper slide */}

                  <div className="swiper-slide font-alter">
                    <div className="tt-ts-item">
                      <div className="tt-ts-text">
                        "Very nice design and well organised and commented code. Also good customer service."
                      </div>
                      <div className="tt-ts-subtext">- Gazzzzz</div>
                    </div>
                  </div> 
                  {/* End swiper slide */}

                  <div className="swiper-slide font-alter">
                    <div className="tt-ts-item">
                      <div className="tt-ts-text">
                        "I founded a bug on Iphone and Ipad and the author fixed very quickly. I appreciated his efforts and his quickness in solving the problem."
                      </div>
                      <div className="tt-ts-subtext">- Admanente</div>
                    </div>
                  </div> 
                  {/* End swiper slide */}

                </div>
                {/* End swiper wrapper */}

              </div>
              {/* End swiper container */}

              {/* Testimonials slider navigation (arrows) */}
              <div className="tt-ts-nav-prev">
                <div className="tt-ts-nav-arrow magnetic-item"></div>
              </div>
              <div className="tt-ts-nav-next">
                <div className="tt-ts-nav-arrow magnetic-item"></div>
              </div>

              {/* Testimonials slider pagination */}
              <div className="tt-ts-pagination hide-cursor"></div>

            </div>
            {/* End testimonials slider */}

          </div> {/* /.tt-section-inner */}
        </div>


        {/*Scrolling Text*/}
        <div className="tt-section padding-top-xlg-120 padding-bottom-xlg-150">
          <div className="tt-section-inner">

            <div className="tt-scrolling-text scr-text-stroke font-italic anim-fadeinup" data-scroll-speed="15">
              <div className="tt-scrolling-text-inner text-dark-3" data-text="Let's create something awesome together! -">
                Let's create something awesome together! -
              </div>
            </div>

            <div className="tt-scrolling-text scr-text-stroke scr-text-reverse font-italic anim-fadeinup" data-scroll-speed="15">
              <div className="tt-scrolling-text-inner text-dark-3" data-text="Let's create something awesome together! -">
                Let's create something awesome together! -
              </div> 
            </div>

          </div>
        </div>


    </div>{/* Page Content */}
  </>
  );
}
