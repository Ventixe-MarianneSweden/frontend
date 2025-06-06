import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/eventListPage.css'

const EventListPage = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('https://pweventservice-g3cxh7d5fyeyg2ca.swedencentral-01.azurewebsites.net/api/Events')
        const data = await res.json()
        setEvents(data.result || [])
      } catch (err) {
        console.error('Error fetching events:', err)
      }
    }
    fetchEvents()
  }, [])

  return (
    <div className="event-list-grid">
      {events.map((event) => (
        <Link to={`/events/${event.id}`} className="event-card" key={event.id}>
          <div>
            <h3>{event.title}</h3>
            <p>{event.eventDate?.split('T')[0]}</p>
            <p>{event.location}</p>
            <p>${event.price}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default EventListPage
