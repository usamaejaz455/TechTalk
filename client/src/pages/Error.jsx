import React from "react";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div>
      <section id="erorr-page">
        <div className="content">
          <h2 className="header">404</h2>
          <h4>Sorry!Page not Found</h4>
          <p>
            We are unable to find the page you are looking for. Please check the
            URL and try again. If the issue persists, please contact our support
            team.
          </p>
          <div className="btns">
            <NavLink to="/">Return Home</NavLink>
            <NavLink to="/contact">Report Problem</NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Error;
