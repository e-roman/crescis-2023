"use client";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

// Functions
import { initPortfolioGrid } from '@/utils/themeFunctions2';


export default function projectTheSandbox() {

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
                    src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-01.mp4"
                    width={"100%"}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
    
            </div>
          </div>


          <div className="ph-caption">
            <h2 className="ph-caption-title ph-appear">The Sandbox</h2>
          </div> 

          <div className="project-info-list">
            <ul>
              <li>
                <div className="pi-list-heading">Client</div>
                <div className="pi-list-cont">The Sandbox</div>
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

										<h2 className="tt-heading-title text-pink padding-top-xlg-50">About</h2>

									</div>

									

								</div>



								<div className="tt-col-lg-8">

									<div className="text-description anim-fadeinup">

										<p>Discover the future of digital real estate with The Sandbox's latest project,

											brought to you by Cresci's Agency.</p>



										<p>We've combined the latest in motion graphics, branding, graphic design,

											typography, illustration, and conceptual storytelling to create a

											revolutionary approach to land sales in the metaverse. A blend of vibrant

											content that immerses you into the thrilling metaverse.Join us on this

											exciting journey!</p>

									</div>

								</div>

							</div> 



						</div> 

					</div>

					

					<div className="tt-section no-padding-top padding-bottom-xlg-50">

						<div className="tt-section-inner">

							<div className="tt-row">

								<div className="tt-col-lg-11 no-padding">

									<div className="tt-image padding-top-md-150">

										<figure style={{"margin-left": "-2px"}}>

									<video autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-02.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-02.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>

										</figure>

									</div>

								</div>

							</div>

						</div>

					</div>

					

					<div className="tt-section no-padding-bottom padding-top-xlg-150">

						<div className="tt-section-inner">

							<div className="tt-row">

								<div className="tt-col-lg-8 margin-auto no-padding">

									<div className="tt-image">

										<figure>

									<video autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-03.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-03.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>

										</figure>

									</div>

								</div>

							</div>

						</div>

					</div>

					

					<div className="tt-section padding-top-xlg-50">

						<div className="tt-section-inner">

							<div className="tt-row">

								<div className="tt-col-lg-12 no-padding">

									<div className="tt-image">

										<figure>

											<img className="anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-04.jpg" data-src="projects/theSandbox/ml-04.jpg"/>

										</figure>

									</div>

								</div>

							</div>

						</div>

					</div>

					

					<div className="tt-section padding-top-xlg-50">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-center">

								<div className="tt-col-lg-10 no-padding">

									<div className="tt-image">

										<figure>

											<img className="anim-image-parallax anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-05.png"

												data-src="projects/theSandbox/ml-05.png"/>

										</figure>

									</div>

								</div>

							</div>

						</div>

					</div>

					

					<div className="tt-section padding-top-xlg-50">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-start">

								<div className="tt-col-lg-4 no-padding">

									<div className="tt-image">

										<figure>

											<img className="anim-image-parallax anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-06.png"

												data-src="projects/theSandbox/ml-06.png"/>

										</figure>

									</div>

								</div>

							</div>

						</div>

					</div>

					

					<div className="tt-section padding-top-xlg-50">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-end">

								<div className="tt-col-lg-7 no-padding">

									<div className="tt-image">

										<figure>

									<video autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-07.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-07.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>

										</figure>

									</div>

								</div>

							</div>

						</div>

					</div>

					

					<div className="tt-section no-padding-top padding-bottom-xlg-200">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-center">

								<div className="tt-col-lg-4 no-padding">

									<div className="tt-image">

										<figure>

									<video autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-08.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-08.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>

										</figure>

									</div>

								</div>

								<div className="tt-col-lg-4 no-padding">

									<div className="tt-image">

										<figure>

									<video autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-09.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-09.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>
										</figure>

									</div>

								</div>

								<div className="tt-col-lg-4 no-padding">

									<div className="tt-image">

										<figure>

									<video autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-10.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-10.mp4" type="video/mp4"/>
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



								<div className="tt-col-lg-8 no-padding">

									<div className="tt-image">

										<figure>

									<video autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-10.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-10.mp4" type="video/mp4"/>
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



								<div className="tt-col-lg-12 no-padding">

									<div className="tt-image">

										<figure>

											<img className="anim-image-parallax anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-11.png"

												data-src="projects/theSandbox/ml-11.png"/>

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

									<video autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-12.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-12.mp4" type="video/mp4"/>
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

								<div className="tt-col-lg-7">

									<div className="tt-image padding-bottom-30">

										<figure>

											<img className="anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-13.png" data-src="projects/theSandbox/ml-13.png"/>

										</figure>

									</div>

								</div>



								<div className="tt-col-lg-3 tt-offset-lg-1 padding-top-xlg-200">

									<div className="tt-image">

										<figure>

											<img className="anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-14.png" data-src="projects/theSandbox/ml-14.png"/>

										</figure>

									</div>

								</div>

							</div>

						</div>

					</div>

					

					<div className="tt-section no-padding-top padding-bottom-xlg-100">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-start">



								<div className="tt-col-lg-12 no-padding">

									<div className="tt-image">

										<figure>

									<video autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-15.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-15.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>

										</figure>

									</div>

								</div>



							</div>

						</div>

					</div>

					

					<div className="tt-section">

						<div className="tt-section-inner tt-wrap">



							<div className="tt-row">



								<div className="tt-col-lg-8">

									<div className="tt-heading text-pink tt-heading-title text-uppercase anim-fadeinup">

										<h2 className="tt-heading-title padding-bottom-xlg-50">NFT NYC<br/>VISUAL CO-CAMPAIGN

										</h2>

									</div>

									



									<div className="text-description anim-fadeinup">

										<p>As a co-campaign, we also participated in NFT NYC, an event in New York City

											focused on non-fungible tokens. We faced the challenge of creating visuals

											that would appeal to potential land buyers and convey the idea of owning a

											piece of the future. We chose to use a combination of vibrant colors,

											futuristic landscapes, and bold typography to create a sense of excitement

											and possibility.</p>

									</div>

								</div>

							</div> 



						</div> 

					</div>

					

					<div className="tt-section no-padding-top padding-bottom-xlg-100">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-start">



								<div className="tt-col-lg-12 no-padding">

									<div className="tt-image">

										<figure>

									<video autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-16b.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-16b.mp4" type="video/mp4"/>
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

									<video autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-17.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-17.mp4" type="video/mp4"/>
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

							<div className="tt-row tt-justify-content-md-start">



								<div className="tt-col-lg-6">

									<div className="tt-image">

										<figure>

									<video autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-18.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-18.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>

										</figure>

									</div>

								</div>



							</div>

						</div>

					</div>

					

					<div className="tt-section no-padding-top padding-bottom-xlg-50">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-end">



								<div className="tt-col-lg-12 no-padding">

									<div className="tt-image">

										<figure>

											<img className="anim-image-parallax anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/mlm-19.png"

												data-src="projects/theSandbox/mlm-19.png"/>

										</figure>

									</div>

								</div>



							</div>

						</div>

					</div>

					

					<div className="tt-section no-padding-top padding-bottom-xlg-100">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-end">



								<div className="tt-col-lg-12 no-padding">

									<div className="tt-image">

										<figure>

											<img className="anim-image-parallax anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-20.png"

												data-src="projects/theSandbox/ml-20.png"/>

										</figure>

									</div>

								</div>



							</div>

						</div>

					</div>

					

					<div className="tt-section no-padding-top padding-bottom-xlg-100">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-between">



								<div className="tt-col-lg-4 tt-offset-lg-1">

									<div className="tt-image">

										<figure>

									<video autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-21.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-21.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>

										</figure>

									</div>

								</div>





								<div className="tt-col-lg-5 padding-top-100">

									<div className="tt-image">

										<figure>

									<video autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-22.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-22.mp4" type="video/mp4"/>
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

							<div className="tt-row tt-justify-content-md-start">



								<div className="tt-col-lg-6">

									<div className="tt-image">

										<figure>
									<video autoPlay playsInline muted loop preload="metadata">
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-23.webm" type="video/webm"/>
									    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-23.mp4" type="video/mp4"/>
											Your browser does not support the video tag.
									</video>
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
              <a href={`/projects/17Sigma`} className="tt-pn-link anim-fadeinup">
                <div className="tt-pn-title">Next Project</div>
                <div className="tt-pn-hover-title">17 Sigma</div>
              </a> 
              <div className="tt-pn-subtitle anim-fadeinup">Explore More</div>

              <div className="tt-pn-image">
                  <video autoPlay loop muted preload="metadata">
                      <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/17sigma/01.mp4" type="video/mp4" />
                  </video>
              </div>
            </div>
          </div> 
        </div>







    </>
  );
}
