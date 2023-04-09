import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-around font-mono font-semibold mt-5">
        <h2 className="text-4xl">JobMarket</h2>
        <div className="flex gap-5 mt-3">
          <Link to="/">Home</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/appliedJobs">Applied-Jobs</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <button className="border rounded-lg p-3">Star Applying</button>
      </nav>
    </div>
  );
};

export default Header;
