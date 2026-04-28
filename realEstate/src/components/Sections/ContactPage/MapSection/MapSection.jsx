import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './MapSection.css';

const MapSection = () => {
  return (
    <div className="map-card">
      <h3>Visit Our Office</h3>
      <div className="map-embed">
        <iframe
          title="office-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343005!2d-73.98510768458444!3d40.75889697932657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1644262073408!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="address-block">
        <FaMapMarkerAlt /> 123 Park Avenue, Suite 400, New York, NY 10022
      </div>
      <a
        href="https://goo.gl/maps/..."
        target="_blank"
        rel="noopener noreferrer"
        className="directions-link"
      >
        Get Directions →
      </a>
    </div>
  );
};

export default MapSection;