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
        events={[
          { title: 'Dbadashi upto 03:19 PM', date: '2024-05-20' },
          { title: 'Trayodashi upto 04:54 PM', date: '2024-05-21' },
          { title: 'Chaturdashi upto 06:05 PM', date: '2024-05-22' },
          { title: 'Purnima upto 06:47 PM"', date: '2024-05-23' },
          { title: 'Pratipada upto 06:58 PM', date: '2024-05-24' },
          { title: 'Dbitiya upto 06:40 PM', date: '2024-05-25' },
          { title: 'Tritiya upto 05:52 PM', date: '2024-05-26' },
          { title: 'Chaturthi upto 04:38 PM', date: '2024-05-27' },
          { title: 'Panchami upto 03:01 PM', date: '2024-05-28' },
          { title: 'Shashthi upto 01:05 PM', date: '2024-05-29' },
          { title: 'Chaturdashi upto 06:05 PM', date: '2024-05-30' },
          { title: 'Panchami upto 03:01 PM', date: '2024-05-31' },
          { title: 'Nabami upto 06:05 AM', date: '2024-06-01' },
          { title: 'Ekadashi upto 01:13 AM Jun 03', date: '2024-06-02' },
          { title: 'Dbadashi upto 10:58 PM', date: '2024-06-03' },
          { title: 'Trayodashi upto 08:56 PM', date: '2024-06-04' },
          { title: 'Chaturdashi upto 07:11 PM', date: '2024-06-05' },
          { title: 'Amabasya upto 05:49 PM', date: '2024-06-06' },
          { title: 'Pratipada upto 04:51 PM', date: '2024-06-07' },
          { title: 'Dbitiya upto 04:21 PM', date: '2024-06-08' },
          { title: 'Tritiya upto 04:22 PM', date: '2024-06-09' },
          { title: 'Chaturthi upto 04:53 PM', date: '2024-06-10' },
          { title: 'Panchami upto 05:53 PM', date: '2024-06-11' },
          { title: 'Shashthi upto 07:19 PM', date: '2024-06-12' },
          { title: 'Saptami upto 09:05 PM', date: '2024-06-13' },
          { title: 'Ashtami upto 11:03 PM', date: '2024-06-14' },
          { title: 'Nabami upto 01:03 AM', date: '2024-06-15' },
          { title: 'Dashami upto 02:55 AM', date: '2024-06-16' },
          { title: 'Ekadashi upto 04:30 AM', date: '2024-06-17' },
          { title: 'Dbadashi upto Full Night', date: '2024-06-18' },
          { title: 'Dbadashi upto 05:41 AM', date: '2024-06-19' },
          { title: 'Trayodashi upto 06:25 AM ', date: '2024-06-20' },
          { title: 'Chaturdashi upto 06:37 AM ', date: '2024-06-21' },
          { title: 'Purnima upto 06:19 AM ', date: '2024-06-22' },
          { title: 'Pratipada upto 05:33 AM Dbitiya ', date: '2024-06-23' },
          { title: 'Tritiya upto 02:43 AM  ', date: '2024-06-24' },
          { title: 'Chaturthi upto 12:48 AM  ', date: '2024-06-25' },
          { title: 'Panchami upto 10:37 PM ', date: '2024-06-26' },
          { title: 'Shashthi upto 08:15 PM ', date: '2024-06-27' },
          { title: 'Saptami upto 05:48 PM ', date: '2024-06-28' },
          { title: 'Ashtami upto 03:19 PM', date: '2024-06-29' },
          { title: 'Nabami upto 12:54 PM', date: '2024-06-30' },
          { title: 'Dashami upto 10:38 AM', date: '2024-07-01' },
          { title: 'Ekadashi upto 08:34 AM ', date: '2024-07-02' },
          { title: 'Dbadashi upto 06:47 AM ', date: '2024-07-03' },
          { title: 'Trayodashi upto 05:22 AM ', date: '2024-07-04' },
          { title: 'Amabasya upto 03:50 AM ', date: '2024-07-05' },
          { title: 'Pratipada upto 03:47 AM ', date: '2024-07-06' },
          { title: 'Dbitiya upto 04:15 AM  ', date: '2024-07-07' },
          { title: 'Tritiya upto Full Night ', date: '2024-07-08' },
          { title: 'Tritiya upto 05:13 AM ', date: '2024-07-09' },
          { title: 'Chaturthi upto 06:37 AM ', date: '2024-07-10' },
          { title: 'Panchami upto 08:21 AM ', date: '2024-07-11' },
          { title: 'Shashthi upto 10:18 AM ', date: '2024-07-12' },
          { title: 'Saptami upto 12:19 PM ', date: '2024-07-13' },
          { title: 'Ashtami upto 02:11 PM ', date: '2024-07-14' },
          { title: 'Nabami upto 03:48 PM ', date: '2024-07-15' },
          { title: 'Dashami upto 05:01 PM ', date: '2024-07-16' },
          { title: 'Ekadashi upto 05:47 PM ', date: '2024-07-17' },
          { title: 'Dbadashi upto 06:02 PM ', date: '2024-07-18' },
          { title: 'Trayodashi upto 05:47 PM ', date: '2024-07-19' },
          { title: 'Chaturdashi upto 05:02 PM ', date: '2024-07-20' },
          { title: 'Purnima upto 03:51 PM ', date: '2024-07-21' },
          { title: 'ratipada upto 02:17 PM ', date: '2024-07-22' },
          { title: 'Dbitiya upto 12:22 PM ', date: '2024-07-23' },
          { title: 'Tritiya upto 10:13 AM', date: '2024-07-24' },
          { title: 'Chaturthi upto 07:53 AM', date: '2024-07-25' },
          { title: 'Panchami upto 05:26 AM,', date: '2024-07-26' },
          { title: 'Saptami upto 12:32 AM', date: '2024-07-27' },
          { title: 'Ashtami upto 10:15 PM', date: '2024-07-28' },
          { title: 'Nabami upto 08:11 PM', date: '2024-07-29' },
          {title: 'Dashami upto 06:23 PM', date: '2024-07-30' },
          {title: 'Ekadashi upto 04:57 PM', date: '2024-07-31' }
        ]}
        // events={[
        //   { title: events.Dasha, date: events.Eday },
        // ]}
      />
    </div>
  );
};

export default Vedic_calender;