import React from 'react'
import './taboptions.css'
import logo1 from '../../assets/book_priest_logo.png'
import logo1_bw from '../../assets/book_priest_logo_bw.png'
import logo2 from '../../assets/vip_guide_priest.png'
import logo2_bw from '../../assets/vip_guide_priest_bw.png'
import logo3 from '../../assets/vedic_calender.png'
import logo3_bw from '../../assets/vedic_calender_bw.png'

const tabs=[
  {
    id: 1,
    name: 'Book a Priest',
    active_img: logo1,
    backdrop:'#FCEEC0',
    inactive_img: logo1_bw,
  },
  {
    id: 2,
    name: 'VIP Guide Priest',
    active_img: logo2,
    backdrop: '#E5F3F3',
    inactive_img: logo2_bw,
  },
  {
    id: 3,
    name: 'Vedic Calender',
    active_img: logo3,
    backdrop: '#EDf4FF',
    inactive_img: logo3_bw,
  }
] 

const Taboption = ({activetab, setactivetab}) => {
  return (
    <div className='tab-options'>
      <div className='max-width options-wrapper'>
        {tabs.map((tab) =>{
          return (
            <div onClick={()=> setactivetab(tab.name)} className= {`tab-item absolute-center curser-pointer ${activetab===tab.name &&'active-tab'}`}>
              <div className='tab-image-container absolute-center' style={{backgroundColor: `${activetab===tab.name ? tab.backdrop: ''}`}}>
                <img className='tab-image' alt={tab.name} src={activetab===tab.name ? tab.active_img : tab.inactive_img}/>
              </div>
              <div className='tab-name'>{tab.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Taboption

