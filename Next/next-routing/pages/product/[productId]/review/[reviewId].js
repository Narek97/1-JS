import React from 'react';
import {useRouter} from 'next/router'

const ReviewId = () => {
    const router = useRouter()
    const {productId,reviewId} =  router.query
    return (
        <div>
            <h1>productId - {productId}</h1>
            <h2>reviewId - {reviewId}</h2>
        </div>
    );
};

export default ReviewId;