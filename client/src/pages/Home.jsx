const Home = () => {
  return (
    <div>
      <main>
        <section>
          <div className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                <p>We are the World Best IT Company</p>
                <h1>Welcome to Tech Talk</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto eum cupiditate eaque ipsum illo, praesentium ad
                  ipsam rem possimus, voluptates officia dignissimos accusamus.
                  Quam distinctio unde numquam rem voluptates magni laborum!
                </p>
                <div className="btn btn-group">
                    <a href="/contact">
                        <button className="btn">Contact Us</button>
                    </a>
                    <a href="/service">
                        <button className="btn secondary-btn">Learn More</button>
                    </a>
                </div>
              </div>

              <div className="hero-image">
                <img src="/images/home.jpeg" alt="error loading image" width="400" height="400" />
            </div>
            </div>
          </div>
        </section>
      </main>
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
        <div className="div1">
            <h2>50+</h2>
            <p>Registered Companies</p>
        </div>
        <div className="div1">
            <h2>500+</h2>
            <p>Happy Clients</p>
        </div>
        <div className="div1">
            <h2>1000+</h2>
            <p>Well Known Developers</p>
        </div>
        <div className="div1">
            <h2>24/7</h2>
            <p>Service</p>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
