import React from 'react'
import work from'../../images/work.jpg'
import chad from '../../images/chad.jpg'
import './Card.css'

const Card = () => {
  return (
    <div  className='ProfileCard'>
       <div className='ProfileImages'>
        <img src={work} alt=''/>
        <img src={chad} alt=''/>
       </div> 

     <div className='ProfileName'>
           <span>Dil Jahan Ahmed Sagorika</span>
           <span>Department of CSE</span>
           <span>Batch:45 CSE
           </span>
     </div>
      <div className='followStatus'>
         <hr/>
         <div className='follow'>
            <span>6,890</span>
            <span>followings</span>
           </div>  
            <div className='vl'></div>
            <div className='follow'>
                <span>1</span>
                <span>followers</span>
            </div>
         <hr/>
     </div>
     <span>My profile</span>
   </div>
  )
}

export default Card