import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from './EventCard';

const EventItem = ({ item }) => {
  return (
    <Link to={`/events/${item.id}`}>
      <EventCard item={item} />
    </Link>
  );
};

export default EventItem;



























// import React from 'react';
// import { Link } from 'react-router-dom';

// const EventItem = ({ item }) => {
//   return (
//     <div className="event-card">
//       <div className="image-placeholder" />

//       <div className="date">{item.time}</div>

//       <h3>{item.title}</h3>

//       <div className="location">{item.location}</div>

//       <div className="price">${item.price}</div>

//       <Link to={`/events/${item.id}`} className="view-details">
//         View Details
//       </Link>
//     </div>
//   );
// };

// export default EventItem;



// import React from 'react'
// import { Link } from 'react-router-dom'

// const EventItem = ({ item }) => {
//   return (
//     <div className="event-card">
//       <Link to={`/events/${item.id}`}>
//         {item.title}
//       </Link>
//     </div>
//   )
// }

// export default EventItem



// import React, { useEffect, useState } from 'react'
// import EventItem from './EventItem'

// const EventList = () => {
//   const [events, setEvents] = useState([])

//   const getEvents = async () => {
//     const res = await fetch("https://pweventservice-euchhwdpc9evgcdp.swedencentral-01.azurewebsites.net/api/events")
//     if (res.ok) {
//       const response = await res.json()
//       setEvents(response.result) // ✅ rätt data här
//     }
//   }

//   useEffect(() => {
//     getEvents()
//   }, [])

//   return (
//     <section id="events">
//       <h2>Events</h2>
//       {events.map(event => (
//         <EventItem key={event.id} item={event} />
//       ))}
//     </section>
//   )
// }

// export default EventList




// import React from 'react';

// const EventItem = ({ item }) => {
//   return (
//     <div className="event-card">
//       <h3>{item.title}</h3>
//       <p><strong>Location:</strong> {item.location}</p>
//       <p><strong>Date:</strong> {new Date(item.eventDate).toLocaleString()}</p>
//       <p>{item.description}</p>
//     </div>
//   );
// };

// export default EventItem;





//import React from 'react'

// const EventItem = ({item}) => {
//   return (
//     <div className="event-card">
//         <div>
//           {item.title}
//         </div>
//     </div>
//   )
// }

// export default EventItem