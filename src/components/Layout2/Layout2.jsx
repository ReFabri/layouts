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
            <ul role="list" className="nav-list">
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
      </main>
    </>
  );
};

export default Layout2;
