import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import HeroSection from '../HeroSection/HeroSection';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    return (
        <div>
            <Header></Header>
            {isHome && <HeroSection></HeroSection>}
            {isHome && <JobCategoryList></JobCategoryList>}
            {isHome && <FeaturedJobs></FeaturedJobs>}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;