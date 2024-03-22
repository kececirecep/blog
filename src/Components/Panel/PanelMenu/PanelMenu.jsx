import React from 'react'
import './PanelMenu.scss' 
import { RiDashboardFill } from "react-icons/ri";

import { BsFillPinAngleFill } from "react-icons/bs";
import { MdPermMedia } from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";

const PanelMenu = () => {
  return (
    <div className='panelmenu-container'>
      <ul>
        <li><RiDashboardFill /> <span>Dashboard</span></li>
        <li><BsFillPinAngleFill /><span> Posts</span></li>
        <li><MdPermMedia /> <span>Media</span></li>
        <li><RiPagesFill /><span> Pages</span></li>
        <li><IoMdSettings /> <span>Settings</span></li>
      </ul>
    </div>
  )
}

export default PanelMenu