import React, { useState} from 'react'
import './Reservation.scss'
import Calendar from '../Calendar/Calendar';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    time: '',
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation Details: ', formData);
  };

  const handleDateSelect = (date) => {
    setFormData({ ...formData, date: date.toLocaleDateString() });
  };

  return (
    <div className="reservation-container">
      <div className="reservation-title">
        <h4>Reservations<div id="line"></div></h4>
        <h1>BOOK A TABLE</h1>
      </div>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <div className="calendar-container">
          <label htmlFor="date">Select Date</label>
          <Calendar onDateSelect={handleDateSelect} />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />  
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input   
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Reservation;