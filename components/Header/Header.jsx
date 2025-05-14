"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { initMainMenu, initMobileMenu, initOverlayMenu } from "@/utils/FunctionsNavsite";

export default function Header() {
  useEffect(() => {
    initMainMenu();
    initMobileMenu();
    initOverlayMenu();
  }, []);

  return (
    <header id="tt-header" className="tt-header-fixed">
      <div className="tt-header-inner">
        <div className="tt-header-col">
          <div className="tt-logo">
            <Link href="/">
              <img src="/assets/img/logo-light.png" className="tt-logo-light magnetic-item" alt="Logo" />
              <img src="/assets/img/logo-dark.png"  className="tt-logo-dark  magnetic-item" alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="tt-header-col">
          <div id="tt-ol-menu-toggle-btn-wrap">
            <div className="tt-ol-menu-toggle-btn-text">
              <span className="text-menu" data-hover="Open">Menu</span>
              <span className="text-close">Close</span>
            </div>
            <div className="tt-ol-menu-toggle-btn-holder">
              <a href="#" className="tt-ol-menu-toggle-btn magnetic-item"> <span /> </a>
            </div>
          </div>
          <nav className="tt-overlay-menu tt-ol-menu-center tt-ol-menu-count">
            <div className="tt-ol-menu-holder">
              <div className="tt-ol-menu-inner tt-wrap-xl">
                <div className="tt-ol-menu-content">
                  <ul className="tt-ol-menu-list">
                  {[
                      { href: "/", label: "Home" },
                      { href: "/projects", label: "Projects" },
                      { href: "/about", label: "Who we Are" },
                      { href: "/expertise", label: "Expertise" },
                    ].map(item => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            // Acá podés poner tu animación de cierre si querés
                            setTimeout(() => {
                              window.location.href = item.href;
                            }, 600);
                          }}
                        >
                          <span>{item.label}</span>
                          <span className="arrow-navlink"><svg width="70" height="48" viewBox="0 0 70 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5568 19.9733L13.781 21.4372L13.1364 19.8516L16.0516 18.7206L28.5508 6.50449L22.5777 0.666679L0 22.7329L0 25.4675L22.3726 47.3333L28.3457 41.4955L16.0516 29.4799L13.1364 28.3488L13.781 26.7632L17.5568 28.2271L70 28.0768V19.8194L17.5568 19.9697V19.9733Z" fill="#FFB2C7"></path></svg></span> 
                        </a>
                      </li>
                    ))}

                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-noise" />
          </nav>
        </div>
      </div>
    </header>
  );
}
