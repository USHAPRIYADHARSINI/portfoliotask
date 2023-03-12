import React from 'react'
import './Contacts.css';
import Gmail from '../Icons/Gmail';
import Call from '../Icons/Call';
import Map from '../Icons/Map';

function Contacts() {

  return (
    <div className='contact'>
          <h3>Contact details</h3>
      <div className='contacts-container'>
        <div className='phone flex-row'>
          <Call/>
          <p>+91-9787526151</p>
        </div>
        <div className='email flex-row'>
          <Gmail/>
          <p>Ushapriyadharsini19@gmail.com</p>
        </div>
        <div className='place flex-row'>
          <Map/>
          <p>Madurai / Coimbatore, Tamilnadu, India</p>
        </div>
      </div>
    </div>
  )
}

export default Contacts