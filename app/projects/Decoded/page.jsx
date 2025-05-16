"use client";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";


// Functions
import { initPortfolioGrid } from '@/utils/themeFunctions2';


export default function projectDecoded() {

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
                    src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-01a.mp4"
                    width={"100%"}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
    
            </div>
          </div>


          <div className="ph-caption">
            <h2 className="ph-caption-title ph-appear">Decoded</h2>
          </div> 

          <div className="project-info-list">
            <ul>
              <li>
                <div className="pi-list-heading">Client</div>
                <div className="pi-list-cont">Mercado Libre</div>
              </li>
              <li>
                <div className="pi-list-heading">Year</div>
                <div className="pi-list-cont">2023</div>
              </li>
              <li>
                <div className="pi-list-heading">Role</div>
                  <div className="pi-list-cont">askjjash</div>
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
<h2 className="tt-heading-title text-pink">About</h2>
</div>
</div>
<div className="tt-col-lg-8">
<div className="text-description padding-top-xlg-100 anim-fadeinup">
<p>DECODED</p>
<p>On this occasion, we were summoned by Mercado Libre to develop the visual identity for DECODED 22, a virtual retreat featuring distinguished speakers in the IT and product fields.</p>
<p>Our approach was a minimalistic black and white graphic package inspired by the DECODED 22 motto, which we combined with striking 3D backgrounds to enhance the sense of spatiality and immersion within each talk.</p>
Transcend reality and immerse yourself in this virtual adventure!</div>
</div>
</div>
</div>
</div>
<div className="tt-section no-padding-bottom padding-bottom-xlg-100">
<div className="tt-section-inner">
<div className="tt-row tt-justify-content-center">
<div className="tt-col-lg-6 padding-bottom-50">
<div className="tt-image"><video className="anim-fadeinup" preload="metadata" autoPlay loop="loop" muted width="300" height="150">
 <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-02.webm" type="video/webm" />
 <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-02.mp4" type="video/mp4" />
Your browser does not support the video tag.
</video></div>
</div>
<div className="tt-col-lg-6">
<div className="tt-image">
<figure><img className="anim-image-parallax anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-03.png" alt="" data-src="projects/decoded/decoded-03.png" /></figure>
</div>
</div>
</div>
</div>
</div>
<div className="tt-section padding-bottom-xlg-150">
<div className="tt-section-inner">
<div className="tt-row">
<div className="tt-image image-float-1">
<figure><img className="anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-04.png" alt="" data-src="projects/decoded/decoded-04.png" /></figure>
</div>
<div className="tt-col-lg-9 tt-offset-lg-3">
<div className="tt-image">
<figure><img className="anim-image-parallax anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-05.png" alt="" data-src="projects/decoded/decoded-05.png" /></figure>
</div>
</div>
</div>
</div>
</div>
<div className="tt-section no-padding">
<div className="tt-section-inner">
<div className="tt-row">
<div className="tt-col-lg-12 no-padding">
<div className="tt-image">
<figure><video preload="metadata" autoPlay loop="loop" muted width="300" height="150">
 <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-06.webm" type="video/webm" />
 <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-06.mp4" type="video/mp4" />
Your browser does not support the video tag.
</video></figure>
</div>
</div>
</div>
</div>
</div>
<div className="tt-section">
<div className="tt-section-inner">
<div className="tt-row tt-justify-content-end">
<div className="tt-col-7 tt-col-lg-4">
<div className="tt-image image-float-3">
<figure><img className="anim-image-parallax anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-07.png" alt="" data-src="projects/decoded/decoded-07.png" /></figure>
</div>
</div>
</div>
<div className="tt-row tt-justify-content-end">
<div className="tt-col-lg-9">
<div className="tt-image">
<figure><video className="anim-fadeinup" preload="metadata" autoPlay loop="loop" muted width="300" height="150">
 <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-08.webm" type="video/webm" />
 <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-08.mp4" type="video/mp4" />
Your browser does not support the video tag.
</video></figure>
</div>
</div>
</div>
</div>
</div>
<div className="tt-section no-padding" style={{"background-color": "#e4e4e4;"}}>
<div className="tt-section-inner">
<div className="tt-row tt-justify-content-md-center">
<div className="tt-col-lg-12 no-padding">
<div className="tt-image">
<figure><img className="anim-image-parallax anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-09.jpg" alt="" data-src="projects/decoded/decoded-09.jpg" /></figure>
</div>
</div>
</div>
</div>
</div>
<div className="tt-section padding-top-xlg-150">
<div className="tt-section-inner">
<div className="tt-row tt-justify-content-md-center">
<div className="tt-col-lg-10">
<div className="tt-image padding-bottom-xlg-100">
<figure><video className="anim-fadeinup" preload="metadata" autoPlay loop="loop" muted width="300" height="150">
 <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-10.webm" type="video/webm" />
 <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-10.mp4" type="video/mp4" />
Your browser does not support the video tag.
</video></figure>
</div>
</div>
</div>
</div>
</div>
<div className="tt-section">
<div className="tt-section-inner">
<div className="tt-row tt-justify-content-md-start">
<div className="tt-col-lg-8">
<div className="tt-image">
<figure><img className="anim-image-parallax anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-11a.png" alt="" data-src="projects/decoded/decoded-11a.png" /></figure>
</div>
<div className="tt-image">
<figure className="image-float-4"><video className="anim-fadeinup" preload="metadata" autoPlay loop="loop" muted width="300" height="150">
 <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-12.webm" type="video/webm" />
 <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-12.mp4" type="video/mp4" />
Your browser does not support the video tag.
</video></figure>
</div>
</div>
</div>
</div>
</div>
<div className="tt-section">
<div className="tt-section-inner">
<div className="tt-row tt-justify-content-md-end">
<div className="tt-col-lg-9">
<div className="tt-image padding-bottom-xlg-100">
<figure><img className="anim-image-parallax anim-fadeinup" src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-13.png" alt="" data-src="projects/decoded/decoded-13.png" /></figure>
</div>
</div>
</div>
</div>
</div>
</div>




        <div className="tt-section padding-bottom-xlg-150">
          <div className="tt-section-inner tt-wrap">
            <div className="tt-page-nav tt-pn-scroll">
              <a href={`/projects/TheSandbox`} className="tt-pn-link anim-fadeinup">
                <div className="tt-pn-title">Next Project</div>
                <div className="tt-pn-hover-title">The Sandbox</div>
              </a> 
              <div className="tt-pn-subtitle anim-fadeinup">Explore More</div>

              <div className="tt-pn-image">
                {/* <img src={project.nextImage} alt="next project" /> */}
                  <video autoPlay loop muted preload="metadata">
                      <source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-01.mp4" type="video/mp4" />
                  </video>
              </div>
            </div>
          </div> 
        </div>




    </>
  );
}
