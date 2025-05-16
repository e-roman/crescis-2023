"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";

import dataProjects from "@/data/dataProjects";

// Functions
import { initPortfolioGrid } from '@/utils/themeFunctions2';


export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug;
  const project = dataProjects[slug];

  if (!project) {
    return <div className="padding-top-150 text-center">Project not found.</div>;
  }

  useEffect(() => { 
    initPortfolioGrid();   
  }, []);
  
  return (
    <>
      <div id="page-header" className="ph-full ph-inline ph-bg-image ph-image-cover-5 ph-content-parallax">
        <div className="page-header-inner tt-wrap-xl padding-lr-xl">
        <div className="ph-image">
          <div className="ph-image-inner">
            {/* Imagen o video principal dinámico, usando el primer item del array */}
            {(() => {
              const firstMedia = project.images[0];
              const isVideo = /\.(mp4|webm|ogg)$/i.test(firstMedia);

              return isVideo ? (
                <video
                  className="anim-image-parallax"
                  src={firstMedia}
                  width={1920}
                  height={1080}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <Image
                  className="anim-image-parallax"
                  src={firstMedia}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  // Si tienes un blurDataURL específico, lo puedes incluir
                  placeholder="empty"
                />
              );
            })()}
          </div>
        </div>


          <div className="ph-caption">
            <h2 className="ph-caption-title ph-appear">{project.title}</h2>
          </div> 

          <div className="project-info-list">
            <ul>
              <li>
                <div className="pi-list-heading">Client</div>
                <div className="pi-list-cont">{project.client}</div>
              </li>
              <li>
                <div className="pi-list-heading">Year</div>
                <div className="pi-list-cont">{project.year}</div>
              </li>
              <li>
                <div className="pi-list-heading">Role</div>
                {project.roles.map((role, index) => (
                  <div className="pi-list-cont" key={index}>{role}</div>
                ))}
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
        <div className="tt-section section-detail padding-top-lg-180 padding-bottom-lg-180 padding-left-sm-3-p padding-right-sm-3-p">
          <div className="tt-section-inner tt-row">
            <div className="tt-col-lg-5">
              <div className="anim-fadeinup text-xxlg">
                <h2>ABOUT</h2>
              </div>
            </div>

            <div className="tt-col-lg-5">
              <div className="anim-fadeinup">
                {project.about.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div> 
        </div>

        <div className="tt-section section-detail">
          <div className="tt-section-inner tt-wrap-xl">
            <div className="tt-image">
              <figure>
                {/* Otra imagen fija o puedes usar otra de project.images */}
                <Image
                  className="anim-image-parallax"
                  src={project.images[1]}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  // placeholder="blur"
                  blurDataURL=""
                />
              </figure>
            </div> 
          </div> 
        </div>

        <div className="tt-section section-detail">
          <div className="tt-section-inner tt-row">
            <div className="tt-col-lg-6">
                <div className="tt-image margin-bottom-100">
                  <figure>
                    {/* Otra imagen fija o puedes usar otra de project.images */}
                    <Image
                      className="anim-image-parallax"
                      src={project.images[2]}
                      alt={project.title}
                      width={1920}
                      height={1080}
                      // placeholder="blur"
                      blurDataURL=""
                    />
                  </figure>
                </div>
            </div>

            <div className="tt-col-lg-6">
              <div className="tt-image margin-bottom-100">
                <figure>
                  {/* Otra imagen fija o repetida */}
                  <Image
                    className="anim-image-parallax"
                    src={project.images[3]}
                    alt={project.title}
                    width={1920}
                    height={1080}
                    // placeholder="blur"
                    blurDataURL=""
                  />
                </figure>
              </div>  
            </div>
          </div> 
        </div>



        <div className="tt-section section-detail">
          <div className="tt-section-inner tt-row">
            <div className="tt-col-lg-6">
                <div className="tt-image margin-bottom-100">
                  <figure>
                    {/* Otra imagen fija o puedes usar otra de project.images */}
                    <Image
                      className="anim-image-parallax"
                      src={project.images[4]}
                      alt={project.title}
                      width={1920}
                      height={1080}
                      // placeholder="blur"
                      blurDataURL=""
                    />
                  </figure>
                </div>
            </div>

            <div className="tt-col-lg-6">
              <div className="tt-image margin-bottom-100">
                <figure>
                  {/* Otra imagen fija o repetida */}
                  <Image
                    className="anim-image-parallax"
                    src={project.images[5]}
                    alt={project.title}
                    width={1920}
                    height={1080}
                    // placeholder="blur"
                    blurDataURL=""
                  />
                </figure>
              </div>  
            </div>
          </div> 
        </div>



        <div className="tt-section section-detail">
          <div className="tt-section-inner tt-row">
            <div className="tt-col-lg-6">
                <div className="tt-image margin-bottom-100">
                  <figure>
                    {/* Otra imagen fija o puedes usar otra de project.images */}
                    <Image
                      className="anim-image-parallax"
                      src={project.images[6]}
                      alt={project.title}
                      width={1920}
                      height={1080}
                      // placeholder="blur"
                      blurDataURL=""
                    />
                  </figure>
                </div>
            </div>

            <div className="tt-col-lg-6">
              <div className="tt-image margin-bottom-100">
                <figure>
                  {/* Otra imagen fija o repetida */}
                  <video autoPlay loop muted preload="metadata">
                      <source src={project.images[7]} type="video/mp4" />
                  </video>
                </figure>
              </div>  
            </div>
          </div> 
        </div>


        <div className="tt-section section-detail">
          <div className="tt-section-inner tt-row">
            <div className="tt-col-lg-6">
                <div className="tt-image margin-bottom-100">
                  <figure>
                    {/* Otra imagen fija o puedes usar otra de project.images */}
                    <Image
                      className="anim-image-parallax"
                      src={project.images[8]}
                      alt={project.title}
                      width={1920}
                      height={1080}
                      // placeholder="blur"
                      blurDataURL=""
                    />
                  </figure>
                </div>
            </div>
          </div> 
        </div>





        <div className="tt-section section-detail">
          <div className="tt-section-inner tt-row">
            <div className="tt-col-lg-6">
                <div className="tt-image margin-bottom-100">
                  <figure>
                    {/* Otra imagen fija o puedes usar otra de project.images */}
                    <Image
                      className="anim-image-parallax"
                      src={project.images[10]}
                      alt={project.title}
                      width={1920}
                      height={1080}
                      // placeholder="blur"
                      blurDataURL=""
                    />
                  </figure>
                </div>
            </div>

            <div className="tt-col-lg-6">
              <div className="tt-image margin-bottom-100">
                  <figure>
                    {/* Otra imagen fija o puedes usar otra de project.images */}
                    <Image
                      className="anim-image-parallax"
                      src={project.images[11]}
                      alt={project.title}
                      width={1920}
                      height={1080}
                      // placeholder="blur"
                      blurDataURL=""
                    />
                  </figure>
              </div>  
            </div>
          </div> 
        </div>



        <div className="tt-section section-detail">
          <div className="tt-section-inner tt-row">
            <div className="tt-col-lg-8">
                <div className="tt-image margin-bottom-100">
                  <figure>
                    {/* Otra imagen fija o puedes usar otra de project.images */}
                    <Image
                      className="anim-image-parallax"
                      src={project.images[12]}
                      alt={project.title}
                      width={1920}
                      height={1080}
                      // placeholder="blur"
                      blurDataURL=""
                    />
                  </figure>
                </div>
            </div>

          </div> 
        </div>







        <div className="tt-section section-detail">
          <div className="tt-section-inner tt-row">
            <div className="tt-col-lg-6">
                <div className="tt-image margin-bottom-100">
                  <figure>
                    {/* Otra imagen fija o puedes usar otra de project.images */}
                    <Image
                      className="anim-image-parallax"
                      src={project.images[13]}
                      alt={project.title}
                      width={1920}
                      height={1080}
                      // placeholder="blur"
                      blurDataURL=""
                    />
                  </figure>
                </div>
            </div>

            <div className="tt-col-lg-6">
              <div className="tt-image margin-bottom-100">
                  <figure>
                    {/* Otra imagen fija o puedes usar otra de project.images */}
                    <Image
                      className="anim-image-parallax"
                      src={project.images[14]}
                      alt={project.title}
                      width={1920}
                      height={1080}
                      // placeholder="blur"
                      blurDataURL=""
                    />
                  </figure>
              </div>  
            </div>
          </div> 
        </div>




        <div className="tt-section section-detail">
          <div className="tt-section-inner tt-row">
            <div className="tt-col-lg-11">
              <div className="tt-image margin-bottom-100">
                <figure>
                  {/* Otra imagen fija o repetida */}
                  <video autoPlay loop muted preload="metadata">
                      <source src={project.images[15]} type="video/mp4" />
                  </video>
                </figure>
              </div>  
            </div>
          </div> 
        </div>






        <div className="tt-section padding-bottom-xlg-150">
          <div className="tt-section-inner tt-wrap">
            <div className="tt-page-nav tt-pn-scroll">
              <a href={`/projects/${project.nextSlug}`} className="tt-pn-link anim-fadeinup">
                <div className="tt-pn-title">Next Project</div>
                <div className="tt-pn-hover-title">{project.nextTitle}</div>
              </a> 
              <div className="tt-pn-subtitle anim-fadeinup">Explore More</div>

              <div className="tt-pn-image">
                {/* Aquí usa imagen normal porque es externa o un jpg estático */}
                {/* <img src={project.nextImage} alt="next project" /> */}
                  <video autoPlay loop muted preload="metadata">
                      <source src={project.nextImage} type="video/mp4" />
                  </video>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}
