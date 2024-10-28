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
        <ul>
          <li>
            <div className="form-group">
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              >
                <option value="1 Person">1 Person</option>
                <option value="2 People">2 People</option>
                <option value="3 People">3 People</option>
                <option value="4 People">4 People</option>
                <option value="5 People">5 People</option>
                <option value="6 People">6 People</option>
              </select>
            </div>
            <div className="form-group">
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="6:00">6:00 am</option>
                <option value="7:00">7:00 AM</option>
                <option value="8:00">8:00 AM</option>
                <option value="9:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="17:00">5:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="21:00">9:00 PM</option>
                <option value="22:00">10:00 PM</option>
                <option value="23:00">11:00 PM</option>                
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Name'
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='Email'
              />
            </div>
            <div className="form-group">
              <input   
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder='Phone'
              />
            </div>
            <button type="submit">Reservation</button>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default Reservation;