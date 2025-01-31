import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer  sm:footer-horizontal place-items-center bg-[#0f1c1c] text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link to="/events" className="link link-hover">
            Events
          </Link>
          <Link to="/artists" className="link link-hover">
            Artists
          </Link>
          <Link to="/categories" className="link link-hover">
            Categories
          </Link>
          <Link to="/venues" className="link link-hover">
            Venues
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div className="bg-[#0f1c1c] pb-4 text-center text-[#b58753]">
        Developed with 🤍 by Tanjina
      </div>
    </footer>
  );
};

export default Footer;
