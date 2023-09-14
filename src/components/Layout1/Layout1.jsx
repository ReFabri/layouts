import "./layout1.css";

const Layout1 = () => {
  return (
    <div>
      <section className="topContainer">
        <nav className="navbar">
          <img src="/layout1/logo.svg" alt="logo" />
          <ul className="links">
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
          <button className="btn-primary">Get Started</button>
        </nav>
        <div className="heroContainer">
          <div className="hero-box1">
            <h1>Bring everyone together to build better products.</h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="btn-primary">Get Started</button>
          </div>
          <div className="hero-box2">
            <img
              src="/layout1/bg-tablet-pattern.svg"
              className="pill-bg-top"
              alt="tablet pattern"
            />
            <img
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
          <div className="midBox2"></div>
        </div>
      </section>
    </div>
  );
};

export default Layout1;
