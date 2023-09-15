import "./layout1.css";

const Layout1 = () => {
  return (
    <div className="layout1-container">
      <section className="topContainer">
        <img
          src="/layout1/bg-tablet-pattern.svg"
          className="pill-bg pill-bg-top"
          alt="tablet pattern"
        />
        <img
          src="/layout1/bg-tablet-pattern.svg"
          className="pill-bg pill-bg-mid"
          alt="tablet pattern"
        />
        <nav className="navbar">
          <img src="/layout1/logo.svg" alt="logo" />
          <ul className="links">
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
          <button className="btn btn-primary">Get Started</button>
        </nav>
        <div className="heroContainer">
          <div className="hero-box1">
            <h1>Bring everyone together to build better products.</h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="hero-box2">
            <img
              className="hero-img"
              src="/layout1/illustration-intro.svg"
              alt="illustration introduction"
            />
          </div>
        </div>
        <div className="midContainer">
          <div className="midBox1">
            <h2>What&apos;s different about Manage?</h2>
            <p>
              Manage provide all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          <div className="midBox2">
            <ul>
              <li>
                <div>
                  <span className="pill-number">01</span>
                </div>
                <div>
                  <h3>Track company-wide progress</h3>
                  <p>
                    See how your day-to-day tasks fit into the wider vision. Go
                    from tracking progress at the milestone level all the way
                    done to the smallest of details. Never lose sight of the
                    bigger picture again.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <span className="pill-number">02</span>
                </div>
                <div>
                  <h3>Advanced built-in reports</h3>
                  <p>
                    Set internal delivery estimates and track progress toward
                    company goals. Our customizable dashboard helps you build
                    out the reports you need to keep key stakeholders informed.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <span className="pill-number">03</span>
                </div>
                <div>
                  <h3>Everything you need in one place</h3>
                  <p>
                    Stop jumping from one service to another to communicate,
                    store files, track tasks and share documents. Manage offers
                    an all-in-one team productivity solution.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bottomContainer">
        <div className="carouselContainer"></div>
        <div className="ctaContainer">
          <h2>Simplify how your team works today.</h2>
          <div className="ctaBtnContainer">
            <button className="btn btn-secondary">Get Started</button>
          </div>
        </div>
        <footer className="footerContainer">
          <div>LOGO</div>
          <div>
            <ul>
              <li>nav1</li>
              <li>nav2</li>
              <li>nav3</li>
              <li>nav4</li>
              <li>nav5</li>
            </ul>
          </div>
          <div>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Layout1;
