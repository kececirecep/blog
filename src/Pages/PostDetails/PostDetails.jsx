import React from 'react'
import './PostDetails.scss'
import PostDetailHero from '../../Components/PostDetailHero/PostDetailHero'
import Menu from '../../Components/Menu/Menu'


const PostDetails = () => {
    return (
        <div className='postDetails-container'>
            <Menu />
            <PostDetailHero heading="10 hilarious NFT sales that broke the internet" time="August 13, 2021 • Daily digest" />


            <div className="postDetailsPage">
                <div className="mainPostImg">
                    <img src="/images/blog.jpg" alt="" />
                </div>
                <div className="text">
                    <p>Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.</p>
                    <p> Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.</p>
                    <p>The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? </p>

                </div>
                <img src="/images/blog.jpg" className='middleImg' alt="" />
                <div className="text">
                    <p>The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.</p>
                    <p>Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.</p> 
                    <p>Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.</p>
                    <p>Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.</p>
                </div>
            </div>



        </div>
    )
}

export default PostDetails