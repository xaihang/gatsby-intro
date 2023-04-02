import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <h1>Xai Hang</h1>
      <div className="links">
        <Link to="/">About</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Resume</Link>
      </div>
    </nav>
  );
}
