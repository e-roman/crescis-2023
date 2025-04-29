"use client";

import { useEffect, useState } from "react"; 
import Link from "next/link";
import Image from "next/image";

import { initMainMenu, initMobileMenu, initOverlayMenu } from '@/utils/FunctionsNavsite';

export default function Header() {
  useEffect(() => { 
    initMainMenu();
    initMobileMenu();
    initOverlayMenu();
  }, []); 

  return (
    <>
      <header id="tt-header" className="tt-header-fixed">
        <div className="tt-header-inner"> 
          <div className="tt-header-col">
            <div className="tt-logo"> 
              <a href="index.html">
                <img src="/assets/img/logo-light.png" className="tt-logo-light magnetic-item" alt="Logo"/> 
                <img src="/assets/img/logo-dark.png" className="tt-logo-dark magnetic-item" alt="Logo"/> 
              </a>
            </div>
          </div> 

          <div className="tt-header-col">
            <div id="tt-ol-menu-toggle-btn-wrap">
              <div className="tt-ol-menu-toggle-btn-text">
                <span className="text-menu" data-hover="Open">Menu</span>
                <span className="text-close">Close</span>
              </div>
              <div className="tt-ol-menu-toggle-btn-holder">
                <a href="#" className="tt-ol-menu-toggle-btn magnetic-item"><span></span></a>
              </div>
            </div>
            <nav className="tt-overlay-menu tt-ol-menu-center tt-ol-menu-count">
              <div className="tt-ol-menu-holder">
                <div className="tt-ol-menu-inner tt-wrap">
                  <div className="tt-ol-menu-content">
                    <ul className="tt-ol-menu-list">
                      <li><a href="#">Single Link</a></li>
                      <li><a href="#">Single Link</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </div> 
                </div> 
              </div> 
              <div className="bg-noise"></div>
            </nav> 
          </div> 
        </div> 
      </header>
    </>
  );
}
