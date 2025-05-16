"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
return (
  <>
    <footer id="tt-footer">
		<div className="tt-footer-inner padding-bottom-70">
			<div className="footer-col">
				<div className="footer-col-inner">
					<div className="tt-logo-footer anim-fadeinup">
						<a href="/" target="_blank">
							<img src="https://d2s90tzqqa0vkb.cloudfront.net/assets/img/logo.svg" alt="Crescis" />
						</a>
					</div>
				</div>
			</div>
			<div className="footer-col">
				<div className="footer-col-inner">
					<div className="nav-footer">
						<ul className="anim-fadeinup">
							<li className="nav-item"><a href="projects" className="nav-link">PROJECTS</a></li>
							<li className="nav-item"><a href="about" className="nav-link">WHO WE ARE</a></li>
							<li className="nav-item"><a href="contact" className="nav-link">LET’S TALK</a></li>
							<li className="nav-item"><a href="contact" className="nav-link">JOIN US</a></li>
						</ul>
					</div>

					<div className="nav-footer padding-top-xs-100">
						<ul className="anim-fadeinup">
							<li className="nav-item"><a href="https://www.instagram.com/_cresci/" target="_blank" className="nav-link">INSTAGRAM</a></li>
							<li className="nav-item"><a href="https://www.behance.net/_Cresci" target="_blank" className="nav-link">BEHANCE</a></li>
							<li className="nav-item"><a href="https://www.linkedin.com/company/crescimone/" target="_blank" className="nav-link">LINKEDIN</a></li>
							<li className="nav-item"><a href="https://vimeo.com/crescimone" target="_blank" className="nav-link">VIMEO</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div className="tt-footer-inner">
			<div className="footer-col"></div>
			<div className="footer-col">
				<div className="footer-col-inner">
					<div className="members-footer">
						<h5 className="title-members anim-fadeinup">MEMBERS OF</h5>
						<ul className="anim-fadeinup">
							<li><a href="https://www.oneclub.org/" target="_blank"><img src="/images/clients/oneclub.svg" alt="Crescis"/></a></li>
							<li><a href="https://www.oneclub.org/adcawards/" target="_blank"><img src="/images/clients/adc.svg" alt="Crescis"/></a></li>
							<li><a href="https://www.oneclub.org/theoneshow/" target="_blank"><img src="/images/clients/theoneshow.svg" alt="Crescis"/></a></li>
							<li><a href="https://www.oneclub.org/tdcawards/" target="_blank"><img src="/images/clients/tdcawards.svg" alt="Crescis"/></a></li>
						</ul>
					</div> 
				</div>
			</div>
		</div>

		<a href="#" className="scroll-up-circle scroll-to-top display-lg">
			<div className="sdc-inner anim-fadeinup">
				<div className="sdc-icon"><svg className="ion" width="20" height="42" viewBox="0 0 20 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 0H9V40H11V0Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.100586 32L1.5148 30.5858L10.0001 39.0711L18.4854 30.5858L19.8996 32L10.0001 41.8995L0.100586 32Z" fill="white"></path></svg></div>
				<svg viewBox="0 0 500 500"><defs><path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle"></path></defs><text dy="30"><textPath href="#textcircle">Scroll to top - Scroll to top - Scroll to top - </textPath></text></svg>
			</div>
		</a>
	</footer>

	<div id="legal-footer">
		<div className="tt-footer-inner">
			<div className="footer-col tt-align-center-left">
				<div className="footer-col-inner">
					<p>CRESCIS®</p>
				</div>
			</div>
			<div className="footer-col tt-align-center order-m-last">
				<div className="footer-col-inner">
					<div className="tt-copyright">
						<p>CRESCI'S AGENCY 2017 - 2023 © ALL RIGHTS RESERVED</p>
					</div>
				</div>
			</div>
			<div className="footer-col tt-align-center-right">
				<div className="footer-col-inner">
					<ul className="legal-link">
						<li><a href="terms-conditions">TERMS</a></li>
						<li><a href="privacy-policy"> PRIVACY POLICY</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>

  </>
  );
};

