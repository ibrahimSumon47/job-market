import React from 'react';

const JobCategoryList = () => {
    return (
        <div>
            <div className='grid justify-items-center mt-32'>
                <h2 className='text-4xl font-bold'>Job Category List</h2>
                <p className='font-thin my-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='flex justify-around mx-44'>
                <div className='border rounded-lg'>
                    <img src="../../../Images/Icons/accounts 1.png" alt="" />
                    <h4>Account & Finance</h4>
                    <p>300 Jobs Available</p>
                </div>
                <div>
                <img src="../../../Images/Icons/business 1.png" alt="" />
                    <h4>Creative Design</h4>
                    <p>100+ Jobs Available</p>
                </div>
                <div>
                    <img src="../../../Images/Icons/social-media 1.png" alt="" />
                    <h4>Marketing & Sales</h4>
                    <p>150 Jobs Available</p>
                </div>
                <div>
                    <img src="../../../Images/Icons/chip 1.png" alt="" />
                    <h4>Engineering Job</h4>
                    <p>224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategoryList;