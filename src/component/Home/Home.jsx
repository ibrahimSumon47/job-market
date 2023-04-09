import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import HeroSection from '../HeroSection/HeroSection';
import JobCategoryList from '../JobCategoryList/JobCategoryList';

const Home = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    return (
        <div>
            <Header></Header>
            {isHome && <HeroSection></HeroSection>}
            {isHome && <JobCategoryList></JobCategoryList>}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;