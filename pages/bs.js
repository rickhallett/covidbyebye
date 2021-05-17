import Head from "next/head";
import { Component } from "react";

import RegistrationForm from "../components/RegistrationForm";

export default class BS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showQRForm: false,
    };
  }

  toggleQRForm() {
    this.setState({ showQRForm: !this.state.showQRForm });
  }

  render() {
    return (
      <div>
        <Head>
          {/* Google Tag Manager */}
          {/* End Google Tag Manager */}
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width" />
          <meta
            name="robots"
            content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />
          {/* This site is optimized with the Yoast SEO plugin v16.0.2 - https://yoast.com/wordpress/plugins/seo/ */}
          <title>
            Testing For All - Accessible and affordable COVID-19 testing.
          </title>
          <meta
            name="description"
            content="Get your people back to work. Safely. Accessible and affordable COVID-19 testing."
          />
          <link rel="canonical" href="https://www.testingforall.org/" />
          <meta property="og:locale" content="en_GB" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Testing For All - Accessible and affordable COVID-19 testing."
          />
          <meta
            property="og:description"
            content="Get your people back to work. Safely. Accessible and affordable COVID-19 testing."
          />
          <meta property="og:url" content="https://www.testingforall.org/" />
          <meta property="og:site_name" content="Testing For All" />
          <meta
            property="article:publisher"
            content="https://www.facebook.com/testingforall"
          />
          <meta
            property="article:modified_time"
            content="2021-04-14T19:41:06+00:00"
          />
          <meta
            property="og:image"
            content="https://www.testingforall.org/wp-content/uploads/2020/06/BlueSuit2-scaled.jpg"
          />
          <meta property="og:image:width" content={2560} />
          <meta property="og:image:height" content={1799} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@testingforall1" />
          {/* / Yoast SEO plugin. */}
          <link rel="dns-prefetch" href="//widget.trustpilot.com" />
          <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//code.ionicframework.com" />
          <link rel="dns-prefetch" href="//s.w.org" />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="Testing For All » Feed"
            href="https://www.testingforall.org/feed/"
          />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="Testing For All » Comments Feed"
            href="https://www.testingforall.org/comments/feed/"
          />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="Testing For All » Homepage Comments Feed"
            href="https://www.testingforall.org/homepage/feed/"
          />
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                "\nimg.wp-smiley,\nimg.emoji {\n\tdisplay: inline !important;\n\tborder: none !important;\n\tbox-shadow: none !important;\n\theight: 1em !important;\n\twidth: 1em !important;\n\tmargin: 0 .07em !important;\n\tvertical-align: -0.1em !important;\n\tbackground: none !important;\n\tpadding: 0 !important;\n}\n",
            }}
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
          <style
            id="woocommerce-inline-inline-css"
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                "\n.woocommerce form .form-row .required { visibility: visible; }\n",
            }}
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
            href="https://fonts.googleapis.com/css2?family=Raleway%3Awght%40300%3B400%3B600%3B700&display=swap&ver=all"
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
          <link
            rel="stylesheet"
            id="start-style-css"
            href="https://www.testingforall.org/wp-content/themes/WP-boilerplate/style.css?ver=1234"
            type="text/css"
            media="all"
          />
          <link
            rel="https://api.w.org/"
            href="https://www.testingforall.org/wp-json/"
          />
          <link
            rel="alternate"
            type="application/json"
            href="https://www.testingforall.org/wp-json/wp/v2/pages/2"
          />
          <link
            rel="EditURI"
            type="application/rsd+xml"
            title="RSD"
            href="https://www.testingforall.org/xmlrpc.php?rsd"
          />
          <link
            rel="wlwmanifest"
            type="application/wlwmanifest+xml"
            href="https://www.testingforall.org/wp-includes/wlwmanifest.xml"
          />
          <meta name="generator" content="WordPress 5.7.2" />
          <meta name="generator" content="WooCommerce 5.1.0" />
          <link rel="shortlink" href="https://www.testingforall.org/" />
          <link
            rel="alternate"
            type="application/json+oembed"
            href="https://www.testingforall.org/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.testingforall.org%2F"
          />
          <link
            rel="alternate"
            type="text/xml+oembed"
            href="https://www.testingforall.org/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.testingforall.org%2F&format=xml"
          />
          {/* START woopt Pixel Manager */}
          {/* START Google scripts */}
          {/* END Google scripts */}
          {/* END woopt Pixel Manager */}
          <noscript>
            &lt;style&gt;.woocommerce-product-gallery{"{"} opacity: 1
            !important; {"}"}&lt;/style&gt;
          </noscript>
          <link
            rel="icon"
            href="https://www.testingforall.org/wp-content/uploads/2020/05/cropped-favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            href="https://www.testingforall.org/wp-content/uploads/2020/05/cropped-favicon-192x192.png"
            sizes="192x192"
          />
          <link
            rel="apple-touch-icon"
            href="https://www.testingforall.org/wp-content/uploads/2020/05/cropped-favicon-180x180.png"
          />
          <meta
            name="msapplication-TileImage"
            content="https://www.testingforall.org/wp-content/uploads/2020/05/cropped-favicon-270x270.png"
          />
          <style
            type="text/css"
            id="wp-custom-css"
            dangerouslySetInnerHTML={{
              __html:
                "\n\t\t\t.tp-widget-wrapper { text-align: left !important; }\t\t",
            }}
          />
          {/* WooCommerce Google Analytics Integration */}
          {/* /WooCommerce Google Analytics Integration */}
          {/* Google Tag Manager (noscript) */}
          <noscript>
            &lt;iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PCD6MTT"
            height="0" width="0"
            style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
          </noscript>
          {/* End Google Tag Manager (noscript) */}
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
              </ul>{" "}
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
                <div className="w-100 d-flex flex-column flex-wrap flex-md-row align-items-center">
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
                <div className="w-100 d-flex flex-column flex-wrap flex-md-row align-items-center mt-2">
                  <a
                    href="https://www.testingforall.org/product/covid-19-immunity-tracker/"
                    className="button white mt-2 mr-5"
                  >
                    Get your Immunity Tracker
                  </a>
                </div>
                <div className="w-100 d-flex flex-column flex-wrap flex-md-row align-items-center mt-2">
                  <a
                    href="#"
                    className="button white mt-2 mr-5"
                    onClick={() => this.toggleQRForm()}
                  >
                    {!this.state.showQRForm && "Get Immunity QR Code"}
                    {this.state.showQRForm && "Hide Immunity QR Code"}
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
                />{" "}
              </div>
            </div>
          </div>
        </div>

        {this.state.showQRForm && (
          <div className="big_text_block" style={{ background: "#e6e7e8" }}>
            <div className="container pt-5 pb-5 px-5 text-center">
              <RegistrationForm />
            </div>
          </div>
        )}

        <div className="big_text_block" style={{ background: "" }}>
          <div className="container pt-5 pb-5 text-center">
            <h2>Our Mission: Testing For All</h2>
            <p>
              Our mission is to make COVID-19 testing accessible and affordable
              to everyone who needs it. We are proudly not-for-profit, and want
              to contribute to getting our communities back on track without
              enduring additional human and economic costs.{" "}
            </p>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n      .block_with_image#i299{\n        background:#e6e7e8;\n        color:#000000;\n      }\n    ",
          }}
        />
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
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n      .block_with_image#i692{\n        background:#098e8b;\n        color:#ffffff;\n      }\n    ",
          }}
        />
        <div className="block_with_image" id="i692">
          <div className="container pt-4 pb-4 pt-md-0 pb-md-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-6 col-md-6 pt-5 pb-5 order-2 order-md-1">
                <h2>We can support your business</h2>
                <p>
                  We are here to support you and your employees return to work
                  and get the economy moving again. At TFA we can provide
                  accurate, cost effective molecular and antibody testing for
                  your staff.{" "}
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
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials py-4">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6 py-4 d-flex flex-column">
                <div className="order-1 order-md-2">
                  <img
                    width={725}
                    height={382}
                    src="https://www.testingforall.org/wp-content/uploads/2020/12/tfa-testimonial-1.png"
                    className="attachment-large size-large"
                    alt=""
                    loading="lazy"
                    srcSet="https://www.testingforall.org/wp-content/uploads/2020/12/tfa-testimonial-1.png 725w, https://www.testingforall.org/wp-content/uploads/2020/12/tfa-testimonial-1-300x158.png 300w, https://www.testingforall.org/wp-content/uploads/2020/12/tfa-testimonial-1-600x316.png 600w"
                    sizes="(max-width: 725px) 100vw, 725px"
                  />
                </div>
                <div className="order-2 order-md-1">
                  <h3>Testimonials</h3>
                  <h5 className="mb-1">“Excellent service overall”</h5>
                  <p className="mb-1">
                    "Easy to collect the sample, easy to post it, results two
                    days later. And excellent customer service!! Thank you,
                    you're doing an amazing job!"
                  </p>
                  <p className="mb-0">
                    <strong>– Julia</strong>
                  </p>
                </div>
              </div>
              <div className="col-md-6 py-4 d-flex flex-column">
                <div className="order-1 order-md-1">
                  <img
                    width={714}
                    height={378}
                    src="https://www.testingforall.org/wp-content/uploads/2020/12/tfa-testimonial-2.png"
                    className="attachment-large size-large"
                    alt=""
                    loading="lazy"
                    srcSet="https://www.testingforall.org/wp-content/uploads/2020/12/tfa-testimonial-2.png 714w, https://www.testingforall.org/wp-content/uploads/2020/12/tfa-testimonial-2-300x159.png 300w, https://www.testingforall.org/wp-content/uploads/2020/12/tfa-testimonial-2-600x318.png 600w"
                    sizes="(max-width: 714px) 100vw, 714px"
                  />
                </div>
                <div className="order-2 order-md-2">
                  <h5 className="mb-1">“Test to Release”</h5>
                  <p className="mb-1">
                    “I was well-informed in advance of each stage and everything
                    went smoothly and as expected. Very good. My result came
                    through on a Saturday just over 24 hours after DX drop off.
                    Excellent, I definitely recommend."
                  </p>
                  <p className="mb-0">
                    <strong>– Tom</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n      .block_with_image#i11{\n        background:#e6e7e8;\n        color:#000000;\n      }\n    ",
          }}
        />
        <div className="block_with_image" id="i11">
          <div className="container pt-4 pb-4 pt-md-0 pb-md-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-6 col-md-6 pt-5 pb-5 order-2 order-md-2">
                <h2>Fast results for effective action</h2>
                <p>
                  Our network of laboratory partners is ready to go, bringing
                  you the critical test result data that you need to keep
                  yourself and those around you safe.{" "}
                </p>
                <a href="/how-it-works/" className="mt-4 button ">
                  How it works
                </a>
              </div>
              <div className="col-md-6 pt-4 pb-4 pt-md-0 pb-md-0 pt-lg-0 pb-lg-0order-1 order-md-1">
                <img
                  width={410}
                  height={213}
                  src="https://www.testingforall.org/wp-content/uploads/2020/05/img2.jpg"
                  className="d-flex"
                  alt=""
                  loading="lazy"
                  srcSet="https://www.testingforall.org/wp-content/uploads/2020/05/img2.jpg 410w, https://www.testingforall.org/wp-content/uploads/2020/05/img2-300x156.jpg 300w"
                  sizes="(max-width: 410px) 100vw, 410px"
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="our_principles">
          <div className="container pt-5 pb-5">
            <div className="row ">
              <div className="col-md-6 pb-4">
                <h2>Our principles</h2>
                <p>
                  Confidence in our process is critical, so we take a
                  science-backed approach and carefully vet our partners.{" "}
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
              </div>{" "}
            </div>
            <div id="trust-pilot-widget" className="p5" />
          </div>
        </div>
        <footer id="footer" className="pt-5 pb-5">
          <div className="container">
            <div className="row pb-4">
              <div className="col-md-6 lgtext d-flex align-items-center">
                <aside id="text-2" className="widget widget_text">
                  {" "}
                  <div className="textwidget">
                    <p>
                      Making COVID-19 testing more accessible and affordable.
                    </p>
                  </div>
                </aside>{" "}
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
                </ul>{" "}
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
                </ul>{" "}
              </div>
              <div className="col-md-6 d-flex align-items-center copy">
                Registered Charitable Company No: 12570433 | ICO: ZA755829
                <br />
                CQC Registered Provider Number: 1-8893500356
              </div>
            </div>
          </div>
        </footer>
        {/* WooCommerce JavaScript */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@media(max-width:991px) and screen and (max-width: 782px){ html{ margin-top:0 !important; } #wpadminbar{ display: none !important; } }@media(max-width:991px) { html{ margin-top:0 !important; } #wpadminbar{ display: none !important; } }",
          }}
        />
      </div>
    );
  }
}
