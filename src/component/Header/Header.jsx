import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <nav className="flex md:justify-around font-mono font-semibold pt-5 bg-indigo-50 p-5 md:px-48 align-middle">
        <h2 className="text-4xl">JobMarket</h2>
        <div className="header-nav-link flex mt-3 space-x-10">
          <Link to="/">Home</Link>
          <Link to="/statistics" className="text-indigo-400">
            Statistics
          </Link>
          <Link to="/appliedJobs">Applied-Jobs</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div>
          <button
            className="hamburger-btn"
            onClick={handleMenuClick}
            aria-label="Toggle Menu"
          >
            <span className="hamburger-icon" />
          </button>
        </div>
        <button className="btn bg-indigo-400 text-slate-50 font-bold hidden md:block">
          Star Applying
        </button>
      </nav>
      <div
        className={`mobile-menu md:hidden ${
          showMenu ? "show-mobile-menu" : ""
        } bg-indigo-50 p-5`}
      >
        <Link className="block py-2" to="/">
          Home
        </Link>
        <Link className="block py-2" to="/statistics">
          Statistics
        </Link>
        <Link className="block py-2" to="/appliedJobs">
          Applied-Jobs
        </Link>
        <Link className="block py-2" to="/blog">
          Blog
        </Link>
        <button className="btn bg-indigo-400 text-slate-50 font-bold">
          Star Applying
        </button>
      </div>
    </div>
  );
};

export default Header;
