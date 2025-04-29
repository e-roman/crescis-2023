"use client";
import { useEffect } from "react";
import Image from "next/image";


export default function ProjectDetail() {
  useEffect(() => {
    // Aquí puedes colocar otras inicializaciones que sean necesarias
  }, []);

  return (
    <>
      <div id="page-header" className="ph-full ph-inline ph-bg-image ph-image-shadow ph-image-cover-5 ph-content-parallax">
        <div className="page-header-inner tt-wrap">
          <div className="ph-image">
            <div className="ph-image-inner">
                <Image
                   className="anim-image-parallax"
                    src="/assets/img/portfolio/wsl_website.jpg"
                    alt="Logo"
                    width={1920}
                    height={1080}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // mini imagen base64
                    />
            </div>
          </div>

          <div className="ph-caption">
            <div className="ph-categories ph-appear">
              <div className="ph-category">Nature</div>
              <div className="ph-category">Varia</div>
            </div>

            <h2 className="ph-caption-title ph-appear">Mystery<br className="hide-from-lg"/> Forest</h2> 
            <h4 className="ph-caption-subtitle ph-appear">Subtitle</h4>
          </div> 

          <div className="project-info-list">
            <ul>
              <li>
                <div className="pi-list-heading">Client</div>
                <div className="pi-list-cont">Themetorium</div>
              </li>
              <li>
                <div className="pi-list-heading">Year</div>
                <div className="pi-list-cont">2021</div>
              </li>
              <li>
                <div className="pi-list-heading">Role</div>
                <div className="pi-list-cont">Photography</div> 
              </li>
              <li>
                <div className="pi-list-heading">Website</div>
                <div className="pi-list-cont"><a href="https://themetorium.net" target="_blank" rel="noopener">Visit site<span className="pi-list-icon tt-link"><i className="fas fa-arrow-right"></i></span></a></div>
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

        <div className="made-with-love ph-appear">
          <div className="mwl-inner">
            <div className="mwl-text">Made with</div>
            <div className="mwl-icon"><i className="far fa-heart"></i></div>
          </div>
        </div>

        <div className="ph-share">
          <div className="ph-share-trigger ph-appear">
            <div className="ph-share-text">Share</div>
            <div className="ph-share-icon magnetic-item"><i className="fas fa-share-alt"></i></div>
          </div>

          <div className="ph-share-content">
            <div className="ph-share-close cursor-close"><div className="bg-noise"></div></div>
            <div className="ph-share-inner">
              <h1 className="ph-share-title ph-share-appear">Spread the Word!</h1>
              <div className="ph-share-subtitle ph-share-appear">Share this project with your friends</div>

              <div className="social-buttons ph-share-appear">
                <ul>
                  <li><a href="#0" className="magnetic-item" title="Share on Facebook"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#0" className="magnetic-item" title="Share on Twitter"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#0" className="magnetic-item" title="Share on Pinterest"><i className="fab fa-pinterest"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="ph-share-ghost ph-share-appear">Share</div>
          </div> 
        </div>
      </div>

      <div id="page-content">
        <div className="tt-section padding-top-xlg-180 padding-left-sm-3-p padding-right-sm-3-p">
          <div className="tt-section-inner tt-wrap max-width-1000">
            <div className="anim-fadeinup font-alter text-xxlg text-center">
              <p>Mystery forest rejoices earnest is by. Picture removal attempt way clothes yet demesne tedious. Replying an marianne do it an entrance advanced. Two dare say play when hold.</p>
            </div>
          </div> 
        </div>

        <div className="tt-section">
          <div className="tt-section-inner tt-wrap-xl">
            <div className="tt-image margin-bottom-100">
              <figure>
                   <Image
                   className="anim-image-parallax"
                    src="/assets/img/portfolio/wsl_website.jpg"
                    alt="Logo"
                    width={1920}
                    height={1080}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // mini imagen base64
                    />
                <figcaption>Image Caption</figcaption>
              </figure>
            </div> 
          </div> 
        </div>



        <div className="tt-section">
          <div className="tt-section-inner tt-row">
            <div className="tt-col-6">
                <div className="tt-image margin-bottom-100">
                <figure>
                   <Image
                    className="anim-image-parallax"
                    src="/assets/img/portfolio/wsl_website.jpg"
                    alt="Logo"
                    width={1920}
                    height={1080}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // mini imagen base64
                    />
                    <figcaption>Image Caption</figcaption>
                </figure>
                </div>  
            </div>

            <div className="tt-col-6">
                <div className="tt-image margin-bottom-100">
                <figure>
                   <Image
                   className="anim-image-parallax"
                    src="/assets/img/portfolio/wsl_website.jpg"
                    alt="Logo"
                    width={1920}
                    height={1080}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // mini imagen base64
                    />
                    <figcaption>Image Caption</figcaption>
                </figure>
                </div>  
            </div>
          </div> 
        </div>




        <div className="tt-section padding-bottom-xlg-150">
          <div className="tt-section-inner tt-wrap">
            <div className="tt-page-nav tt-pn-scroll">
              <a href="single-project-5.html" className="tt-pn-link anim-fadeinup">
                <div className="tt-pn-title">Next Project</div>
                <div className="tt-pn-hover-title">Red Package</div>
              </a> 
              <div className="tt-pn-subtitle anim-fadeinup">Explore More</div>

              <div className="tt-pn-image">
                <img src="/assets/img/portfolio/portfolio-4.jpg" alt="image"  />
              </div>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}
