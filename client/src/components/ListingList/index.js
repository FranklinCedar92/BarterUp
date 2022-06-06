import React from 'react';
import { Link } from 'react-router-dom';


function ListingList ({ listings }) {
    if (!listings.length) {
        return <h3>No Listings Yet!</h3>;
    }

    return (
        <div>
            <h3>{listings.description}</h3>
            {listings &&
                listings.map(listings => (
                <div key={listings._id} className="card mb-3">
                    <p className="card-header">
                    <Link
                        to={`/profile/${listings.username}`}
                        style={{ fontWeight: 700 }}
                        className="text-light"
                    >
                        {listings.username}
                    </Link>{' '}
                    listed on {listings.createdAt}
                    </p>
                    <div className="card-body">
                    <Link to={`/listing/${listings._id}`}>
                        <p>{listings.description}</p>
                        <p className="mb-0">
                        Recommendations: {listings.recommendationCount} || 
                        {listings.recommendationCount ? 'see what others think' : 'be the first to recommend'}
                        </p>
                    </Link>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ListingList;