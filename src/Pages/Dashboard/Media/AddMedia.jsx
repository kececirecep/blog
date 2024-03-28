import React from 'react'
import './AddMedia.scss'
import DashboardHeader from '../../../Components/Dashboard/DashboardHeader/DashboardHeader'
import DashboardMenu from '../../../Components/Dashboard/DashboardMenu/DashboardMenu'

const AddMedia = () => {

    

    return (
        <div>
            <DashboardHeader />
            <DashboardMenu />

            <div className="upload-container">
                <h2>Upload New Media</h2>
                <form>
                    <label htmlFor="file-upload" className="upload-label">
                        <div className="upload-icon"></div>
                        <div className="upload-text">
                            <span>Drop files to upload</span>
                            <span>or</span> 
                        </div>
                    </label>
                    <input type="file" id="file-upload" className="file-input" />
                </form>
            </div>
        </div>
    )
}

export default AddMedia