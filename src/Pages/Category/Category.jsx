import React from 'react'
import './Category.scss'
import Menu from '../../Components/Menu/Menu'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'


const Category = () => {
    return (
        <div className='category-container'>
            <Menu />
            <Hero
                heading="Minimal blog template for creative expressions"
                desc="100% customisable and SEO-friendly blog template for personal and commercial purposes."
            />
            <div className="category-box">
                <img src="images/blog.jpg" alt="" />
                <h4>Category 1</h4>
            </div>
            <Footer />
        </div>
    )
}

export default Category