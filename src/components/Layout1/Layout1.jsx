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
          <button>This is a button</button>
        </nav>
        <div>
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Layout1;
