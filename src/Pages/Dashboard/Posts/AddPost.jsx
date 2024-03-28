import React from 'react'
import './AddPost.scss'

import DashboardHeader from '../../../Components/Dashboard/DashboardHeader/DashboardHeader'
import DashboardMenu from '../../../Components/Dashboard/DashboardMenu/DashboardMenu'

const AddPost = () => {
    return (
        <div>
            <DashboardHeader />
            <DashboardMenu />

            <div className="dashboardPostAdd-container">
                <form className="post-form">
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Author:</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Category:</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Content:</label>
                        <textarea />
                    </div>
                    <div className="form-group">
                        <label>Image:</label>
                        <input type="file" accept="image/*" />
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddPost