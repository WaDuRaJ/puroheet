import React, { useState } from 'react'
import Header from '../../components/headers'
import Footer from '../../components/footers'
import Taboption from '../../components/taboptions'
import Pooja_booking from '../../components/pooja booking'
import Dalal_booking from '../../components/dalal booking'
import Vedic_calender from '../../components/vedic calender'

const Homepage = () => {
  const [activetab, setactivetab] = useState("vedic calender")

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
    case "pooja booking":
      return <Pooja_booking />
    case "dalal booking":
      return <Dalal_booking />
    case "vedic calender":
      return <Vedic_calender />
    default:
      return <Pooja_booking />
  }
}

export default Homepage
