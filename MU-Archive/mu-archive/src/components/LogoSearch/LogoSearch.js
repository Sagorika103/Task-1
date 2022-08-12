import React from 'react'
import MUlogo from '../../images/MUlogo.jpg'
// import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'
const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
         <img src={MUlogo} alt="" />
         <div className="Search">
           <input type="text" placeholder='#Explore' />
           {/* <div className="s-icon">
               <UilSearch/>
             </div> */}
       </div>
    </div>
  )
}

export default LogoSearch
