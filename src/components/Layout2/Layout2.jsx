import "./layout2.css";
import { Link } from "react-router-dom";

const Layout2 = () => {
  return (
    <>
      <header className="primary-header">
        <div className="container">
          <Link to="#">
            <img src="/layout1/logo.svg" alt="Manage Logo" />
          </Link>
          <nav className="primary-navigation">
            <ul role="list" aria-label="primary" className="nav-list">
              <li>
                <Link to="#">Pricing</Link>
              </li>
              <li>
                <Link to="#">Product</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
              <li>
                <Link to="#">Community</Link>
              </li>
            </ul>
          </nav>
          <button className="button">Get Started</button>
        </div>
      </header>

      <main>
        <section>
          <div className="container">
            <div className="even-columns">
              <div>
                <h1 className="fs-primary-heading fw-bold">
                  Bring everyone together to build better products.
                </h1>
                <p>
                  Manage makes it simple for software teams to plan day-to-day
                  tasks while keeping the larger team goals in view.
                </p>
                <button className="button">Get Started</button>
              </div>
              <div>
                <img
                  src="/layout1/illustration-intro.svg"
                  alt="illustration introduction"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="even-columns">
              <div>
                <h2 className="fs-secondary-header fw-bold">
                  What&apos;s different about Manage?
                </h2>
                <p>
                  Manage provides all the functionality your team needs, without
                  the complexity. Our software is tailor-made for modern digital
                  product teams.
                </p>
              </div>
              <div>
                <ul className="numbered-items" role="list">
                  <li>
                    <h3 className="fs-600 fw-bold">
                      Track company-wide progress
                    </h3>
                    <p>
                      See how your day-to-day tasks fit into the wider vision.
                      Go from tracking progress at the milestone level all the
                      way done to the smallest of details. Never lose sight of
                      the bigger picture again.
                    </p>
                  </li>
                  <li>
                    <h3 className="fs-600 fw-bold">
                      Advanced built-in reports
                    </h3>
                    <p>
                      Set internal delivery estimates and track progress toward
                      company goals. Our customizable dashboard helps you build
                      out the reports you need to keep key stakeholders
                      informed.
                    </p>
                  </li>
                  <li>
                    <h3 className="fs-600 fw-bold">
                      Everything you need in one place
                    </h3>
                    <p>
                      Stop jumping from one service to another to communicate,
                      store files, track tasks and share documents. Manage
                      offers an all-in-one team productivity solution.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="carousel">
          <h2 className="fs-secondary-heading">What they&apos;ve said</h2>
          {/* Carousel */}
          <button className="button">Get Started</button>
        </section>

        <section className="cta | bg-primary-400 text-neutral-100">
          <div className="container">
            <div className="even-columns">
              <div>
                <p className="fs-secondary-heading fw-bold"></p>
              </div>
              <div>
                <button className="button" data-type="inverted">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-neutral-900 text-neutral-100">
        <div className="container">
          <div className="even-columns">
            <div>
              <Link to="#">
                <img src="/layout1/logo.svg" alt="Manage Logo" />
              </Link>
              <ul role="list" aria-label="social links">
                <li>
                  <Link to="#" aria-label="facebook"></Link>
                </li>
                <li>
                  <Link to="#" aria-label="youtube"></Link>
                </li>
                <li>
                  <Link to="#" aria-label="twitter"></Link>
                </li>
                <li>
                  <Link to="#" aria-label="pinterest"></Link>
                </li>
                <li>
                  <Link to="#" aria-label="instagram"></Link>
                </li>
              </ul>
            </div>
            <div>
              <nav className="footer-nav" aria-label="footer">
                <ul role="list">
                  <li>
                    <Link to="#">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Pricing</Link>
                  </li>
                  <li>
                    <Link to="#">Products</Link>
                  </li>
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Careers</Link>
                  </li>
                  <li>
                    <Link to="#">Community</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <form action="">
                <input type="email" />
                <button className="button">Go</button>
              </form>
              <p>Copyright 2020. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout2;
