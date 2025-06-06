import React from 'react'
import EventList from '../components/EventList'

const EventPage = () => {
  return (
    <div className="portal-wrapper">
      <nav/>
      {/* <header />
      <main> */}
        <EventList />

      {/* </main>
      <footer/> */}
    </div>
  )
}

export default EventPage