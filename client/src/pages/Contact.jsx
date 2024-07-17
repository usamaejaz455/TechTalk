import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // your form submission logic goes here
    console.log(contactData);
  };

  return (
    <div>
      <section className="section-content">
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1>
        </div>

        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img
              src="/images/tech-talk.jpeg"
              alt="error loading image"
              width="400"
              height="400"
            />
          </div>

          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="username"
                  id="username"
                  name="username"
                  value={contactData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Username:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="6"
                  value={contactData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>
      </section>
      <iframe
  class="full-width-map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.368221297754!2d73.09441777515244!3d33.49179574711649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dff380cf36f65f%3A0xa7953b3b340439b1!2sHub%20camercial%208!5e0!3m2!1sen!2s!4v1721249082092!5m2!1sen!2s"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>

    </div>
  );
};
export default Contact;
