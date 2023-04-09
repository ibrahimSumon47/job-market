import React from 'react';

const JobCategoryList = () => {
    return (
        <div>
            <div className='grid justify-items-center mt-32'>
                <h2 className='text-4xl font-bold'>Job Category List</h2>
                <p className='font-thin text-slate-400 my-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-40 mx-5 lg:mx-40'>
                <div className='border rounded-lg bg-indigo-50 p-5'>
                    <img className='p-2 border rounded-lg bg-indigo-100' src="../../../Images/Icons/accounts 1.png" alt="" />
                    <h4 className='font-bold mt-5'>Account & Finance</h4>
                    <p className='text-slate-400'>300 Jobs Available</p>
                </div>
                <div className='border rounded-lg bg-indigo-50 p-5'>
                <img className='p-2 border rounded-lg bg-indigo-100' src="../../../Images/Icons/business 1.png" alt="" />
                    <h4 className='font-bold mt-5'>Creative Design</h4>
                    <p className='text-slate-400'>100+ Jobs Available</p>
                </div>
                <div className='border rounded-lg bg-indigo-50 p-5'>
                    <img className='p-2 border rounded-lg bg-indigo-100' src="../../../Images/Icons/social-media 1.png" alt="" />
                    <h4 className='font-bold mt-5'>Marketing & Sales</h4>
                    <p className='text-slate-400'>150 Jobs Available</p>
                </div>
                <div className='border rounded-lg bg-indigo-50 p-5'>
                    <img className='p-2 border rounded-lg bg-indigo-100' src="../../../Images/Icons/chip 1.png" alt="" />
                    <h4 className='font-bold mt-5'>Engineering Job</h4>
                    <p className='text-slate-400'>224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategoryList;