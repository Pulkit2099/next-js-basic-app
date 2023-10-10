import Link from "next/link";
import "../styles/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Use the Link component to navigate to the home page */}
        <Link href="/">Oyebusy Technology</Link>
      </div>
      <div className="navbar-right">
        {/* Use the Link component to navigate to the home page */}
        <Link href="/">Home</Link>
        
        {/* Add a link to the Services page */}
        <Link href="/Service">Services</Link>
        
        {/* Add more navigation links as needed */}
      </div>
    </nav>
  );
};

export default Navbar;
