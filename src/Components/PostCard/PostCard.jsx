import React from 'react'
import './PostCard.scss'

const PostCard = () => {
    return (
        <div className='postcard-container'>
            <div className="postcard">
                <div className="text">
                    <h6>August 13, 2021 </h6>
                    <h2>10 Hilarious Cartoons That Depict Real-Life Problems of Programmers</h2>
                    <p>Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.</p>
                </div>
                <img src="/images/blog.jpg" alt="" />
            </div>
        </div>
    )
}

export default PostCard