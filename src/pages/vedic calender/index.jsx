import React from 'react'
import './vedic calender.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const Vedic_calender = () => {
  return (
    <div>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
    </div>
  )
}

export default Vedic_calender
