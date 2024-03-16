import React from 'react'
import './Category.scss'
import Menu from '../../Components/Menu/Menu'
import Footer from '../../Components/Footer/Footer'


const Category = () => {
    return (
        <div className='category-container'>
            <Menu />
            <div className="category-box">
                <img src="images/blog.jpg" alt="" />
                <h4>Category 1</h4>
            </div>
            <Footer />
        </div>
    )
}

export default Category