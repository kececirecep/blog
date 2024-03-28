import React from 'react'
import './DashboardMenu.scss' 


import { RiDashboardFill } from "react-icons/ri";
import { IoDuplicateSharp } from "react-icons/io5";
import { BsFillPinAngleFill } from "react-icons/bs";
import { MdPermMedia } from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";

const DashboardMenu = () => {
  return (
    <div className='panelmenu-container'>
      <ul>
        <li><RiDashboardFill /> <span>Dashboard</span></li>
        <li><BsFillPinAngleFill /><span> Posts</span></li>
        <li><IoDuplicateSharp /><span> Category</span></li>
        <li><MdPermMedia /> <span>Media</span></li>
        <li><RiPagesFill /><span> Pages</span></li>
        <li><IoMdSettings /> <span>Settings</span></li>
      </ul>
    </div>
  )
}

export default DashboardMenu