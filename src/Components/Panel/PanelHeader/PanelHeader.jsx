import React from 'react'
import './PanelHeader.scss'
import { FaReact } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

const PanelHeader = () => {
    const reactIcon = {
        fontSize:"24px",
    }
    return (
        <div className='panelheader-container'>
            <ul>
                <li><FaReact style={reactIcon} /></li>
                <li><IoHomeSharp /><span> My Blog</span></li> 
            </ul>
            <div className="logout"> 
            <h6>Logout</h6>
            </div>
        </div>
    )
}

export default PanelHeader