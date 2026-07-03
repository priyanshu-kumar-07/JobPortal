import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2>JobPortal</h2>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Jobs</li>
        <li>Companies</li>
        <li>About</li>
      </ul>

      <button className="btn">Login</button>
    </header>
  );
};

export default Header;