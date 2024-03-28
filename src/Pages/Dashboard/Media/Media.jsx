import React from 'react'
import './Media.scss'
import DashboardHeader from '../../../Components/Dashboard/DashboardHeader/DashboardHeader';
import DashboardMenu from '../../../Components/Dashboard/DashboardMenu/DashboardMenu';
import { HiDocumentRemove } from "react-icons/hi";


const Media = () => {
    const mediaFiles = [
        { id: 1, src: '/images/blog.jpg', alt: 'Image 1' },
        { id: 2, src: '/images/blog.jpg', alt: 'Image 2' },
        { id: 3, src: '/images/blog.jpg', alt: 'Image 3' },  
        { id: 3, src: '/images/blog.jpg', alt: 'Image 3' },  
        { id: 3, src: '/images/blog.jpg', alt: 'Image 3' },  
        { id: 3, src: '/images/blog.jpg', alt: 'Image 3' },  
        { id: 3, src: '/images/blog.jpg', alt: 'Image 3' },  
        { id: 3, src: '/images/blog.jpg', alt: 'Image 3' },  
        { id: 3, src: '/images/blog.jpg', alt: 'Image 3' },  
        { id: 3, src: '/images/blog.jpg', alt: 'Image 3' },  
        { id: 3, src: '/images/blog.jpg', alt: 'Image 3' },  
        { id: 3, src: '/images/blog.jpg', alt: 'Image 3' },  
        { id: 3, src: '/images/blog.jpg', alt: 'Image 3' },  
    ];
    return (
        <div>
            <DashboardHeader />
            <DashboardMenu />

            <div className="media-page">
                <h1 className="media-page-title">Media Library</h1>
                <div className="media-container">
                    {mediaFiles.map(media => (
                        <div key={media.id} className="media-item">
                            <img src={media.src} alt={media.alt} className="media-image" />
                            <div className="media-info">
                                <span className="media-name">{media.alt}</span>
                                <span className="media-actions">
                                    <span className="media-action-button"><HiDocumentRemove /></span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Media