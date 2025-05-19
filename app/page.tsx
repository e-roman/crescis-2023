/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect } from "react";
import Image from "next/image";

// Functions
import { initTitleHoverProjects, initDraw, initStyleMedia } from '@/utils/themeFunctions';
import { initPortfolioGrid, initPortfolioListEffects } from '@/utils/themeFunctions2';

import { animateSplitTextScroll } from "@/utils/SplitText";


import {
  initPartnersSlider,
} from "@/utils/FunctionsSwipers";

export default function Home() {
  useEffect(() => {
	initDraw();
	initStyleMedia();
	animateSplitTextScroll();
    initPartnersSlider();   
	initPortfolioListEffects();   
    initTitleHoverProjects();   
    initPortfolioGrid();    
  }, []);

  return (
    <>
      <div id="page-header" className="ph-full ph-content-parallax">
        <div className="page-header-inner tt-wrap-xl padding-lr-xl">
            <div className="ph-video-hm">
				<div className="ph-video-inner">
				<video className="pgi-video" loop muted autoPlay preload="metadata">
					<source src="/reel_2023.mp4" type="video/mp4" />
				</video>
				</div>
            </div>
        
            <div className="ph-caption-hm is-hidden">
                <h1 className="ph-caption-title-home split-lines-init not-split-in">DIGITAL BRAND CREATIVES</h1>
            </div> 
        </div> 
      
        <a href="#page-content" className="scroll-down-circle" data-offset="30">
          <div className="sdc-inner ph-appear">
            <div className="sdc-icon"><svg className="ion" width="20" height="42" viewBox="0 0 20 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 0H9V40H11V0Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.100586 32L1.5148 30.5858L10.0001 39.0711L18.4854 30.5858L19.8996 32L10.0001 41.8995L0.100586 32Z" fill="white"></path></svg></div>
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



		<div className="tt-pn-subtitle tt-sub-hero padding-top-150 padding-top-lg-200 margin-top-20-p margin-bottom-10-p padding-bottom-100 padding-bottom-lg-200">
			<div className="tt-col-lg-9 tt-offset-lg-3 position-realative">
				<div className="tt-heading tt-heading-lg">
					<h2 className="tt-heading-title text-uppercase split-lines not-split">We believe in the power of human connection and the ability to bring people together through design</h2>
				</div>

				<div id="draw-on" className="draw-on intiDraw1 anim-drawing">
					<svg className="draw-item1" width="1319" height="728" viewBox="0 0 1319 728" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1040.23 146.05L1020.07 171.63L971.9 232.75L913.41 306.97L863.05 370.88L838.47 402.07L838.13 402.5L847.91 395.03L778.46 436.76L768.57 442.7L802.87 438.22L701.21 409.82L686.86 405.81L707.67 417.75L657.47 365.88L650.36 358.54L663.8 390.98L665.15 323.89L665.35 314.13L659.38 336.79L688.93 271L735.98 166.25L746.71 142.36L729.46 159.61L751.23 144.75H705.91L717.93 151.54L700.68 134.29L738.37 226.75L743.72 239.88L739.24 205.58L727.56 267.44L709.09 365.24L704.8 387.96L716.74 367.15L685.31 392.8L717.75 379.36L655.04 376.22L694.95 399.44L662.23 348.06L610.13 266.26L598.25 247.6L602.73 281.9L614.71 219.7L633.89 120.1L638.28 97.3L626.34 118.11L669.49 78.58L597.14 68.81L616.46 100.47V55.14L598.97 90.87L627.24 69.14L556.24 95.37L444.09 136.81L418.4 146.3H441.68L363.58 118.73L352.4 114.78L363.42 119.26L279.27 73.71L267.48 67.33L277.26 74.79L249.87 45.33L240.1 117.68L278.42 98.43L244.12 102.91C245.42 103.35 246.7 103.86 247.98 104.37L236.96 99.89C242.75 102.26 248.39 105.09 253.43 108.81L243.65 101.35C245.75 102.96 247.68 104.7 249.34 106.76L241.87 96.98C242.73 98.13 243.46 99.31 244.04 100.63L239.56 89.61C239.88 90.46 240.12 91.3 240.29 92.19L238.8 80.55C238.91 81.46 238.92 82.33 238.84 83.24L240.33 71.6C240.1 73.01 239.7 74.33 239.2 75.67L243.68 64.65C241.99 68.78 239.74 72.71 237.21 76.38L254.46 59.13L231.47 74.45L176.24 111.25L109.06 156.01L51.26 194.52L23.13 213.26L22.73 213.53L1 241.8L5.48 276.1L33.75 297.82L68.05 293.34L107.22 267.24L192.02 210.74L272.15 157.36L295.07 142.09L299.53 139.12L299.78 138.95L317.04 121.69L317.82 120.52L328.71 96.82L322.55 52.83L296.38 27.32L267.46 14.15L230.58 19.88L221.06 24.66L198.95 35.77L194.79 37.86L172.32 71.95L185.02 110.21L205.31 132.03L225.81 149.09L285.68 181.5L332.27 204.65L396.58 227.35L418 234.91L418.43 235.06L424.26 235.81L441.72 235.06L441.76 235.04L442.62 234.72L447.46 232.93L497.82 214.33L571.47 187.12L633 164.39L648.59 158.63L650.11 158.07L650.45 157.94L650.53 157.91H650.55C650.55 157.91 654.25 156.47 656.06 155.66C660.06 154.6 663.52 152.61 666.46 149.69C671.97 145.48 679.87 134.02 679.87 134.02L682.85 127.93L696.29 100.47L702.27 77.79L696.28 55.11L695.63 54.04L692.32 48.62L682.52 32.57L676.96 23.47L642.86 1L604.6 13.7L569.87 45.52L549.48 74.19L547.93 82.22L527.93 186.09L517.9 238.15L514.89 253.79L514.14 257.71L518.46 292.95L562.42 361.97L613.94 442.86L615.14 444.74L627.52 458.29L632.41 462.02C639.45 465.97 655.07 467.99 655.07 467.99H655.12L657.09 468.09L680.63 469.27L709.26 470.7L716.99 471.09L740.43 465.15L751.34 456.76L771.76 440.09L793.64 410.88L798.9 383.01L820.5 268.62L827.41 232.01L827.96 229.11L828.01 205.56L823.32 194.02L818.08 181.15L780.75 89.57L751.22 64.91H705.9L684.96 79.21L666.58 97.69L664.98 101.24L647.55 140.04L594.47 258.24L580.09 290.25L579.65 291.24L573.58 314.13L573.48 319.32L572.9 347.88L572.26 379.54L572.06 389.29L585.71 423.65L622.4 461.56L640.29 480.04L663.59 494.56L666.78 495.45L718.59 509.92L773.76 525.33L779.09 526.82L814.61 522.05L831.48 511.91L884.89 479.82L903.11 467.22L906.93 462.38L964.32 389.56L1047.8 283.63L1102.41 214.33L1105.11 210.9C1109.74 206.6 1112.98 201.5 1114.81 195.61C1117.52 190.28 1118.54 178.46 1118.54 178.46L1105.1 146.02L1072.66 132.59L1040.22 146.03L1040.23 146.05Z" stroke="#FFB2C7" strokeWidth="1.3" strokeMiterlimit="10" fill="transparent"></path></svg>
				</div>
			</div>
		</div>



		<div className="tt-section no-padding-bottom-lg padding-bottom-100">
			<div className="tt-section-inner">
				<div className="tt-heading tt-heading-lg tt-heading-center padding-bottom-50 no-padding-bottom-lg margin-bottom-10-p anim-fadeinup">
					<h2 className="tt-heading-title split-lines not-split">Works</h2>
				</div>
				{/*End tt-Heading */}

				<div id="portfolio-grid" className="pgi-cap-inside pgi-hover">


					<div className="tt-grid ttgr-layout-creative-2 ttgr-not-cropped ttgr-gap-4">

						{/*Begin tt-Grid items wrap */}
						<div className="tt-grid-items-wrap isotope-items-wrap">


							{/*Begin tt-Grid item*/}
							<div className="tt-grid-item isotope-item">
								<div className="ttgr-item-inner">

									{/*Begin portfolio grid item  */}
									<div className="portfolio-grid-item hover-scale media-transition">
										<a href={`/projects/Dreamforce`} className="pli-image-link" data-cursor-view="">
											<div className="pgi-image-holder cover-opacity-2">
												<div className="pgi-image-inner">
													<figure className="pgi-video-wrap ttgr-height figure-zoom-out">
														<video className="pgi-video" loop muted preload="metadata" poster="/images/posters/Dreamforce-Poster.webp">
															<source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/dreamforce/01.mp4" type="video/mp4" />
														</video>
													</figure> {/*/.pgi-video-wrap */}
												</div> 
											</div> 
											<div className="figure-reveal overlay"></div>
										</a> {/*/.pgi-image-wrap */}
										<div className="pgi-caption">
											<div className="col-info">Dreamforce</div>
											{/* <div className="col-info pgi-date hide-from-md">2023</div>  */}
										</div> 
									</div>
									{/*End portfolio grid item */}

								</div> {/*/.ttgr-item-inner */}
							</div>
							{/*End tt-Grid item */}


							{/*Begin tt-Grid item*/}
							<div className="tt-grid-item isotope-item">
								<div className="ttgr-item-inner">

									{/*Begin portfolio grid item  */}
									<div className="portfolio-grid-item hover-scale media-transition">
										<a href={`/projects/17Sigma`} className="pli-image-link" data-cursor-view="">
											<div className="pgi-image-holder cover-opacity-2">
												<div className="pgi-image-inner">
													<figure className="pgi-video-wrap ttgr-height figure-zoom-out">
														<video className="pgi-video" loop muted preload="metadata" poster="/images/posters/17Sigma-Poster.webp">
															<source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/17sigma/01.mp4" type="video/mp4" />
														</video>
													</figure> {/*/.pgi-video-wrap */}
												</div> 
											</div> 
											<div className="figure-reveal overlay"></div>
										</a> {/*/.pgi-image-wrap */}
										<div className="pgi-caption">
											<div className="col-info">17 Sigma</div>
											{/* <div className="col-info pgi-date hide-from-md">2023</div>  */}
										</div> 
									</div>
									{/*End portfolio grid item */}

								</div> {/*/.ttgr-item-inner */}
							</div>
							{/*End tt-Grid item */}


							{/*Begin tt-Grid item*/}
							<div className="tt-grid-item isotope-item">
								<div className="ttgr-item-inner">

									{/*Begin portfolio grid item  */}
									<div className="portfolio-grid-item hover-scale media-transition">
										<a href={`/projects/Decoded`} className="pli-image-link" data-cursor-view="">
											<div className="pgi-image-holder cover-opacity-2">
												<div className="pgi-image-inner">
													<figure className="pgi-video-wrap ttgr-height figure-zoom-out">
														<video className="pgi-video" loop muted preload="metadata" poster="/images/posters/Decoded-Poster.webp">
															<source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/decoded/decoded-01a.mp4" type="video/mp4" />
														</video>
													</figure> {/*/.pgi-video-wrap */}
												</div> 
											</div> 
											<div className="figure-reveal overlay"></div>
										</a> {/*/.pgi-image-wrap */}
										<div className="pgi-caption">
											<div className="col-info">Decoded</div>
											{/* <div className="col-info pgi-date hide-from-md">2023</div>  */}
										</div> 
									</div>
									{/*End portfolio grid item */}

								</div> {/*/.ttgr-item-inner */}
							</div>
							{/*End tt-Grid item */}


							{/*Begin tt-Grid item*/}
							<div className="tt-grid-item isotope-item">
								<div className="ttgr-item-inner">

									{/*Begin portfolio grid item  */}
									<div className="portfolio-grid-item hover-scale media-transition">
										<a href={`/projects/theSandbox`} className="pli-image-link" data-cursor-view="">
											<div className="pgi-image-holder cover-opacity-2">
												<div className="pgi-image-inner">
													<figure className="pgi-video-wrap ttgr-height figure-zoom-out">
														<video className="pgi-video" loop muted preload="metadata" poster="/images/posters/TheSandBox-Poster.webp">
															<source src="https://d2s90tzqqa0vkb.cloudfront.net/projects/theSandbox/ml-01.mp4" type="video/mp4" />
														</video>
													</figure> {/*/.pgi-video-wrap */}
												</div> 
											</div> 
											<div className="figure-reveal overlay"></div>
										</a> {/*/.pgi-image-wrap */}
										<div className="pgi-caption">
											<div className="col-info">The Sandbox</div>
											{/* <div className="col-info pgi-date hide-from-md">2023</div>  */}
										</div> 
									</div>
									{/*End portfolio grid item */}

								</div> {/*/.ttgr-item-inner */}
							</div>
							{/*End tt-Grid item */}

						</div>
						{/*End tt-Grid items wrap  */}

					</div>
					{/*End tt-Grid */}

				</div>
				{/*End portfolio grid */}

			</div> {/*/.tt-section-inner */}
		</div>






		<div className="tt-section padding-bottom-200 padding-top-lg-200 margin-bottom-lg-100">
			<div className="tt-section-inner tt-wrap-xl">

				<div className="tt-heading tt-heading-center tt-heading-lg margin-bottom-10-p anim-fadeinup">
					<h3 className="tt-heading-subtitle text-gray">Latest articles</h3>
					<h2 className="tt-heading-title split-lines not-split">Featured News</h2>
				</div>
				{/*}End tt-Heading */}

				<div className="portfolio-interactive pi-borders pi-compact pi-force-scroll">

					<div className="portfolio-interactive-item anim-skewinup" data-scroll-speed="3">
						<a href="https://medium.com/design-bootcamp/branding-in-the-metaverse-e49981a4527e" className="pi-item-title-link">
							<h2 className="pi-item-title">Branding in the Metaverse</h2>
							<div className="pi-item-hover-title">Branding in the Metaverse</div>
						</a>
						<div className="pi-item-category-wrap">
							<div className="pi-item-category">Bootcamp</div>
						</div>
						<figure className="pi-item-image cover-opacity-2">
							<Image
								src="/images/blog/01.webp"
								alt="Branding in the Metaverse"
								width={800}
								height={600}
							/>
						</figure>
					</div>
					{/*}End portfolio interactive item */}

					<div className="portfolio-interactive-item anim-skewinup" data-scroll-speed="5">
						<a href="https://crescimone.medium.com/why-should-every-logo-have-one-joke-at-a-time-4da1998a535d" className="pi-item-title-link">
							<h2 className="pi-item-title">Every logo have One Joke at a Time</h2>
							<div className="pi-item-hover-title">Every logo have One Joke at a Time</div>
						</a>
						<div className="pi-item-category-wrap">
							<div className="pi-item-category">3 letters & 2 sounds</div>
						</div>
						<figure className="pi-item-image cover-opacity-2">
							<Image
								src="/images/blog/03.jpg"
								alt="Imagen de ejemplo"
								width={800}
								height={600}
							/>
						</figure>
					</div>
					{/*}End portfolio interactive item */}


					<div className="portfolio-interactive-item anim-skewinup" data-scroll-speed="3">
						<a href="https://crescimone.medium.com/the-empathy-revolution-how-ai-is-revolutionizing-creativity-and-design-1a567ef3a4d2" className="pi-item-title-link">
							<h2 className="pi-item-title">The Empathy Revolution</h2>
							<div className="pi-item-hover-title">The Empathy Revolution</div>
						</a>
						<div className="pi-item-category-wrap">
							<div className="pi-item-category">How AI is Revolutionizing Creativity and Design</div>
						</div>
						<figure className="pi-item-image cover-opacity-2">
							<Image
								src="/images/blog/04.webp"
								alt="Imagen de ejemplo"
								width={800}
								height={600}
							/>
						</figure>
					</div>



					<div className="portfolio-interactive-item anim-skewinup" data-scroll-speed="3">
						<a href="https://www.behance.net/_Cresci" className="pi-item-title-link">
							<h2 className="pi-item-title">Follow us on Behance</h2>
							<div className="pi-item-hover-title">Follow us on Behance</div>
						</a>
						<div className="pi-item-category-wrap">
							<div className="pi-item-category">Portfolio</div>
						</div>
						<figure className="pi-item-image cover-opacity-2">
							<Image
								src="/images/blog/02.jpg"
								alt="Imagen de ejemplo"
								width={800}
								height={600}
							/>
						</figure>
					</div>
					{/*}End portfolio interactive item */}




				</div>
				{/*}End portfolio interactive */}

			</div> {/*}/.tt-section-inner */}
		</div>
		{/*}End tt-section */}





		<div className="tt-section padding-top-100 padding-top-lg-200">
			<div className="tt-section-inner">

				<div className="position-relative">
					<div className="tt-heading margin-bottom-lg-100 anim-fadeinup">
						<h2 className="tt-title-brands ph-title-parallax">TRUSTED COLLABS</h2>
					</div>

					<div id="draw-on" className="draw-on intiDraw2 anim-drawing">
						<svg  className="draw-item2" width="766" height="526" viewBox="0 0 766 526" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M174 282.891L187.205 283.402L222.929 284.774L275.973 286.816L340.403 289.273L411.277 291.985L482.534 294.728L549.261 297.281L605.431 299.451L646.003 301.014C652.414 301.269 658.794 301.556 665.205 301.748C665.492 301.748 665.747 301.748 666.034 301.748L636.753 293.835L677.804 314.223L657.008 234.841L620.263 289.017L615.096 296.643L635.892 275.84L589.068 302.865L514.494 345.874L497.493 355.669L511.337 349.831L478.132 355.925L399.093 370.442L303.244 388.054L220.409 403.273C207.013 405.73 193.616 408.123 180.251 410.644C180.06 410.676 179.869 410.708 179.677 410.739H210.521L124.72 386.299L112.535 382.822L147.207 409.495L121.498 355.829L117.798 348.139L125.709 377.429L120.254 324.146L119.457 316.489L117.384 331.899L129.568 282.062L131.29 274.979L104.625 309.661L167.684 277.372L176.551 272.841L147.271 280.754L205.545 281.998L298.46 284.008L319.83 284.455L290.549 276.542L310.198 288.092L283.532 222.589L277.823 246.55L292.75 220.961L243.63 262.471L236.644 268.374L262.225 253.442L193.52 273.958L84.0198 306.63L58.9174 314.127H89.7612L75.2483 309.405L117.83 365.337L116.969 355.063L109.059 384.353L133.3 329.442L171.895 241.988L180.698 222.046L171.639 233.788L211.925 188.385L275.622 116.596L290.294 100.037L193.361 43.5947L184.366 93.2088C181.942 100.93 181.591 108.62 183.345 116.341C183.696 124.062 185.993 131.241 190.235 137.909C193.871 144.674 198.847 150.098 205.163 154.182C210.776 159.319 217.347 162.764 224.875 164.551L240.281 166.625C250.743 166.593 260.503 163.945 269.561 158.712L281.299 149.651C288.476 142.408 293.452 133.889 296.227 124.062L305.222 74.448L307.295 59.0373C307.582 51.0607 305.923 43.5947 302.287 36.671C300.916 31.7575 298.428 27.482 294.823 23.8766C290.741 17.5592 285.318 12.5818 278.556 8.9445L264.713 3.10567L249.307 1.03176C241.333 0.744607 233.869 2.40373 226.948 6.04104C219.771 8.37019 213.551 12.3904 208.288 18.0378L166.153 65.5461L101.467 138.452L92.7276 148.311C88.6767 152.873 82.7121 158.904 80.5431 163.562C77.8319 169.369 75.3759 175.272 72.7923 181.142L33.3045 270.671L15.6339 310.745L10.4985 322.359C5.77787 333.048 0.227888 343.545 1.08909 355.765C1.31237 358.988 1.63133 362.21 1.8865 365.465L3.95977 380.875C5.74597 388.437 9.22269 395.01 14.3261 400.593C16.9097 404.964 20.3864 408.41 24.7244 410.995C30.3381 416.132 36.9088 419.578 44.4364 421.364L52.2829 423.917L57.0992 425.48C57.5458 425.64 57.9923 425.767 58.4389 425.927C67.4975 428.766 73.5259 428.256 82.0742 427.139C86.8586 426.501 89.0595 426.31 92.9827 425.161L116.171 418.237L199.804 393.287L277.344 370.155C282.543 368.623 287.742 367.092 292.91 365.528C304.807 361.859 309.592 358.19 318.969 350.309C320.054 349.384 321.138 348.459 322.223 347.565L336.097 335.856L369.27 307.842L373.703 304.077C374.022 303.822 374.341 303.567 374.628 303.279C374.66 303.247 374.724 303.216 374.756 303.152C382.411 296.42 383.4 292.431 386.749 284.487C392.299 271.341 389.014 280.084 389.715 277.435C391.31 271.373 392.618 265.215 394.085 259.089L395.393 253.601L397.466 238.191C397.753 230.214 396.095 222.748 392.458 215.824C391.087 210.911 388.599 206.635 384.995 203.03C380.912 196.713 375.49 191.735 368.728 188.098L355.618 180.409C353.545 179.196 351.472 177.952 349.398 176.739C349.303 176.675 349.207 176.612 349.079 176.548C338.362 170.422 337.31 170.964 327.517 169.656C222.929 155.585 322.478 168.731 319.798 168.635C319.703 168.635 319.607 168.635 319.479 168.635C314.28 168.444 309.081 168.412 303.882 168.284L230.935 166.721L159.774 165.189C155.595 165.094 151.417 164.902 147.239 164.934C144.496 164.934 309.209 143.174 139.52 165.955C128.675 167.423 130.621 166.465 117.958 172.847L117.83 172.911C117.543 173.07 117.256 173.198 116.969 173.357C115.757 173.963 114.545 174.602 113.301 175.24L99.7448 182.195L64.0208 200.509L50.5605 207.401C49.3484 208.039 48.1364 208.646 46.9243 209.284C46.6691 209.411 46.4458 209.539 46.1907 209.667L46.0631 209.73C36.6536 214.772 35.2183 217.643 29.7959 224.662C26.1916 228.268 23.7037 232.543 22.3321 237.457C20.9925 239.658 20.0037 241.956 19.3977 244.38C16.9416 253.378 14.964 262.535 12.7313 271.565C10.3391 281.36 7.78735 291.155 5.5227 301.014C4.91667 303.726 3.22615 313.968 3.38564 316.712C3.38564 316.999 3.44943 317.286 3.48133 317.573C3.60891 319.073 3.80029 320.573 3.92788 322.104L5.65028 338.919L9.31837 374.685C9.41406 375.643 9.50975 376.632 9.60544 377.589C9.73303 378.833 11.3916 391.819 11.6787 393.095C15.5063 409.846 15.3787 402.412 17.5477 407.006C17.6752 407.294 17.8347 407.581 17.9623 407.868C19.6528 411.441 21.3752 415.015 23.0976 418.556L40.0665 454.004L45.9674 466.32C46.2864 466.99 46.5734 467.66 46.9243 468.298L55.9829 480.04L67.7208 489.101L81.5638 494.94H81.6595C81.8828 495.036 82.138 495.099 82.3612 495.163C90.2397 497.492 98.15 499.662 106.06 501.896L175.467 521.645C176.551 521.965 177.604 522.284 178.689 522.571C178.944 522.635 179.167 522.73 179.422 522.794H179.55C182.197 523.528 97.9905 511.882 187.269 523.879C198.815 525.442 194.988 525.602 210.394 522.858C211 522.762 211.574 522.635 212.18 522.539L224.747 520.242L278.684 510.319L355.235 496.248L436.412 481.316L504.064 468.873L540.075 462.268C546.582 461.087 552.579 457.961 558.288 454.674L577.904 443.348L646.067 404.039C661.856 394.946 677.676 385.948 693.401 376.759C693.688 376.6 693.976 376.44 694.263 376.281C703.513 370.793 709.86 363.103 715.761 354.457C717.93 351.266 720.099 348.076 722.268 344.885L744.404 312.277L757.035 293.644C761.277 286.975 763.574 279.796 763.924 272.075C765.647 264.354 765.296 256.664 762.904 248.943C758.438 235.128 749.699 220.961 736.238 214.261L711.423 201.945L697.516 195.053C696.751 194.671 695.953 194.288 695.188 193.905L688.266 190.969C683.737 188.353 678.857 187.013 673.626 187.013C456.315 157.819 668.586 186.12 665.907 185.992H665.715C659.432 185.673 653.116 185.514 646.833 185.258L602.146 183.535L538.895 181.11L464.64 178.271L385.983 175.24L310.421 172.336L245.224 169.848L197.603 168.029C190.012 167.742 182.42 167.391 174.861 167.167C174.542 167.167 174.191 167.167 173.872 167.136C165.898 166.848 158.434 168.507 151.513 172.145C144.336 174.474 138.116 178.494 132.853 184.142C127.208 189.406 123.189 195.628 120.86 202.807C117.224 209.73 115.565 217.164 115.853 225.173C116.522 240.169 121.466 255.739 132.853 266.204L144.591 275.266C153.65 280.498 163.378 283.147 173.872 283.178L174 282.891Z" stroke="#FFB2C7" strokeWidth="2" strokeMiterlimit="10"></path>
						</svg>
					</div>
				</div>



				<div className="content-slide-brands">
					<div className="tt-partners-carousel cursor-drag anim-fadeinup" data-loop="true" data-simulate-touch="true" data-speed="900">
						
						<div className="swiper swiper-container swiper-horizontal">
							<div className="swiper-wrapper">

								<div className="swiper-slide">
									<div className="tt-partners-carousel-item">
											<figure>
												<img src="/images/partners/google.svg" alt="Google"/>
											</figure> 
											<h4>GOOGLE</h4>
											<p>Collab with Google has been instrumental in bringing visually compelling animations to life. By working together, we have pushed the boundaries of visual storytelling, resulting in animations that captivate and inspire audiences.</p>	
									</div>									
								</div> 



								<div className="swiper-slide">
									<div className="tt-partners-carousel-item">
											<figure>
												<img src="/images/partners/salesforce.svg" alt="Salesforce"/>
											</figure> 
											<h4>SALESFORCE</h4>
											<p>Throughout the years we’ve built a strategic partnership helping the events team at Salesforce to build and shape digital experiences like Dreamforce, CNX, EDS & NPS with unique design expression and content.</p>
									</div>									
								</div> 



								<div className="swiper-slide">
									<div className="tt-partners-carousel-item">
											<figure>
												<img src="/images/partners/amazon.svg" alt="Amazon"/>
											</figure> 
											<h4>AMAZON</h4>
											<p>A long relationship with the e-commerce leader, generating visually appealing animations integrated into explainer videos and experiential content.</p>	
									</div>									
								</div> 



								<div className="swiper-slide">
									<div className="tt-partners-carousel-item">
											<figure>
												<img src="/images/partners/ibm.svg" alt="IBM"/>
											</figure> 

											<h4>IBM</h4>
											<p>Our project with IBM involved creating a robust graphic system for their data visualization guide, enabling visually engaging and informative data representation. Our solution empowered IBM to effectively communicate complex information while maintaining a visually appealing and cohesive design.</p>
									</div>									
								</div> 



								<div className="swiper-slide">
									<div className="tt-partners-carousel-item">
											<figure>
												<img src="/images/partners/fox.svg" alt="Fox"/>
											</figure> 
											<h4>FOX INTERNATIONAL CHANNELS</h4>
											<p>We supported Fox Int. to develop a cohesive main identity that incorporated a diverse range of medias while preserving the essence of the original FOX branding. The result was a compelling branding solution that captured the spirit of FOX while unifying the visual identity across the extensive global channel lineup.</p>	
									</div>									
								</div> 



								<div className="swiper-slide">
									<div className="tt-partners-carousel-item">
											<figure>
												<img src="/images/partners/willow.svg" alt="Willow"/>
											</figure> 

											<h4>WILLOW</h4>
											<p>We collaborated with Willow’s marketing leadership to craft a fresh brand identity that captured their innovative solutions for the built environment. Additionally, we designed their new website, showcasing Willow's cutting-edge technology and providing an engaging user experience for their audience.</p>		
									</div>									
								</div> 


							</div>
							<div className="swiper-scrollbar"></div>
						</div>

					</div>
				</div>

			</div>
		</div>





        {/*Scrolling Text*/}
        <div className="tt-section padding-top-xlg-120 padding-bottom-xlg-150">
          <div className="tt-section-inner">
            <div className="tt-scrolling-text font-bold text-pink anim-fadeinup" data-scroll-speed="20">
              <div className="tt-scrolling-text-inner" data-text=" Explore our projects. Explore our projects. Explore our projects.">
                Explore our projects. Explore our projects. Explore our projects.
              </div>
            </div>
          </div>
        </div>










    </div>{/* Page Content */}
  </>
  );
}
