import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storetokenInLS } = useAuth();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const res_data = await response.json();
        storetokenInLS(res_data.token);
        alert("Login successful");
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        alert("Invalid Credentials");
      }
    } catch (e) {
      console.error("Error:", e);
    }
  };

  return (
    <div className="login-page">
      <section className="login-section">
        <main className="login-main">
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img
                  src="/images/tech-talk.jpeg"
                  alt="Error Loading Picture"
                  className="login-image"
                />
              </div>
              <div className="login-form">
                <h1 className="main-heading mb-3">Login Form</h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                      className="form-input"
                    />
                  </div>
                  <button type="submit" className="btn-submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Login;
