import Head from "next/head";
import { Component } from "react";
import QRcode from "qrcode.react";
import axios from "axios";

import Footer from "../components/Footer";

let backendURL =
  process.env.NODE_ENV == "production"
    ? "https://evening-bastion-69590.herokuapp.com"
    : "http://localhost:3123";

// backendURL = "https://evening-bastion-69590.herokuapp.com"; // dev override

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Head>
          <title>Covid Bye Bye</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
          />
          <link
            rel="stylesheet"
            id="wp-block-library-css"
            href="https://www.testingforall.org/wp-includes/css/dist/block-library/style.min.css?ver=5.7.2"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="wc-block-vendors-style-css"
            href="https://www.testingforall.org/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/vendors-style.css?ver=4.4.3"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="wc-block-style-css"
            href="https://www.testingforall.org/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/style.css?ver=4.4.3"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="mpp_gutenberg-css"
            href="https://www.testingforall.org/wp-content/plugins/metronet-profile-picture/dist/blocks.style.build.css?ver=2.5.0"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="contact-form-7-css"
            href="https://www.testingforall.org/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.4"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="woocommerce-layout-css"
            href="https://www.testingforall.org/wp-content/plugins/woocommerce/assets/css/woocommerce-layout.css?ver=5.1.0"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="woocommerce-smallscreen-css"
            href="https://www.testingforall.org/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreen.css?ver=5.1.0"
            type="text/css"
            media="only screen and (max-width: 768px)"
          />
          <link
            rel="stylesheet"
            id="woocommerce-general-css"
            href="https://www.testingforall.org/wp-content/plugins/woocommerce/assets/css/woocommerce.css?ver=5.1.0"
            type="text/css"
            media="all"
          />

          <link
            rel="stylesheet"
            id="bootstrap-css"
            href="https://www.testingforall.org/wp-content/themes/WP-boilerplate/libs/bootstrap-4.4.1-dist/css/bootstrap.min.css?ver=5.7.2"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="animate-css"
            href="https://www.testingforall.org/wp-content/themes/WP-boilerplate/libs/animate-css/animate.css?ver=all"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="font-style-css"
            href="https://fonts.googleapis.com/css2?family=Raleway%3Awght%40300%3B400%3B600%3B700&#038;display=swap&#038;ver=all"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="ionicons-css"
            href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css?ver=all"
            type="text/css"
            media="all"
          />
          <link rel="stylesheet" href="/css/index.css" />
        </Head>

        <header id="header" className="d-flex align-items-center">
          <div className="container d-flex justify-content-between align-items-center">
            <a href="https://www.testingforall.org/" className="logo">
              <img
                src="https://www.testingforall.org/wp-content/themes/WP-boilerplate/images/logo.svg"
                alt="Testing For All"
              />
            </a>
            <nav className="main d-flex flex-column flex-lg-row justify-content-center justify-content-lg-end align-items-center">
              <ul id="menu-main-menu" className="menu">
                <li
                  id="menu-item-25617"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25617"
                >
                  <a href="https://www.testingforall.org/employers/">
                    Businesses
                  </a>
                </li>
                <li
                  id="menu-item-395"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-395"
                >
                  <a href="https://www.testingforall.org/individuals/">
                    Individuals
                  </a>
                </li>
                <li
                  id="menu-item-850"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-850"
                >
                  <a href="https://www.testingforall.org/how-it-works/">
                    How it works
                  </a>
                </li>
                <li
                  id="menu-item-14"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-14"
                >
                  <a href="#">Resources</a>
                  <ul className="sub-menu">
                    <li
                      id="menu-item-180"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-180"
                    >
                      <a href="https://www.testingforall.org/blog/">
                        Blog
                        <span>Latest news, insight and product updates</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-10103"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10103"
                    >
                      <a href="https://www.testingforall.org/contact/">
                        Contact &amp; Support
                        <span>Get in touch with our team</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-676"
                  className="accent menu-item menu-item-type-custom menu-item-object-custom menu-item-676"
                >
                  <a href="http://testingforall.app/activate-kit">
                    Activate kit
                  </a>
                </li>
                <li
                  id="menu-item-1010"
                  className="cart menu-item menu-item-type-post_type menu-item-object-page menu-item-1010"
                >
                  <a href="https://www.testingforall.org/basket/">
                    <i className="ion-bag"> </i>
                  </a>
                </li>
                <li
                  id="menu-item-9287"
                  className="user menu-item menu-item-type-custom menu-item-object-custom menu-item-9287"
                >
                  <a href="/my-account/">
                    <i className="ion-person"> </i>
                  </a>
                </li>
              </ul>
              {"{"}" "{"}"}
            </nav>
            <a href="#" className="navicon">
              <i />
              <i />
              <i />
              <i />
            </a>
          </div>
        </header>
        <div
          className="home_hero d-flex flex-row align-items-center"
          style={{ background: "#126873" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-7 d-flex flex-column align-items-start justify-content-center pb-4 pb-md-0">
                <h1>Accessible and affordable COVID-19 testing. </h1>
                <p>Get the UK back to normal. Safely.</p>
                <div className="w-100 d-flex flex-column flex-wrap flex-md-row aling-items-center">
                  <a
                    href="https://www.testingforall.org/product/covid-19-swab-pcr-test"
                    className="button mt-2 mr-md-4"
                  >
                    Get your flexible PCR test
                  </a>
                  <a
                    href="https://www.testingforall.org/product/day-2-day-8"
                    className="button mt-3 mt-md-2 ml-md-4"
                  >
                    Get your Day 2 &amp; 8 test package
                  </a>
                </div>
                <div className="w-100 d-flex flex-column flex-wrap flex-md-row aling-items-center mt-2">
                  <a
                    href="https://www.testingforall.org/product/covid-19-immunity-tracker/"
                    className="button white mt-2 mr-5"
                  >
                    Get your Immunity Tracker
                  </a>
                </div>
              </div>
              <div className="col-md-5 d-flex align-items-end">
                <img
                  width={530}
                  height={600}
                  src="https://www.testingforall.org/wp-content/uploads/2021/01/testing-for-all-1.png"
                  className="attachment-large size-large"
                  alt="Testing for all"
                  loading="lazy"
                  srcSet="https://www.testingforall.org/wp-content/uploads/2021/01/testing-for-all-1.png 530w, https://www.testingforall.org/wp-content/uploads/2021/01/testing-for-all-1-265x300.png 265w"
                  sizes="(max-width: 530px) 100vw, 530px"
                />
                {"{"}" "{"}"}
              </div>
            </div>
          </div>
        </div>
        <div className="big_text_block" style={{ background: "#e6e7e8" }}>
          <div className="container pt-5 pb-5 text-center">
            <h2>Our Mission: Testing For All</h2>
            <p>
              Our mission is to make COVID-19 testing accessible and affordable
              to everyone who needs it. We are proudly not-for-profit, and want
              to contribute to getting our communities back on track without
              enduring additional human and economic costs.{"{"}" "{"}"}
            </p>
          </div>
        </div>
        <div className="block_with_image" id="i299">
          <div className="container pt-4 pb-4 pt-md-0 pb-md-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-6 col-md-6 pt-5 pb-5 order-2 order-md-2">
                <h2>For Individuals</h2>
                <p>
                  We make high quality COVID-19 tests available for individuals
                  wishing to understand whether they are currently infected
                  (viral presence testing), if they have been exposed to the
                  virus in the past (antibody test) and to measure existing
                  antibodies created from natural infection and vaccination
                  (immunity tracker).
                </p>
                <a href="/individuals/" className="mt-4 button ">
                  Tests for Individuals
                </a>
              </div>
              <div className="col-md-6 pt-4 pb-4 pt-md-0 pb-md-0 pt-lg-0 pb-lg-0order-1 order-md-1">
                <img
                  width={600}
                  height={593}
                  src="https://www.testingforall.org/wp-content/uploads/2021/01/Crouching_Man_HP_Image.png"
                  className="d-flex"
                  alt=""
                  loading="lazy"
                  srcSet="https://www.testingforall.org/wp-content/uploads/2021/01/Crouching_Man_HP_Image.png 600w, https://www.testingforall.org/wp-content/uploads/2021/01/Crouching_Man_HP_Image-300x297.png 300w, https://www.testingforall.org/wp-content/uploads/2021/01/Crouching_Man_HP_Image-100x100.png 100w, https://www.testingforall.org/wp-content/uploads/2021/01/Crouching_Man_HP_Image-24x24.png 24w, https://www.testingforall.org/wp-content/uploads/2021/01/Crouching_Man_HP_Image-48x48.png 48w, https://www.testingforall.org/wp-content/uploads/2021/01/Crouching_Man_HP_Image-96x96.png 96w"
                  sizes="(max-width: 600px) 100vw, 600px"
                />
                {"{"}" "{"}"}
              </div>
            </div>
          </div>
        </div>
        <div
          className="block_with_image"
          id="i692"
          style={{ background: "#098e8b" }}
        >
          <div className="container pt-4 pb-4 pt-md-0 pb-md-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-6 col-md-6 pt-5 pb-5 order-2 order-md-1">
                <h2>We can support your business</h2>
                <p>
                  We are here to support you and your employees return to work
                  and get the economy moving again. At TFA we can provide
                  accurate, cost effective molecular and antibody testing for
                  your staff.{"{"}" "{"}"}
                </p>
                <a href="/employers/" className="mt-4 button ">
                  Tests for Employers
                </a>
              </div>
              <div className="col-md-6 pt-4 pb-4 pt-md-0 pb-md-0 pt-lg-0 pb-lg-0order-1 order-md-2">
                <img
                  width={590}
                  height={253}
                  src="https://www.testingforall.org/wp-content/uploads/2020/05/img1.jpg"
                  className="d-flex"
                  alt=""
                  loading="lazy"
                  srcSet="https://www.testingforall.org/wp-content/uploads/2020/05/img1.jpg 590w, https://www.testingforall.org/wp-content/uploads/2020/05/img1-416x178.jpg 416w, https://www.testingforall.org/wp-content/uploads/2020/05/img1-300x129.jpg 300w"
                  sizes="(max-width: 590px) 100vw, 590px"
                />
                {"{"}" "{"}"}
              </div>
            </div>
          </div>
        </div>
        <div className="our_principles" style={{ background: "#e6e7e8" }}>
          <div className="container pt-5 pb-5">
            <div className="row ">
              <div className="col-md-6 pb-4">
                <h2>Our principles</h2>
                <p>
                  Confidence in our process is critical, so we take a
                  science-backed approach and carefully vet our partners.{"{"}"
                  "{"}"}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="item col-md-6 pb-3 pt-3 d-flex justify-contain-start align-items-start">
                <img
                  width={71}
                  height={61}
                  src="https://www.testingforall.org/wp-content/uploads/2020/05/i1.png"
                  className="attachment-medium size-medium"
                  alt=""
                  loading="lazy"
                />
                <div>
                  <h6>SAFETY FIRST</h6>
                  <p>
                    Any work that Testing For All enables will prioritise the
                    safety of those being tested, and those working to
                    distribute or provide the tests.
                  </p>
                </div>
              </div>
              <div className="item col-md-6 pb-3 pt-3 d-flex justify-contain-start align-items-start">
                <img
                  width={71}
                  height={61}
                  src="https://www.testingforall.org/wp-content/uploads/2020/05/i3.png"
                  className="attachment-medium size-medium"
                  alt=""
                  loading="lazy"
                />
                <div>
                  <h6>BEST MARGINAL IMPACT</h6>
                  <p>
                    Our focus is on enabling additional tests in the UK; and to
                    reach people who cannot currently access affordable testing.
                  </p>
                </div>
              </div>
              <div className="item col-md-6 pb-3 pt-3 d-flex justify-contain-start align-items-start">
                <img
                  width={71}
                  height={61}
                  src="https://www.testingforall.org/wp-content/uploads/2020/05/i2.png"
                  className="attachment-medium size-medium"
                  alt=""
                  loading="lazy"
                />
                <div>
                  <h6>NOT FOR PROFIT</h6>
                  <p>
                    We price tests at the minimum cost we can based on the
                    volume of testing.
                  </p>
                </div>
              </div>
              <div className="item col-md-6 pb-3 pt-3 d-flex justify-contain-start align-items-start">
                <img
                  width={71}
                  height={61}
                  src="https://www.testingforall.org/wp-content/uploads/2020/05/i4.png"
                  className="attachment-medium size-medium"
                  alt=""
                  loading="lazy"
                />
                <div>
                  <h6>HIGHLY EFFICIENT</h6>
                  <p>
                    Designed from ground up for endemic situations we optimise
                    fast, effective test collection, processing and results
                    dissemination.
                  </p>
                </div>
              </div>
              {"{"}" "{"}"}
            </div>
            <div id="trust-pilot-widget" className="p5" />
          </div>
        </div>
        <footer id="footer" className="pt-5 pb-5">
          <div className="container">
            <div className="row pb-4">
              <div className="col-md-6 lgtext d-flex align-items-center">
                <aside id="text-2" className="widget widget_text">
                  {"{"}" "{"}"}
                  <div className="textwidget">
                    <p>
                      Making COVID-19 testing more accessible and affordable.
                    </p>
                  </div>
                </aside>
                {"{"}" "{"}"}
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <ul id="menu-footer-menu" className="menu">
                  <li
                    id="menu-item-937"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-937"
                  >
                    <a href="https://www.testingforall.org/how-it-works/">
                      How it works
                    </a>
                  </li>
                  <li
                    id="menu-item-141"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-141"
                  >
                    <a href="https://www.testingforall.org/partners/">
                      Partners
                    </a>
                  </li>
                  <li
                    id="menu-item-353"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-353"
                  >
                    <a href="https://testingforall.recruitee.com">Jobs</a>
                  </li>
                  <li
                    id="menu-item-199"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-199"
                  >
                    <a href="https://www.testingforall.org/blog/">Blog</a>
                  </li>
                  <li
                    id="menu-item-950"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-950"
                  >
                    <a href="https://www.testingforall.org/about-us/">
                      About Us
                    </a>
                  </li>
                  <li
                    id="menu-item-198"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-198"
                  >
                    <a href="https://www.testingforall.org/privacy-policy/">
                      Privacy Policy
                    </a>
                  </li>
                  <li
                    id="menu-item-10194"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10194"
                  >
                    <a href="https://www.testingforall.org/contact/">
                      Contact Us
                    </a>
                  </li>
                  <li
                    id="menu-item-290"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-290"
                  >
                    <a href="https://www.testingforall.org/terms-of-service/">
                      Terms of Service
                    </a>
                  </li>
                </ul>
                {"{"}" "{"}"}
              </div>
            </div>
            <hr />
            <div className="row pt-2">
              <div className="col-md-6 socials">
                <ul id="menu-social-menu" className="menu">
                  <li
                    id="menu-item-24"
                    className="linkedin menu-item menu-item-type-custom menu-item-object-custom menu-item-24"
                  >
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://www.linkedin.com/company/testing-for-all/"
                    />
                  </li>
                  <li
                    id="menu-item-25"
                    className="twitter menu-item menu-item-type-custom menu-item-object-custom menu-item-25"
                  >
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://twitter.com/testing_for_all"
                    />
                  </li>
                  <li
                    id="menu-item-26"
                    className="facebook menu-item menu-item-type-custom menu-item-object-custom menu-item-26"
                  >
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://www.facebook.com/testingforall"
                    />
                  </li>
                  <li
                    id="menu-item-142"
                    className="instagram menu-item menu-item-type-custom menu-item-object-custom menu-item-142"
                  >
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://www.instagram.com/testingforall/"
                    />
                  </li>
                </ul>
                {"{"}" "{"}"}
              </div>
              <div className="col-md-6 d-flex align-items-center copy">
                Registered Charitable Company No: 12570433 | ICO: ZA755829
                <br />
                CQC Registered Provider Number: 1-8893500356
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
