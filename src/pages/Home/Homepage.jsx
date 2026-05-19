import React from 'react';
import ErrorPage from '../SharedPage/ErrorPage';

const Homepage = () => {
    return (
        <div className='w-10/12 mx-auto my-10'>
            <h1 className='font-bold'>ScholarStream MERN Project starts...</h1>
            <ErrorPage></ErrorPage>
        </div>
    );
};

export default Homepage;