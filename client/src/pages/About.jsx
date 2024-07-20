import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-section">
        <main className="about-main">
          <div className="section-about">
            <div className="container grid grid-two-cols">
              <div className="about-image">
                <img
                  src="/images/home.jpeg"
                  alt="Error Loading Picture"
                  className="about-image"
                />
              </div>
              <div className="about-content">
                <h1 className="main-heading mb-3">About Us</h1>
                <p className="about-text">
                  Welcome to our application! We are dedicated to providing you with the best experience possible. Our team works hard to bring you the latest and greatest features. Stay tuned for more updates and improvements.
                </p>
                <p className="about-text">
                  Our mission is to make your life easier with our innovative solutions. We value your feedback and strive to exceed your expectations.
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default About;
