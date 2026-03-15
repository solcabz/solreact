import React, { useState } from "react";
import './services.css'

function Services() {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }


  return (
    <section className="section services" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What I offer</span>

      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">Product <br /> Designer</h3>
          </div>

          <span className="services_button" onClick={ () => toggleTab(1) }>
            View more
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services_modal active_modal" : "services_modal"}>
            <div className="services_modal-content">
              <i className="uil uil-times services_modal-close"  onClick={ () => toggleTab(0) } ></i>

              <h3 className="services_modal-title">Visual Designer</h3>
              <p className="services_modal-description">
                Designing intuitive and user-friendly products from concept to prototype.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Develop engaging user interfaces
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Build and implement webpages</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Provide sample web designs to showcase style and functionality</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">Web <br /> Developer</h3>
          </div>

          <span className="services_button" onClick={ () => toggleTab(2) }>
            View more
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "services_modal active_modal" : "services_modal"}>
            <div className="services_modal-content">
              <i className="uil uil-times services_modal-close" onClick={ () => toggleTab(0) }></i>

              <h3 className="services_modal-title">Web Developer</h3>
              <p className="services_modal-description">
                Building responsive and interactive websites with clean code and modern technologies.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Develop responsive and interactive websites using modern technologies.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Implement backend functionality including databases, APIs, and server-side logic.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Optimize website performance for speed, security, and SEO.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Maintain and update websites to ensure smooth operation.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-edit services_icon"></i>
            <h3 className="services_title">Frontend <br /> Design</h3>
          </div>

          <span className="services_button" onClick={ () => toggleTab(3) }>
            View more
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "services_modal active_modal" : "services_modal"}>
            <div className="services_modal-content">
            <i className="uil uil-times services_modal-close"  onClick={ () => toggleTab(0) } ></i>

              <h3 className="services_modal-title">Frontend Designer</h3>
              <p className="services_modal-description">
                Creating visually appealing, responsive front-end layouts for web applications.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Design visually appealing and intuitive interfaces for websites and web apps.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Convert designs into responsive layouts using HTML, CSS, and JavaScript frameworks.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Enhance user experience (UX) with interactive elements, animations, and clean navigation.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Collaborate with developers to ensure seamless integration of design and functionalityv.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
