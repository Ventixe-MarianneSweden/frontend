import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../styles/eventListPage.css'

const EventDetailsPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const getEvent = async () => {
      try {
        const res = await fetch(
          `https://pweventservice-g3cxh7d5fyeyg2ca.swedencentral-01.azurewebsites.net/api/Events/${id}`
        );
        if (res.ok) {
          const response = await res.json();
          setEvent(response.result);
        } else {
          console.error('Failed to fetch event');
        }
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    getEvent();
  }, [id]);

  if (!event) return <div>Laddar...</div>;

  return (
    <div className="event-page-container">
      {/* Eventdetaljruta */}
      <div className="event-details-container">
        <div className="event-image-container">
          {event.image ? (
            <img src={event.image} alt={event.title} className="event-image" />
          ) : (
            <div className="event-image-placeholder">
              <span>Bild ej tillgänglig</span>
            </div>
          )}
        </div>
        <div className="event-info">
          <h1>{event.title}</h1>
          <p><strong>Plats:</strong> {event.location}</p>
          <p><strong>Datum:</strong> {event.eventDate}</p>
          <p>{event.description}</p>
          <Link to={`/events/booking/${id}`} className="booking-link">
            Boka event
          </Link>
        </div>
      </div>

      {/* Villkor och Regler, kan förbättras */}
      <div className="terms-container">
        <h3>Villkor och Regler</h3>
        <p>
          Genom att boka detta event godkänner du våra villkor. Eventet kan komma att ändras 
          eller ställas in vid oförutsedda händelser. För fullständiga regler, vänligen kontakta arrangören.
        </p>
      </div>
    </div>
  );
};

export default EventDetailsPage;