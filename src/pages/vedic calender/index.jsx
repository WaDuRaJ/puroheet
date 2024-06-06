import React from 'react';
import FullCalendar from '@fullcalendar/react';
// import Events from './Events';
import dayGridPlugin from '@fullcalendar/daygrid';

const Vedic_calender = () => {
  // const events = Events();

  return (
    <div>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        // events={[
        //   { title: events.Dasha, date: events.Eday },
        // ]}
      />
    </div>
  );
};

export default Vedic_calender;