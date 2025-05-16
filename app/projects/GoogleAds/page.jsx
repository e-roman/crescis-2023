"use client";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

// Functions
import { initPortfolioGrid } from '@/utils/themeFunctions2';


export default function projectGoogleAds() {

  useEffect(() => { 
    initPortfolioGrid();   
  }, []);
  
  return (
    <>
      <div id="page-header" className="ph-full ph-inline ph-bg-image ph-image-cover-5 ph-content-parallax">
        <div className="page-header-inner tt-wrap-xl padding-lr-xl">
          <div className="ph-image">
            <div className="ph-image-inner">
                  <video
                    className="anim-image-parallax"
                    src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/01.mp4"
                    width={"100%"}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
    
            </div>
          </div>


          <div className="ph-caption">
            <h2 className="ph-caption-title ph-appear">Google</h2>
          </div> 

          <div className="project-info-list">
            <ul>
              <li>
                <div className="pi-list-heading">Client</div>
                <div className="pi-list-cont">Google</div>
              </li>
              <li>
                <div className="pi-list-heading">Year</div>
                <div className="pi-list-cont">2023</div>
              </li>
              <li>
                <div className="pi-list-heading">Role</div>
                  <div className="pi-list-cont">askjjash </div>
              </li>
            </ul>
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




				<div id="page-content">



					<div className="tt-section padding-top-xlg-180 padding-left-sm-3-p padding-right-sm-3-p">

						<div className="tt-section-inner tt-wrap">



							<div className="tt-row">



								<div className="tt-col-lg-4 padding-right-md-5-p">

									<div className="tt-heading text-pink tt-heading-title text-uppercase anim-fadeinup">

										<h2 className="tt-heading-title text-black padding-top-xlg-50">About</h2>

										<h3 className="tt-heading-subtitle text-gray">Subtitle</h3> 

									</div>

								</div>



								<div className="tt-col-lg-8">

									<div className="text-description anim-fadeinup">

										<p>Reach hundreds of millions of people who do shopping related searches on

											Google each day</p>



										<p>Last year Google introduced Discovery ads as a new way to help people

											discover and engage with your brand as they scroll through their favorite

											content. In April, Google made Discovery ads generally available for all

											advertisers globally. For the first time, you can reach up to 2.9 billion

											people as they explore their interests and look for inspiration across

											multiple Google surfaces—all with a single, easy-to-use campaign.</p>



										<p>Working closely with Google Design Team and GPJ, we built the identity and

											developed a complete brand guide, establishing rules for internal & external

											teams to work with the identity and create materials that could express a

											consistent brand image.</p>



										<p>We crafted a series of delightful animated spots, taking Google’s iconic

											primary color palette and evolving it with a new cast of characters, fluid

											transitions and animated environments. On top of developing an entire robust

											and versatile system of visual values, we were tasked with creating

											characters that were true to “Google” – friendly, relatable, flat graphic,

											using solid primary colors, yet with an additional layer of dimension and

											depth within that 2D aesthetic.</p>



										<p>We explored a wide variety of body shapes, skin tones, line and fill

											textures, finally settling on a refreshing and trendy approach, that landed

											us in a more adult and nuanced world, while staying instantly recognizable

											as Google.</p>

									</div>

								</div>



								<div className="tt-btn tt-btn-link anim-fadeinup">

										<a href="dummy-page" data-hover="Explore More">Explore More</a>

									</div> 



							</div>



						</div>

					</div>

					



					<div className="tt-section no-padding-top padding-bottom-xlg-200">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-center">

								<div className="tt-col-lg-11">

									<div className="tt-image anim-fadeinup">
										<figure>
											<video width="100%" autoPlay="false" playsInline muted loop preload="metadata">
											    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/google-da-man2.webm" type="video/webm"/>
											    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/google-da-man.mp4" type="video/mp4"/>
													Your browser does not support the video tag.
											</video>
										</figure>
									</div>

								</div>

							</div>

						</div>

					</div>

					



					<div className="tt-section no-padding-top padding-bottom-xlg-150">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-end">



								<div className="tt-col-lg-6 margin-right-auto padding-bottom-50">

									<div className="tt-image padding-top-md-150">

										<figure>
									<video className="anim-image-parallax anim-fadeinup" autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/02.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/02.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>
										</figure>

									</div>

								</div>



								<div className="tt-col-lg-5 tt-offset-lg-1">

									<div className="tt-image">

										<figure>

									<video className="anim-fadeinup" autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/03.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/03.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>

										</figure>

									</div>

								</div>



							</div>

						</div>

					</div>

					



					<div className="tt-section no-padding-top padding-bottom-xlg-100">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-end">

								<div className="tt-col-lg-8">



									<div className="tt-image">

										<figure>

									<video className="anim-image-parallax anim-fadeinup" autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/06.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/06.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>

										</figure>

									</div>



								</div>

							</div>

						</div>

					</div>

					



					<div className="tt-section no-padding-top padding-bottom-xlg-100">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-end">



								<div className="tt-col-lg-5 margin-right-auto">

									<div className="tt-image">

										<figure>

											<img className="anim-image-parallax anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/04.jpg"

												data-src="projects/google-discovery-ads/04.jpg" / >

										</figure>

									</div>

								</div>



								<div className="tt-col-lg-5 tt-offset-lg-2">

									<div className="tt-image padding-top-md-200">

										<figure>

											<img className="anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/05.jpg"

												data-src="projects/google-discovery-ads/05.jpg" />

										</figure>

									</div>

								</div>



							</div>

						</div>

					</div>

					



					<div className="tt-section no-padding-top padding-bottom-xlg-100">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-start">

								<div className="tt-col-lg-10">



									<div className="tt-image">

										<figure>

									<video className="anim-image-parallax anim-fadeinup" autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/07.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/07.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>

										</figure>

									</div>



								</div>

							</div>

						</div>

					</div>

					





					<div className="tt-section no-padding-top padding-bottom-xlg-100">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-end">



								<div className="tt-col-lg-5 margin-right-auto">

									<div className="tt-image padding-top-md-200">

										<figure>

											<img className="anim-image-parallax anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/08.jpg"

												data-src="projects/google-discovery-ads/08.jpg" />

										</figure>

									</div>

								</div>



								<div className="tt-col-lg-5 tt-offset-lg-2">

									<div className="tt-image">

										<figure>

											<img className="anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/09.jpg"

												data-src="projects/google-discovery-ads/09.jpg" />

										</figure>

									</div>

								</div>



							</div>

						</div>

					</div>

					



					<div className="tt-section no-padding-top padding-bottom-xlg-100">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-end">

								<div className="tt-col-lg-10 margin-auto">



									<div className="tt-image">

										<figure>

									<video className="anim-image-parallax anim-fadeinup" autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/10.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/10.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>

										</figure>

									</div>



								</div>

							</div>

						</div>

					</div>

					



					<div className="tt-section no-padding-top padding-bottom-xlg-100">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-center">



								<div className="tt-col-lg-5 margin-right-auto">

									<div className="tt-image padding-top-md-200">

										<figure>

											<img className="anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/11.jpg"

												data-src="projects/google-discovery-ads/11.jpg" />

										</figure>

									</div>

								</div>



								<div className="tt-col-lg-5">

									<div className="tt-image">

										<figure>

											<img className="anim-image-parallax anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/12.jpg"

												data-src="projects/google-discovery-ads/12.jpg" />

										</figure>

									</div>

								</div>



							</div>

						</div>

					</div>

					



					<div className="tt-section no-padding-top padding-bottom-xlg-100">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-end">



								<div className="tt-col-lg-6">

									<div className="tt-image">

										<figure>

									<video className="anim-fadeinup" autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/13.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/13.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>

										</figure>

									</div>

								</div>



								<div className="tt-col-lg-6">

									<div className="tt-image padding-top-md-200">

										<figure>

									<video className="anim-image-parallax anim-fadeinup" autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/14.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/14.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>

										</figure>

									</div>

								</div>



							</div>

						</div>

					</div>

					



					<div className="tt-section no-padding-top padding-bottom-xlg-100">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-end">

								<div className="tt-col-lg-10 margin-auto">



									<div className="tt-image">

										<figure>

									<video className="anim-fadeinup" autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/15.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/15.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>

										</figure>

									</div>



								</div>

							</div>

						</div>

					</div>

					





					<div className="tt-section no-padding-top padding-bottom-xlg-100">

						<div className="tt-section-inner">

							<div className="tt-row">

								<div className="tt-col-lg-10">



									<div className="tt-image">

										<figure>

									<video className="anim-fadeinup" autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/16.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/16.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>

										</figure>

									</div>



								</div>

							</div>

						</div>

					</div>

					





					<div className="tt-section no-padding-top padding-bottom-xlg-100">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-end">



								<div className="tt-col-lg-6">

									<div className="tt-image">

										<figure>

									<video className="anim-fadeinup" autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/17.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/17.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>

										</figure>

									</div>

								</div>



								<div className="tt-col-lg-6">

									<div className="tt-image padding-top-md-200">

										<figure>

									<video className="anim-fadeinup" autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/18.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/18.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>

										</figure>

									</div>

								</div>



							</div>

						</div>

					</div>

					





					<div className="tt-section no-padding-top padding-bottom-xlg-100">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-end">



								<div className="tt-col-lg-8 margin-auto">

									<div className="tt-image">

										<figure>

											<img className="anim-image-parallax" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/google-discovery-ads/19.jpg"

												data-src="projects/google-discovery-ads/19.jpg" />

										</figure>

									</div>

								</div>



							</div>

						</div>

					</div>

					



				</div>




        <div className="tt-section padding-bottom-xlg-150">
          <div className="tt-section-inner tt-wrap">
            <div className="tt-page-nav tt-pn-scroll">
              <a href={`/projects/Penta`} className="tt-pn-link anim-fadeinup">
                <div className="tt-pn-title">Next Project</div>
                <div className="tt-pn-hover-title">Dreamforce</div>
              </a> 
              <div className="tt-pn-subtitle anim-fadeinup">Explore More</div>

              <div className="tt-pn-image">
                  <video autoPlay loop muted preload="metadata">
                      <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/dreamforce/01.mp4" type="video/mp4" />
                  </video>
              </div>
            </div>
          </div> 
        </div>







    </>
  );
}
