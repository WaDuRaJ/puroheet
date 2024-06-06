import React from 'react'
import './pooja booking.css'
import Card1 from '../../components/card/Card1'
import Card2 from '../../components/card/Card2'
import Card3 from '../../components/card/Card3'
import Card4 from '../../components/card/Card4'
import Card5 from '../../components/card/Card5'
import Card6 from '../../components/card/Card6'
import Card7 from '../../components/card/Card7'
import Card8 from '../../components/card/Card8'
import Card9 from '../../components/card/Card9'
import Card10 from '../../components/card/Card10'
import Card11 from '../../components/card/Card11'
import Card12 from '../../components/card/Card12'

export default function Pooja_booking() {
  return (
    <div>
    <h1 className='tittlename'>Pojaa booking</h1>
    <div className='cardss'>
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
    </div>
    <h1 className='tittlename'>Social events</h1>
    <div className='cardss'>
      <Card8 />
      <Card9 />
      <Card10 />
      <Card11 />
      <Card12 />
    </div>
    </div>
  )
}
