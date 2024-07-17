import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(user, null, 2));
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
