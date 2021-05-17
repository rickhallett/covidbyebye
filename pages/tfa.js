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
            id="bootstrap-css"
            href="https://www.testingforall.org/wp-content/themes/WP-boilerplate/libs/bootstrap-4.4.1-dist/css/bootstrap.min.css?ver=5.7.2"
            type="text/css"
            media="all"
          />

          <link rel="stylesheet" href="/css/index.css" />
          <script
            type="text/javascript"
            src="https://www.testingforall.org/wp-includes/js/jquery/jquery.min.js?ver=3.5.1"
            id="jquery-core-js"
          ></script>
          <script
            type="text/javascript"
            src="https://www.testingforall.org/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2"
            id="jquery-migrate-js"
          ></script>
          <script
            type="text/javascript"
            src="https://www.testingforall.org/wp-content/themes/WP-boilerplate/libs/popper/popper.min.js?ver=5.7.2"
            id="popper-js"
          ></script>
          <script
            type="text/javascript"
            src="https://www.testingforall.org/wp-content/themes/WP-boilerplate/libs/bootstrap-4.4.1-dist/js/bootstrap.min.js?ver=5.7.2"
            id="bootstrap-script-js"
          ></script>
          <script
            type="text/javascript"
            src="https://www.testingforall.org/wp-content/themes/WP-boilerplate/libs/smoothscroll/SmoothScroll.js?ver=5.7.2"
            id="SmoothScroll-js"
          ></script>
          <script
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/5.0.5/jquery.inputmask.min.js?ver=5.7.2"
            id="inputMask-js"
          ></script>
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
            </nav>
            <a href="#" className="navicon">
              <i />
              <i />
              <i />
              <i />
            </a>
          </div>
        </header>

        <footer id="footer" className="pt-5 pb-5">
          <div className="container">
            <div className="row pb-4">
              <div className="col-md-6 lgtext d-flex align-items-center">
                <aside id="text-2" className="widget widget_text">
                  <div className="textwidget">
                    <p>
                      Making COVID-19 testing more accessible and affordable.
                    </p>
                  </div>
                </aside>
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
