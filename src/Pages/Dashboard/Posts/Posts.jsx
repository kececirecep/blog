import React from 'react'
import './Posts.scss'

import DashboardHeader from '../../../Components/Dashboard/DashboardHeader/DashboardHeader'
import DashboardMenu from '../../../Components/Dashboard/DashboardMenu/DashboardMenu'


const posts = [
    { id: 1, title: "Managing State with React Hooks", author: "John Doe", category: "React", date: "2024-03-23", image: "images/blog.jpg" },
    { id: 2, title: "Web Development Guide with React", author: "Jane Smith", category: "React", date: "2024-03-22", image: "images/blog.jpg" },
    { id: 3, title: "Basic Concepts of JavaScript", author: "Alex Johnson", category: "JavaScript", date: "2024-03-21", image: "images/blog.jpg" }
];

const Posts = () => {
    return (
        <div>
            <DashboardHeader />
            <DashboardMenu />

            <div className='dahsboardPosts-container'>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => (
                            <tr key={post.id}>
                                <td><img src={post.image} alt={post.title} /></td>
                                <td>{post.title}</td>
                                <td>{post.author}</td>
                                <td>{post.category}</td>
                                <td>{post.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Posts