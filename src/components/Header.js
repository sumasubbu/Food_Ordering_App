import logo from '../../asset/logo.png'

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="brand-logo" className="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;