import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import EventPage from './assets/pages/EventPage'
import EventDetailsPage from './assets/pages/EventDetailsPage'
import BookingEvent from './assets/pages/BookingEvent'
import EventListPage from './assets/pages/EventListPage'
import AppLayout from './assets/components/AppLayout.jsx'

const App = () => {

  return (
        <>
<Routes>
  <Route element={<AppLayout />}>
    <Route path="/" element={<EventPage />} />
    <Route path="/events/:id" element={<EventDetailsPage />} />
    <Route path="/events/booking/:id" element={<BookingEvent />} />
    <Route path="/list" element={<EventListPage />} />
  </Route>
</Routes>

    </>
  )
}

export default App
