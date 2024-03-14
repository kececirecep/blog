import React from 'react'
import Menu from '../../Components/Menu/Menu'
import Hero from '../../Components/Hero/Hero'
import PostCard from '../../Components/PostCard/PostCard'

const Home = () => {
  return (
    <div>
        <Menu/>
        <Hero 
        heading="Minimal blog template for creative expressions"
        desc="100% customisable and SEO-friendly blog template for personal and commercial purposes." />
        <PostCard />
    </div>
  )
}

export default Home