import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ item }) => {
  return (
    <div className="event-card">
      <Link to={`/events/${item.id}`}>
        <div className="event-image-placeholder">
          {item.image ? (
            <img src={item.image} alt={item.title} className="event-image" />
          ) : (
            <span className="image-text">Image</span>
          )}
        </div>

        <div className="event-details">
          <p className="event-date">
            {new Date(item.eventDate).toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
          <h4 className="event-title">{item.title}</h4>
          <p className="event-location">{item.location}</p>
          <p className="event-price">${item.price}</p>
          <p className="event-link">View Details</p>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;

