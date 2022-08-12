import React from 'react'
import Items from './Items'
import  CSE from '../../images/CSE.jpg'
import EEE1 from '../../images/EEE1.jpg'
import SW from '../../images/SW.jpg'
import Law1 from'../../images/Law1.jpg'
import Eng2 from '../../images/Eng2.jpg'
import Bba from '../../images/Bba.jpg'
import Econo1 from '../../images/Econo1.jpg'
import './DpCard.css'
const DpCard = () => {
  return (
    <div className='cards'>
    <h1>Mu Archive!</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <Items
            src={CSE}
            text='The School is a discipline devoted to the study and advancement of computational methods and data analysis techniques also provides computing resources for research.'
            label='CSE Department'
            path='./bsc.insoftwareengineering'
          />
          <Items
            src={EEE1}
            text='The School is a discipline devoted to the study and advancement of computational methods and data analysis techniques also provides computing resources for research.'
            label='EEE Department'
            path='/.bsc.ineee'
          />
          <Items
            src={SW}
            text='The School is a discipline devoted to the study and advancement of computational methods and data analysis techniques also provides computing resources for research.'
            label='Softwar Department'
            path='/bsc.insoftwareengineering'
          />
          <Items
            src={Law1}
            text='The School is focused on producing litigation specialists, corporate lawyers, mediation & arbitration experts, and professionals policy makers'
            label='LLB Department'
            path='/ll.b.(hons.)'
          />
          <Items
            src={Eng2}
            text='The School has been established to understand how societies function in local and global settings and learn about the forces and events shaping the world.'
            label='English Department'
            path='/b.a(hons.)inenglish'
          />
          <Items
            src={Bba}
            text='The School was started in the year 2003 with 49 Students with the objective of giving quality education and to enable the student community'
            label='BBA Department'
            path='/bba'
          />
          <Items
            src={Econo1}
            text='The School was started in the year 2003 with 49 Students with the objective of giving quality education and to enable the student community'
            label='Economics'
            path='/bssineconomics'
          />
        </ul>
      </div>
    </div>
  </div>
  )
}

export default DpCard