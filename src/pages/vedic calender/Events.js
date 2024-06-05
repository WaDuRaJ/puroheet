// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Events = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     axios.get('/api/events')
//      .then(response => {
//         setEvents(response.data);
//       })
//      .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div>
//       {events.map(event => (
//         <div key={event.Eday}>
//           <h2>{event.Dasha}</h2>
//           <p>Bday: {event.Bday}</p>
//           <p>Event: {event.Event}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Events;