import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="footer-love">Made with Love</p>
      <span>&#128147;</span>
      <Link to="/team" style={{ textDecoration: "none" }}>
        <p className="footer-link">Meet the Developers</p>
      </Link>
    </div>
  );
}

export default Footer;
