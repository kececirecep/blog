import React from 'react'
import './PostDetailHero.scss'

const PostDetailHero = (props) => {
    return (
        <div className='postDetailHero-container'>
            <div className="postDetailHero-content">
                <h2>{props.heading}</h2>
                <p>{props.time}</p>
            </div>
        </div>
    )
}

export default PostDetailHero