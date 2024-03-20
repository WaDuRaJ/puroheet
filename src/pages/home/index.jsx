import React, { useState } from 'react'
import Header from '../../components/headers'
import Footer from '../../components/footers'
import Taboption from '../../components/taboptions'
import Pooja_booking from '../../components/pooja booking'
import Dalal_booking from '../../components/dalal booking'
import Vedic_calender from '../../components/vedic calender'

const Homepage = () => {
  const [activetab, setactivetab] = useState("Book a Priest")

  return (
    <div>
      <Header />
      <Taboption activetab={activetab} setactivetab={setactivetab} />
        {getscreen(activetab)}
      <Footer />
    </div>
  )
}
const getscreen =(tab)=>{
  switch(tab) {
    case "Book a Priest":
      return <Pooja_booking />
    case "VIP Guide Priest":
      return <Dalal_booking />
    case "Vedic Calender":
      return <Vedic_calender />
    default:
      return <Pooja_booking />
  }
}

export default Homepage
