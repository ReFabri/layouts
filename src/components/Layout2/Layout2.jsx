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
    </>
  );
};

export default Layout2;
