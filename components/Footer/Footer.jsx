"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
return (
  <>
    <footer id="tt-footer">
    <div className="tt-footer-inner">

      <div className="footer-col tt-align-center-left">
        <div className="footer-col-inner">

          <div className="tt-btn tt-btn-link">
            <a href="#" className="scroll-to-top" data-hover="Back to top">Back to top</a>
          </div>

        </div>
      </div>
    
      <div className="footer-col tt-align-center order-m-last">
        <div className="footer-col-inner">

          <div className="tt-copyright">
            © Copyright - <a href="https://themetorium.net" target="_blank" rel="noopener" className="tt-link">Themetorium.net</a>
          </div>

        </div>
      </div>
     
      <div className="footer-col tt-align-center-right">
        <div className="footer-col-inner">

          <div className="footer-social">
            <div className="footer-social-text"><span>Follow</span><i className="fas fa-share-alt"></i></div>
            <div className="social-buttons">
              <ul>
                <li><a href="https://www.facebook.com/themetorium" className="magnetic-item" target="_blank" rel="noopener">Fb.</a></li>
                <li><a href="https://twitter.com/Themetorium" className="magnetic-item" target="_blank" rel="noopener">Tw.</a></li>
                <li><a href="https://www.youtube.com/" className="magnetic-item" target="_blank" rel="noopener">Yt.</a></li>
                <li><a href="https://dribbble.com/Themetorium" className="magnetic-item" target="_blank" rel="noopener">Dr.</a></li>
                <li><a href="https://www.behance.net/Themetorium" className="magnetic-item" target="_blank" rel="noopener">Be.</a></li>
              </ul>
            </div>
          </div>

        </div> 
      </div>


    </div> 
    </footer>
  </>
  );
};

