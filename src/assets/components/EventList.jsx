import { useEffect, useState } from 'react'
import EventItem from './EventItem'
import '../../styles/eventListPage.css'

const EventList = () => {
  const [events, setEvents] = useState([])

  const getEvents = async () => {
    const res = await fetch(
      'https://pweventservice-g3cxh7d5fyeyg2ca.swedencentral-01.azurewebsites.net/api/Events'
    )

    if (res.ok) {
      const response = await res.json()
      console.log('API response:', response)

      const result = Array.isArray(response.result)
        ? response.result
        : Array.isArray(response)
        ? response
        : []

      setEvents(result)
    }
  }

  useEffect(() => {
    getEvents()
  }, [])

  return (
      <section id="events" className="event-list-grid">
      {events.map((event) => (
        <EventItem key={event.id} item={event} />
      ))}
    </section>
  )
}

export default EventList
