import React from 'react'
import './Dashboard.scss'
import DashboardHeader from '../../../Components/Dashboard/DashboardHeader/DashboardHeader'
import DashboardMenu from '../../../Components/Dashboard/DashboardMenu/DashboardMenu'


import { BsFillPinAngleFill } from "react-icons/bs";
import { MdPermMedia } from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";


const myServicesData = [
  {
    icon: <BsFillPinAngleFill />,
    title: "Add posts frequently to stay up to date",
    desc: "Stay current and engaged by consistently adding posts to keep your audience informed and connected",
  }, {
    icon: <MdPermMedia />,
    title: "Upload your images as quickly as you wish",
    desc: "Please feel free to upload your images as swiftly as you desire, without any delay or hesitation",
  }, {
    icon: <RiPagesFill />,
    title: "Actions related to your pages",
    desc: "You can find and execute various actions that are directly related to managing and optimizing your pages according to your preferences and needs.",
  },

]

const PanelHome = () => {
  return (
    <div>
      <DashboardHeader />
      <DashboardMenu />

      <div className='dashboardpage-container'>
        <div className="welcome-container">
          <div className="welcome">
            <h4>Welcome to <span>ReactPress!</span></h4>
          </div>
          <div className="services">
            {
              myServicesData.map((item, index) => {
                return (
                  <div key={index} className='services-box'>
                    <span>{item.icon}</span>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default PanelHome