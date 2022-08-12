import React from 'react'
import Card from '../Card/Card'
import LogoSearch from '../LogoSearch/LogoSearch'
import './ProflieSide.css'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch/>
      <Card/>
    </div>
  )
}

export default ProfileSide