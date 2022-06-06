import React from 'react';
import ListingList from '../components/ListingList';
import ListingForm from '../components/ListingForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_LISTINGS, QUERY_ME_BASIC } from '../utils/queries';
import barterPhoto from '../assets/Barter-photo.jpeg'

const Home = () => {
    const { loading, data } = useQuery(QUERY_LISTINGS);
    const { data: userData } = useQuery(QUERY_ME_BASIC);
    const listings = data?.listings || [];

    const loggedIn = Auth.loggedIn();

    return (
        <main className=''>
            <h1 className='text-center'>Welcome to BarterUp!</h1>
            <p className='text-center'>A place to trade or rent your items to other people. <br/>
                Have you ever needed to rent a car for a day, but didn't want to pay rental prices? <br/>
                Or maybe you have an electric guitar, and want to trade for an acoustic. <br/>
                Whatever the case may be, check BarterUp to see if there's anyone in your area willing to barter with you!</p>
                <img src={barterPhoto} alt="Barter-Description" className='barterPhoto' />
{/* 
            <div className='flex-row justify-space-between'>
                {loggedIn && (
                    <div className='col-12 mb-3'>
                        <ListingForm />
                    </div>
                )}
                <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <ListingList
                            listings={listings}
                            title="What's for trade..."
                        />
                    )}
                </div>
            </div> */}
        </main>
    )

};



export default Home;