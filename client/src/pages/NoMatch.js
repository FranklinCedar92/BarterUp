import React from 'react';
import oops from '../assets/oops.jpeg';

const NoMatch = () => {
    return (
    <div className='text-center'>
        <h1>Oops, we couldn't find that page.</h1>
        <img src={oops} alt="Oops" className='oopsPhoto' />
    </div>
    );
};

export default NoMatch;