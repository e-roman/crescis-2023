"use client";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

// Functions
import { initPortfolioGrid } from '@/utils/themeFunctions2';


export default function projectPenta() {

  useEffect(() => { 
    initPortfolioGrid();   
  }, []);
  
  return (
    <>
      <div id="page-header" className="ph-full ph-inline ph-bg-image ph-image-cover-3 ph-content-parallax">
        <div className="page-header-inner tt-wrap-xl padding-lr-xl">
          <div className="ph-image">
            <div className="ph-image-inner">
                  <video
                    src="https://d2s90tzqqa0vkb.cloudfront.net/projects/penta/penta-01-1-c.mp4"
                    width={"100%"}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
    
            </div>
          </div>


          <div className="ph-caption">
            <h2 className="ph-caption-title ph-appear">Penta</h2>
          </div> 

          <div className="project-info-list">
            <ul>
              <li>
                <div className="pi-list-heading">Client</div>
                <div className="pi-list-cont">Penta</div>
              </li>
              <li>
                <div className="pi-list-heading">Year</div>
                <div className="pi-list-cont">2023</div>
              </li>
              <li>
                <div className="pi-list-heading">Role</div>
                  <div className="pi-list-cont">STRATEGY </div>
				  <div className="pi-list-cont">BRANDING </div>
				  <div className="pi-list-cont">ANIMATION </div>
              </li>
            </ul>
          </div>
        </div>


      </div>




				<div id="page-content">

					<div className="tt-section padding-top-xlg-180 padding-left-sm-3-p padding-right-sm-3-p">

						<div className="tt-section-inner tt-wrap">



							<div className="tt-row">



								<div className="tt-col-lg-4 padding-right-md-5-p">

									<div className="tt-heading text-pink tt-heading-title text-uppercase anim-fadeinup">

										<h2 className="text-black">About</h2>

									</div>

									

								</div>



								<div className="tt-col-lg-8">

									<div className="text-description padding-top-xlg-100 anim-fadeinup">

										<p>PENTA REBRANDING</p>



										<p>Penta is a German fintech that combines technology, user experience design

											and sophistication. The challenge was to create a brand with the right

											sensibility to reflect the company's values, while still respectful of its

											position in the banking industry.This brandbook defines the company's values

											and establishes a coherent identity. We designed a complete system

											comprising of all communication elements, from the payment cards to a whole

											communication system.</p>



										<p>We invite you to explore this branding which is undoubtedly one of the

											agency's highlights.</p>

									</div>

								</div>



							</div>



						</div>

					</div>

					



					<div className="tt-section no-padding-bottom padding-bottom-xlg-0">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-center">



								<div className="tt-col-lg-5 margin-right-auto padding-bottom-50">

									<div className="tt-image">

										<figure>

											<img className="anim-image-parallax" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/penta/penta-02-v2.png"

												data-src="projects/penta/penta-02-v2.png"

												style={{"background": "rgb(16, 11, 51)"}} />

										</figure>

									</div>

								</div>



								<div className="tt-col-8 tt-col-lg-3 tt-offset-lg-2 padding-top-md-200">

									<div className="tt-image">

										<figure style={{"margin-bottom": "-10px;"}}>

											<img className="anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/penta/penta-03-b.png" data-src="projects/penta/penta-03-b.png"/>

										</figure>

									</div>

								</div>



							</div>

						</div>

					</div>

					



					<div className="tt-section no-padding-bottom padding-top-xlg-30" style={{"background-color": "#0B0233"}}>

						<div className="tt-section-inner">

							<div className="tt-row">

								<div className="tt-col-lg-9 margin-auto">



									<div className="tt-image">

										<figure>

											<img className="anim-fadeinup padding-bottom-xlg-50" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/penta/penta-04-b.png"

												data-src="projects/penta/penta-04-b.png"/>

										</figure>

									</div>



								</div>

							</div>

						</div>

					</div>

					



					<div className="tt-section">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-start">

								<div className="tt-col-lg-10">

									<h5 className="anim-fadeinup">Colour Palette</h5>

									<div className="tt-image padding-bottom-xlg-100">

										<figure>

											<img className="anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/penta/penta-05.png"

												data-src="projects/penta/penta-05.png"/>

										</figure>

									</div>

								</div>



								<div className="tt-col-lg-9 tt-offset-lg-3">

									<div className="tt-image">

										<figure>

											<img className="anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/penta/penta-06-b.jpg" data-src="projects/penta/penta-06-b.jpg" />

										</figure>

									</div>

								</div>

							</div>

						</div>

					</div>

					



					<div className="tt-section no-padding" style={{"background-color": "#e5e6e7"}}>

						<div className="tt-section-inner">

							<div className="tt-row">

								<div className="tt-col-lg-12 margin-auto">



									<div className="tt-image">

										<figure>

											<img className="anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/penta/penta-07-v3.png"

												data-src="projects/penta/penta-07-v3.png"/>

										</figure>

									</div>



								</div>

							</div>

						</div>

					</div>

					



					<div className="tt-section no-padding" style={{"background-color": "#469b49"}}>

						<div className="tt-section-inner">

							<div className="tt-row">

								<div className="tt-col-lg-11 margin-auto">



									<div className="tt-image">

										<figure>

											<img className="anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/penta/penta-08.png"

												data-src="projects/penta/penta-08.png"/>

										</figure>

									</div>



								</div>

							</div>

						</div>

					</div>

					



					<div className="tt-section" style={{"background-color": "#100B33"}}>

						<div className="tt-section-inner">

							<div className="tt-row">

								<div className="tt-col-lg-12 margin-auto">



									<div className="tt-image">

										<figure>

											<img className="anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/penta/penta-09-b.png" data-src="projects/penta/penta-09-b.png"/>

										</figure>

									</div>



								</div>

							</div>

						</div>

					</div>

					



					<div className="tt-section no-padding-top padding-top-xlg-150">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-start">

								<div className="tt-col-lg-8">

									<div className="tt-image tti-fixed-height">

										<figure>

										<video autoPlay playsInline muted loop preload="metadata">
										    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/penta/penta-10.webm" type="video/webm"/>
										    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/penta/penta-10.mp4" type="video/mp4" />
												Your browser does not support the video tag.
										</video>

										</figure>

									</div>

								</div>



								<div className="tt-col-lg-4 margin-right-auto padding-top-md-200">

									<div className="image-float-1">

										<figure>

											<img className="anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/penta/penta-11.png" data-src="projects/penta/penta-11.png"/>

										</figure>

									</div>

								</div>

							</div>

						</div>

					</div>

					



					<div className="tt-section no-padding-top padding-bottom-xlg-100">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-start">



								<div className="tt-col-lg-7">

									<div className="tt-image padding-top-md-50">

										<figure>

										<video autoPlay playsInline muted loop preload="metadata">
										    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/penta/penta-12.webm" type="video/webm"/>
										    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/penta/penta-12.mp4" type="video/mp4" />
												Your browser does not support the video tag.
										</video>

										</figure>

									</div>

								</div>





								<div className="tt-col-lg-4 padding-top-lg-150">

									<div className="image-float-2">

										<figure>

											<img className="anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/penta/penta-13.png" data-src="projects/penta/penta-13.png"/>

										</figure>

									</div>

								</div>



							</div>

						</div>

					</div>

					



					<div className="tt-section no-padding-top padding-top-xlg-100">

						<div className="tt-section-inner">

							<div className="tt-row tt-justify-content-md-start">



								<div className="tt-col-lg-7">

									<div className="tt-image">

										<figure  style={{"background": "#e5e6e7", "padding-bottom": "25px"}}>

											<img className="anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/penta/penta-14.png" data-src="projects/penta/penta-14.png"/>

										</figure>

									</div>

								</div>



							</div>

						</div>

					</div>

					



					<div className="tt-section padding-left-sm-3-p padding-right-sm-3-p">

						<div className="tt-section-inner tt-wrap">



							<div className="tt-row tt-justify-content-md-end">



								<div className="tt-col-lg-8">

									<div className="text-description anim-fadeinup">

										<p>VIDEO MANIFIESTO</p>



										<p>In a time when consumers are overwhelmed by the amount of technology in their

											lives, how can a brand stand out and be noticed?</p>



										<p>Penta's video manifesto was designed to answer that question. We combined all

											the art of the brandbook and through storytelling we came up with the result

											of a video manifesto full of innovation, technology and design.</p>



										<p>Penta's new app was released, and they wanted to make sure that everyone knew

											all the ways it could help them and their business.

											The story in this video was clear and concise so that users could easily

											navigate through it and understand what they needed to do right away.</p>



										<p>We combined all of the brandbook's art and storytelling into one video,

											demonstrating all the functionality of the new app.</p>



									</div>

								</div>



							</div>



						</div>

					</div>

					



					<div className="tt-section no-padding-top padding-bottom-xlg-150">

						<div className="tt-section-inner">

							<div className="tt-row">

								<div className="tt-col-lg-12">

									<div className="tt-image">

										<figure>
											<video width="100%" autoPlay playsInline muted loop preload="metadata">
											    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/penta/penta-manifiesto.webm" type="video/webm"/>
											    <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/penta/penta-manifiesto.mp4" type="video/mp4" />
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
              <a href={`/projects/Decoded`} className="tt-pn-link anim-fadeinup">
                <div className="tt-pn-title">Next Project</div>
                <div className="tt-pn-hover-title">Decoded</div>
              </a> 
              <div className="tt-pn-subtitle anim-fadeinup">Explore More</div>

              <div className="tt-pn-image">
                  <video autoPlay loop muted preload="metadata">
                      <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-01a.mp4" type="video/mp4" />
                  </video>
              </div>
            </div>
          </div> 
        </div>







    </>
  );
}
