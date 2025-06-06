import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../../styles/bookingEvent.css'

const BookingEventPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [event, setEvent] = useState(null)
  // hantera bekräftelsen
  const [bookingSuccess, setBookingSuccess] = useState(false)
  
  const [formData, setFormData] = useState({
    eventId: id,
    firstName: '',
    lastName: '',
    email: '',
    streetName: '',
    postalCode: '',
    city: '',
    ticketQuantity: 1,
  })

  const getEvent = async () => {
    try {
      const res = await fetch(
        `https://pweventservice-g3cxh7d5fyeyg2ca.swedencentral-01.azurewebsites.net/api/Events/${id}`
      )
      if (!res.ok) throw new Error('Failed to fetch event')
      const data = await res.json()
      setEvent(data.result)
    } catch (err) {
      console.error(err)
    }
  }

  const postBooking = async () => {
    try {
      const res = await fetch(
        'https://pwbookingservice-fme5cnc5gqb6baaz.swedencentral-01.azurewebsites.net/api/bookings',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      )
      if (!res.ok) throw new Error('Failed to book')
    
      setBookingSuccess(true)
     
      setTimeout(() => navigate('/'), 3000)
    } catch (err) {
      console.error(err)
      alert('Booking failed')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postBooking()
  }

  useEffect(() => {
    getEvent()
  }, [])

  if (!event) return <p>Loading event...</p>

  // Om bokningen är lyckad
  if (bookingSuccess) {
    return (
      <div className="booking-form-container success-message">
        <h2>Bokningen är lyckad!</h2>
        <p>Du omdirigeras snart...</p>
      </div>
    )
  }

  return (
    <div className="booking-form-container">
      <div className="event-summary-card">
        <h2>{event.title}</h2>
        <p>
          <strong>Datum:</strong>{' '}
          {new Date(event.eventDate).toLocaleString('sv-SE', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
        <p>
          <strong>Plats:</strong> {event.location}
        </p>
      </div>

      {/* //Bokningsformulär */}
      <div className="form-card">
        <h2>Bokningsformulär</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="firstName">Förnamn</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Ange ditt förnamn"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Efternamn</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Ange ditt efternamn"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-post</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Ange din e-post"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="streetName">Gatuadress</label>
            <input
              id="streetName"
              name="streetName"
              type="text"
              placeholder="Ange din adress"
              value={formData.streetName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group inline-group">
            <div className="form-group-inline">
              <label htmlFor="postalCode">Postnummer</label>
              <input
                id="postalCode"
                name="postalCode"
                type="text"
                placeholder="Postnr"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-inline">
              <label htmlFor="city">Stad</label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="Stad"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="ticketQuantity">Antal biljetter</label>
            <input
              id="ticketQuantity"
              name="ticketQuantity"
              type="number"
              min="1"
              placeholder="1"
              value={formData.ticketQuantity}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Boka nu
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookingEventPage