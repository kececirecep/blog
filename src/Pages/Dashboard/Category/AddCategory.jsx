import React from 'react'
import './AddCategory.scss'
import DashboardHeader from '../../../Components/Dashboard/DashboardHeader/DashboardHeader'
import DashboardMenu from '../../../Components/Dashboard/DashboardMenu/DashboardMenu'

const AddCategory = () => {
    return (
        <div>
            <DashboardHeader />
            <DashboardMenu />

            <div className="dashboardCategory-container">
                <form className="post-form">
                    <div className="form-group">
                        <label>Category:</label>
                        <input type="text" />
                    </div> 
                    <button type="submit" className="submit-btn">Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddCategory