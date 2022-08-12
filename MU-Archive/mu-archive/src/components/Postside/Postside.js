import React from 'react'
import PostShare from '../PostShare/PostShare'
import ShareNow from '../ShareNow/ShareNow'
import './Postside.css'

const Postside = () => {
  return (
    <div className='PostSide'>
        <PostShare/>
        <ShareNow/>
    </div>
  )
}

export default Postside