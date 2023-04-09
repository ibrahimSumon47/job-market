import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-around font-mono font-semibold pt-5 bg-indigo-50 px-44">
        <h2 className="text-4xl">JobMarket</h2>
        <div className="flex gap-5 mt-3">
          <Link to="/">Home</Link>
          <Link to="/statistics" className="text-indigo-400">Statistics</Link>
          <Link to="/appliedJobs">Applied-Jobs</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <button className="btn bg-indigo-400 text-slate-50 font-bold">Star Applying</button>
      </nav>
    </div>
  );
};

export default Header;