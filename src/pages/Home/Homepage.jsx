import React from 'react';
import Banner from './Banner/Banner';
import TopScholarships from './TopScholarships/TopScholarships';

const Homepage = () => {
    return (
        <div className='w-10/12 mx-auto my-10'>
            <Banner></Banner>
            <TopScholarships></TopScholarships>
        </div>
    );
};

export default Homepage;