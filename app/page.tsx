

"use client";
import { useEffect } from "react";
import Image from "next/image";


export default function Home() {
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
    </>
        

  );
}
