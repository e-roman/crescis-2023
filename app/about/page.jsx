

/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect } from "react";

// Functions
import { initAccordion } from "@/utils/FunctionsAccordion";

export default function AboutPage() {
  useEffect(() => {
    initAccordion();          
  }, []);

  return (
    <>

        <div id="page-header" className="ph-full ph-hero-about">
            <div className="page-header-inner tt-wrap-xl padding-lr-xl padding-top-100">
                
                <div className="ph-image-bg">
                    <div className="drawLoaded anim-drawing">
                        <svg className="draw-about" width="355" height="244" viewBox="0 0 355 244" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M80.9331 131.186L87.0344 131.422L103.54 132.056L128.049 132.999L157.819 134.133L190.565 135.386L223.489 136.653L254.32 137.832L280.272 138.834L299.019 139.556C301.981 139.674 304.928 139.807 307.891 139.895C308.023 139.895 308.141 139.895 308.274 139.895L294.745 136.241L313.712 145.657L304.103 108.995L287.125 134.016L284.738 137.537L294.347 127.93L272.712 140.411L238.256 160.274L230.401 164.798L236.797 162.101L221.455 164.916L184.936 171.62L140.649 179.754L102.376 186.783C96.1864 187.917 89.9967 189.023 83.8217 190.187C83.7332 190.201 83.6448 190.216 83.5564 190.231H97.8075L58.1637 178.944L52.534 177.337L68.5536 189.656L56.6752 164.871L54.9657 161.32L58.6206 174.847L56.1004 150.239L55.732 146.703L54.7741 153.82L60.4038 130.803L61.1996 127.532L48.8791 143.549L78.0151 128.637L82.1121 126.545L68.5831 130.199L95.5085 130.774L138.439 131.702L148.313 131.908L134.784 128.254L143.862 133.588L131.542 103.337L128.904 114.403L135.801 102.585L113.105 121.756L109.878 124.482L121.697 117.586L89.9525 127.061L39.3586 142.15L27.7602 145.612H42.0114L35.3058 143.431L54.9804 169.262L54.5825 164.518L50.9276 178.045L62.1281 152.685L79.9604 112.296L84.028 103.086L79.8425 108.509L98.456 87.5404L127.887 54.386L134.666 46.7383L89.8788 20.6716L85.7228 43.585C84.6028 47.1509 84.4406 50.7021 85.2512 54.2681C85.4133 57.834 86.4744 61.1495 88.4345 64.2292C90.1146 67.3531 92.4136 69.8581 95.3316 71.7442C97.9254 74.1166 100.961 75.708 104.439 76.5332L111.558 77.491C116.392 77.4762 120.901 76.2532 125.087 73.8366L130.51 69.6518C133.826 66.3068 136.125 62.3725 137.407 57.834L141.563 34.9206L142.521 27.8035C142.654 24.1196 141.887 20.6716 140.207 17.474C139.574 15.2048 138.424 13.2302 136.759 11.5652C134.872 8.64756 132.367 6.34885 129.243 4.66903L122.847 1.97246L115.728 1.01467C112.044 0.882051 108.595 1.64829 105.397 3.32811C102.081 4.40379 99.2076 6.26044 96.7759 8.86859L77.3077 30.8095L47.4201 64.4797L43.382 69.0329C41.5103 71.14 38.7544 73.925 37.7523 76.0764C36.4996 78.7582 35.3648 81.4842 34.171 84.1955L15.926 125.543L7.76146 144.05L5.38872 149.414C3.20758 154.35 0.643252 159.198 1.04116 164.842C1.14433 166.33 1.2917 167.818 1.4096 169.321L2.36754 176.439C3.19284 179.931 4.79923 182.966 7.15722 185.545C8.35096 187.564 9.95735 189.155 11.9616 190.349C14.5554 192.721 17.5914 194.313 21.0694 195.138L24.6948 196.316L26.9202 197.039C27.1265 197.112 27.3329 197.171 27.5392 197.245C31.7246 198.556 34.51 198.321 38.4597 197.805C40.6703 197.51 41.6872 197.422 43.4999 196.891L54.214 193.694L92.8558 182.171L128.683 171.488C131.085 170.78 133.487 170.073 135.874 169.351C141.372 167.656 143.582 165.962 147.915 162.322C148.416 161.895 148.917 161.468 149.418 161.055L155.829 155.647L171.156 142.709L173.205 140.971C173.352 140.853 173.499 140.735 173.632 140.602C173.647 140.588 173.676 140.573 173.691 140.543C177.228 137.434 177.685 135.592 179.232 131.923C181.797 125.852 180.279 129.89 180.603 128.667C181.34 125.867 181.944 123.023 182.622 120.194L183.226 117.659L184.184 110.542C184.317 106.858 183.55 103.41 181.87 100.213C181.236 97.9436 180.087 95.969 178.422 94.3039C176.535 91.3863 174.03 89.0876 170.906 87.4078L164.848 83.8566C163.89 83.2967 162.933 82.722 161.975 82.162C161.93 82.1326 161.886 82.1031 161.827 82.0736C156.875 79.2445 156.389 79.4949 151.865 78.8908C103.54 72.3925 149.536 78.4635 148.298 78.4193C148.254 78.4193 148.21 78.4193 148.151 78.4193C145.749 78.3309 143.346 78.3161 140.944 78.2572L107.24 77.5352L74.3602 76.8279C72.4296 76.7837 70.499 76.6952 68.5684 76.71C67.3009 76.71 143.405 66.6605 65.0019 77.1815C59.9911 77.8593 60.8901 77.4173 55.0393 80.3643L54.9804 80.3938C54.8478 80.4675 54.7151 80.5264 54.5825 80.6001C54.0225 80.8801 53.4624 81.1748 52.8877 81.4695L46.6242 84.6818L30.1182 93.1398L23.899 96.3227C23.339 96.6174 22.779 96.8974 22.2189 97.1921C22.101 97.251 21.9979 97.3099 21.88 97.3689L21.821 97.3984C17.4735 99.7265 16.8103 101.053 14.3049 104.294C12.6396 105.96 11.49 107.934 10.8563 110.203C10.2374 111.22 9.7805 112.281 9.50049 113.401C8.3657 117.556 7.45197 121.785 6.42035 125.955C5.31504 130.479 4.13604 135.003 3.08968 139.556C2.80966 140.809 2.02858 145.539 2.10226 146.806C2.10226 146.938 2.13174 147.071 2.14648 147.204C2.20543 147.896 2.29385 148.589 2.3528 149.296L3.14863 157.062L4.84344 173.58C4.88765 174.022 4.93186 174.479 4.97607 174.921C5.03502 175.496 5.80137 181.493 5.93401 182.082C7.70251 189.818 7.64356 186.385 8.64571 188.507C8.70466 188.639 8.77835 188.772 8.8373 188.905C9.61839 190.555 10.4142 192.205 11.21 193.841L19.0504 210.212L21.7768 215.9C21.9242 216.209 22.0568 216.519 22.2189 216.813L26.4044 222.236L31.8278 226.421L38.2239 229.117H38.2681C38.3712 229.162 38.4891 229.191 38.5923 229.22C42.2325 230.296 45.8874 231.298 49.5423 232.33L81.611 241.451C82.1121 241.598 82.5985 241.745 83.0995 241.878C83.2174 241.908 83.3206 241.952 83.4385 241.981H83.4974C84.7207 242.32 45.8137 236.942 87.0639 242.482C92.3989 243.204 90.6304 243.278 97.7486 242.011C98.0286 241.967 98.2939 241.908 98.5739 241.863L104.38 240.802L129.302 236.22L164.672 229.721L202.178 222.825L233.437 217.079L250.075 214.028C253.082 213.483 255.852 212.039 258.49 210.521L267.554 205.29L299.048 187.136C306.343 182.937 313.653 178.781 320.918 174.538C321.051 174.464 321.184 174.39 321.316 174.317C325.59 171.782 328.523 168.231 331.249 164.238C332.252 162.764 333.254 161.291 334.256 159.817L344.484 144.758L350.32 136.152C352.28 133.073 353.341 129.757 353.503 126.191C354.299 122.625 354.137 119.074 353.031 115.508C350.968 109.128 346.93 102.585 340.711 99.4908L329.245 93.8029L322.82 90.6201C322.466 90.4433 322.097 90.2665 321.744 90.0896L318.546 88.734C316.453 87.5257 314.198 86.9068 311.781 86.9068C211.375 73.424 309.453 86.4942 308.215 86.4353H308.126C305.223 86.2879 302.305 86.2143 299.402 86.0964L278.754 85.3007L249.53 84.1808L215.221 82.8693L178.879 81.4695L143.965 80.1286L113.842 78.9792L91.8389 78.1393C88.3313 78.0067 84.8238 77.8446 81.331 77.7414C81.1837 77.7414 81.0215 77.7415 80.8742 77.7267C77.1898 77.5941 73.7412 78.3603 70.5432 80.0402C67.2273 81.1158 64.3534 82.9725 61.9218 85.5806C59.3132 88.012 57.4563 90.8853 56.3805 94.2008C54.7004 97.3984 53.934 100.832 54.0667 104.53C54.3762 111.456 56.6605 118.647 61.9218 123.48L67.3452 127.665C71.5306 130.081 76.0255 131.304 80.8742 131.319L80.9331 131.186Z" stroke="#FFB2C7" strokeWidth="0.7" strokeMiterlimit="10" fill="transparent">
                            </path>
                        </svg>
                    </div>
                </div>
                
                
                <div className="ph-caption about-caption is-hidden">
                    <h1 className="ph-caption-title ph-caption-title-about split-lines-init not-split-in">WE ARE AN INDEPENDENT STRATEGY, DESIGN AND COMMUNICATIONS COMPANY</h1>
                </div> 
                
            </div> 
            
        </div>




        <div id="page-content">




        {/*Scrolling Text*/}
        <div id="scrolling-bgColor" className="tt-section padding-top-xlg-120 padding-bottom-xlg-150">
          <div className="tt-section-inner">

            <div className="tt-scrolling-text color-gray anim-fadeinup" data-scroll-speed="40">
              <div className="tt-scrolling-text-inner" data-text=" WE BUILD BRANDS THAT CAN’T BE IGNORED · WE BUILD BRANDS THAT CAN’T BE IGNORED · ">
                 WE BUILD BRANDS THAT CAN’T BE IGNORED · WE BUILD BRANDS THAT CAN’T BE IGNORED · 
              </div>
            </div>

            <div className="tt-scrolling-text color-gray scr-text-reverse anim-fadeinup" data-scroll-speed="40">
              <div className="tt-scrolling-text-inner" data-text=" LET’S GET STARTED · LET’S GET STARTED · LET’S GET STARTED · ">
                 LET’S GET STARTED · LET’S GET STARTED · LET’S GET STARTED · 
              </div> 
            </div>

          </div>
        </div>





            <div className="tt-section">
                <div className="tt-section-inner tt-wrap">

                    <div className="tt-row">
                        <div className="tt-col-lg-5 padding-right-lg-5-p padding-top-lg-100">
                            <div className="tt-heading tt-heading-sm margin-bottom-60 anim-fadeinup">
                                <h2 className="tt-heading-title text-pink">ABOUT CRESCI´S</h2>
                            </div>
                        </div> 

                        <div className="tt-col-lg-7 padding-right-lg-5-p padding-top-lg-50">
                            <div className="text-lg padding-top-lg-200">
                                <p className="anim-fadeinup">We are an independent strategy, design and communications company. We put insight and imagination at the center of everything we do.</p>
                                <p className="anim-fadeinup">We combine creativity, craft and technology into ideas that improve people’s lives. We put insight and imagination at the center of everything we do.</p>
                                <p className="anim-fadeinup">Our mission is to prioritize quality over quantity. We build each brand in a unique system considering every detail so that the result is unmatched.</p>
                                <p className="anim-fadeinup">Challenge assumptions, explore perspectives, and uncover truth with insight — transforming ideas into action, and turning clarity into impact.</p>
                            </div>
                        </div> 
                    </div> 

                </div>
            </div>





            <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-200">
                <div className="tt-section-inner tt-wrap-xl tt-p-md ">

                    <div className="tt-accordion tt-ac-xlg tt-ac-borders accordion">
                        <div className="tt-accordion-item anim-skewinup accordion-group">
                            <div className="tt-accordion-heading">
                                <div className="tt-accordion-subtext">01</div>
                                <h3 className="tt-ac-head-title">WHAT DO WE DO?</h3>
                                <div className="tt-accordion-caret-wrap">
                                    <div className="tt-accordion-caret magnetic-item"></div>
                                </div>
                            </div> 
                            <div className="accordion-content">
                                <div className="tt-accordion-content">
                                    <p>We combine creativity, craft and technology into ideas that improve people’s lives. <br/> We put insight and imagination at the center of everything we do.</p>
                                </div>
                            </div>
                        </div>
                        <div className="tt-accordion-item anim-skewinup accordion-group">
                            <div className="tt-accordion-heading">
                                <div className="tt-accordion-subtext">02</div>
                                <h3 className="tt-ac-head-title">OUR KEY OBJECTIVE</h3>
                                <div className="tt-accordion-caret-wrap">
                                    <div className="tt-accordion-caret magnetic-item"></div>
                                </div>
                            </div> 
                            <div className="accordion-content">
                                <div className="tt-accordion-content">
                                    <p>Our mission is to prioritize quality over quantity. <br/>We build each brand in a unique system considering every detail so that the result is unmatched.</p>
                                </div>
                            </div>
                        </div>
                        <div className="tt-accordion-item anim-skewinup accordion-group">
                            <div className="tt-accordion-heading">
                                <div className="tt-accordion-subtext">03</div>
                                <h3 className="tt-ac-head-title">START THE JOURNEY WITH US</h3>
                                <div className="tt-accordion-caret-wrap">
                                    <div className="tt-accordion-caret magnetic-item"></div>
                                </div>
                            </div> 
                            <div className="accordion-content">
                                <div className="tt-accordion-content">
                                    <p>Your brand’s DNA must be clear in every form of appearance. <br/> We are ready for any challenge. <br/>Are you?</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>





            <div className="tt-section no-padding-bottom padding-top-lg-150 padding-bottom-lg-150" id="team">
                <div className="tt-section-inner tt-wrap-xl tt-wrap-team">

                    <div className="tt-heading tt-heading-xxlg tt-heading-left margin-bottom-10-p padding-left-lg-50">
                        <h2 className="tt-heading-title split-lines not-split">MEET OUR TEAM</h2>
                    </div>
                    {/* End tt-Heading */}


                    {/* team */}
                    <div id="team-grid" className="pgi-cap-hover">

                        <div className="tt-grid ttgr-layout-creative-3 ttgr-layout-3 ttgr-gap-1">

                            {/* Begin tt-Grid items wrap 
                                ============================== */}
                            <div className="tt-grid-items-wrap isotope-items-wrap">

                                {/* Begin tt-Grid item
                                    ======================== */}

                                <div className="tt-grid-item isotope-item">
                                    <div className="ttgr-item-inner">

                                        <div className="portfolio-grid-item">
                                            <div className="pgi-image-holder">
                                                <div className="tt-image">
                                                    <figure>
                                                        <div className="anim-image-parallax-wrap">
                                                            <div className="anim-image-parallax-inner">
                                                                <img className="anim-image-parallax" data-src="team/01.jpg" src="https://d2s90tzqqa0vkb.cloudfront.net/team/01.jpg" />
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div> {/* /.pgi-image-holder */}
                                            <div className="tt-data-team anim-fadeinup">
                                                <h4 className="text-pink">JUAN CRESCIMONE</h4>
                                                <p>CEO &amp; FOUNDER</p>
                                            </div>
                                        </div>
                                        {/* End portfolio grid item */}

                                    </div> {/* /.ttgr-item-inner */}
                                </div>
                                {/* End tt-Grid item */}

                                <div className="tt-grid-item isotope-item">
                                    <div className="ttgr-item-inner">

                                        <div className="portfolio-grid-item">
                                            <div className="pgi-image-holder">
                                                <div className="tt-image">
                                                    <figure>
                                                        <div className="anim-image-parallax-wrap">
                                                            <div className="anim-image-parallax-inner">
                                                                <img className="anim-image-parallax" src="https://d2s90tzqqa0vkb.cloudfront.net/team/02.png" data-src="team/02.png" />
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div> {/* /.pgi-image-holder */}
                                            <div className="tt-data-team anim-fadeinup">
                                                <h4 className="text-pink">FRANCISCO ECHEVARRIA</h4>
                                                <p>Executive Producer</p>
                                            </div>
                                        </div>
                                        {/* End portfolio grid item */}

                                    </div> {/* /.ttgr-item-inner */}
                                </div>
                                {/* End tt-Grid item */}

                                <div className="tt-grid-item isotope-item">
                                    <div className="ttgr-item-inner">

                                        <div className="portfolio-grid-item">
                                            <div className="pgi-image-holder">
                                                <div className="tt-image">
                                                    <figure>
                                                        <div className="anim-image-parallax-wrap">
                                                            <div className="anim-image-parallax-inner">
                                                                <img className="anim-image-parallax" src="https://d2s90tzqqa0vkb.cloudfront.net/team/03.png" data-src="team/03.png" />
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div> {/* /.pgi-image-holder */}
                                            <div className="tt-data-team anim-fadeinup">
                                                <h4 className="text-pink">ROCIO BLAER</h4>
                                                <p>PROJECT LEADER</p>
                                            </div>
                                        </div>
                                        {/* End portfolio grid item */}

                                    </div> {/* /.ttgr-item-inner */}
                                </div>
                                {/* End tt-Grid item */}

                                <div className="tt-grid-item isotope-item">
                                    <div className="ttgr-item-inner">

                                        <div className="portfolio-grid-item">
                                            <div className="pgi-image-holder">
                                                <div className="tt-image">
                                                    <figure>
                                                        <div className="anim-image-parallax-wrap">
                                                            <div className="anim-image-parallax-inner">
                                                                <img className="anim-image-parallax" data-src="team/04.png" src="https://d2s90tzqqa0vkb.cloudfront.net/team/04.png" />
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div> {/* /.pgi-image-holder */}
                                            <div className="tt-data-team anim-fadeinup">
                                                <h4 className="text-pink">PILAR SCARPATI</h4>
                                                <p>CREATIVE DIRECTOR</p>
                                            </div>
                                        </div>
                                        {/* End portfolio grid item */}

                                    </div> {/* /.ttgr-item-inner */}
                                </div>
                                {/* End tt-Grid item */}

                                <div className="tt-grid-item isotope-item">
                                    <div className="ttgr-item-inner">

                                        <div className="portfolio-grid-item">
                                            <div className="pgi-image-holder">
                                                <div className="tt-image">
                                                    <figure>
                                                        <div className="anim-image-parallax-wrap">
                                                            <div className="anim-image-parallax-inner">
                                                                <img className="anim-image-parallax" src="https://d2s90tzqqa0vkb.cloudfront.net/team/05.png" data-src="team/05.png" />
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div> {/* /.pgi-image-holder */}
                                            <div className="tt-data-team anim-fadeinup">
                                                <h4 className="text-pink">EMILIANO ROMÁN</h4>
                                                <p>FRONTEND DEVELOPER</p>
                                            </div>
                                        </div>
                                        {/* End portfolio grid item */}

                                    </div> {/* /.ttgr-item-inner */}
                                </div>
                                {/* End tt-Grid item */}

                                <div className="tt-grid-item isotope-item">
                                    <div className="ttgr-item-inner">

                                        <div className="portfolio-grid-item">
                                            <div className="pgi-image-holder">
                                                <div className="tt-image">
                                                    <figure>
                                                        <div className="anim-image-parallax-wrap">
                                                            <div className="anim-image-parallax-inner">
                                                                <img className="anim-image-parallax" src="https://d2s90tzqqa0vkb.cloudfront.net/team/06.png" data-src="team/06.png" />
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div> {/* /.pgi-image-holder */}
                                            <div className="tt-data-team anim-fadeinup">
                                                <h4 className="text-pink">HUGO BUSTAMANTE</h4>
                                                <p>MOTION DESIGNER</p>
                                            </div>
                                        </div>
                                        {/* End portfolio grid item */}

                                    </div> {/* /.ttgr-item-inner */}
                                </div>
                                {/* End tt-Grid item */}

                                <div className="tt-grid-item isotope-item">
                                    <div className="ttgr-item-inner">

                                        <div className="portfolio-grid-item">
                                            <div className="pgi-image-holder">
                                                <div className="tt-image">
                                                    <figure>
                                                        <div className="anim-image-parallax-wrap">
                                                            <div className="anim-image-parallax-inner">
                                                                <img className="anim-image-parallax" src="https://d2s90tzqqa0vkb.cloudfront.net/team/07.png" data-src="team/07.png" />
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div> {/* /.pgi-image-holder */}
                                            <div className="tt-data-team anim-fadeinup">
                                                <h4 className="text-pink">MAGALI HORST</h4>
                                                <p>GRAPHIC DESIGNER</p>
                                            </div>
                                        </div>
                                        {/* End portfolio grid item */}

                                    </div> {/* /.ttgr-item-inner */}
                                </div>
                                {/* End tt-Grid item */}

                                <div className="tt-grid-item isotope-item">
                                    <div className="ttgr-item-inner">

                                        <div className="portfolio-grid-item">
                                            <div className="pgi-image-holder">
                                                <div className="tt-image">
                                                    <figure>
                                                        <div className="anim-image-parallax-wrap">
                                                            <div className="anim-image-parallax-inner">
                                                                <img className="anim-image-parallax" src="https://d2s90tzqqa0vkb.cloudfront.net/team/08.png" data-src="team/08.png" />
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div> {/* /.pgi-image-holder */}
                                            <div className="tt-data-team anim-fadeinup">
                                                <h4 className="text-pink">SOFIA NAZAR</h4>
                                                <p>GRAPHIC DESIGNER</p>
                                            </div>
                                        </div>
                                        {/* End portfolio grid item */}

                                    </div> {/* /.ttgr-item-inner */}
                                </div>
                                {/* End tt-Grid item */}


                            </div>
                            {/* End tt-Grid items wrap  */}

                        </div>
                        {/* End tt-Grid */}

                    </div>
                    {/* End team */}

                </div>
            </div>






            <div className="tt-section padding-top-xlg-150 padding-bottom-lg-150">
                <div className="tt-section-inner tt-wrap-xl padding-rl-xl">

                    <div className="tt-heading tt-heading-xxlg tt-heading-left padding-left-lg-50">
                        <h2 className="tt-heading-title split-lines not-split">MEMBERS OF</h2>
                    </div>
                
                    <ul className="tt-logo-wall cl-col-44 anim-fadeinup">
                        <li><a href="https://www.oneclub.org/" className="cursor-alter" target="_blank" rel="noopener"><img src="/images/clients/client-1.png" alt="Client"/></a></li>
                        <li><a href="https://www.oneclub.org/adcawards" className="cursor-alter" target="_blank" rel="noopener"><img src="/images/clients/client-2.png" alt="Client"/></a></li>
                        <li><a href="https://www.oneclub.org/theoneshow" className="cursor-alter" target="_blank" rel="noopener"><img src="/images/clients/client-3.png" alt="Client"/></a></li>
                        <li><a href="https://www.oneclub.org/tdcawards" className="cursor-alter" target="_blank" rel="noopener"><img src="/images/clients/client-4.png" alt="Client"/></a></li>
                    </ul>

                </div>
            </div>








            {/*Scrolling Text*/}
            <div className="tt-section padding-top-xlg-120 padding-bottom-xlg-150">
            <div className="tt-section-inner">

                <div className="tt-scrolling-text font-bold text-pink anim-fadeinup" data-scroll-speed="40">
                <div className="tt-scrolling-text-inner" data-text="Explore our projects. Explore our projects. Explore our projects.">
                    Explore our projects. Explore our projects. Explore our projects.
                </div>
                </div>

            </div>
            </div>



        </div>  
    </>
  );
}
