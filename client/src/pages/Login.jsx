import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // handling input valuea

const handleInput=(event)=>{
  let name=event.target.name;
  let value=event.target.value;

  setUser({...user,[name]:value}); 
};

  // handling form submission

  const handleSubmit=(event)=>{
    event.preventDefault();
    alert(user);
  };

  return (
    <div>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img
                  src="/images/tech-talk.jpeg"
                  alt="Error Loading Picture"
                  width="400"
                  height="400"
                />
              </div>
            </div>
            <div className="login-form">
              <h1 className="main-heading mb-3">Login Form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    id="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    id="password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>
                <br />
                <div>
                  <button type="submit" className="btn-btn-submit">
                    Login Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Login;
