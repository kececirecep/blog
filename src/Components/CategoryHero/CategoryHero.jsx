import React from 'react'
import './CategoryHero.scss'

const CategoryHero = (props) => {
    return (
        <div className='categoryHero-container'>
            <div className="categoryHero-content"> 
                <h2>{props.heading}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default CategoryHero