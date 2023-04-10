import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import HeroSection from '../HeroSection/HeroSection';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <HeroSection></HeroSection>
            <JobCategoryList categories= {categories}></JobCategoryList>
            <FeaturedJobs></FeaturedJobs>
            
        </div>
    );
};

export default Home;