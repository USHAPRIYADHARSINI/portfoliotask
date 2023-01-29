import React from 'react'
import './Contacts.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';


function Contacts() {


  return (
    <div className='contacts-container'>
      <h1>Contact details</h1>
      <div className='phone flex-row'>
        <RingVolumeIcon/>
        <p> +91-9787526151</p>
      </div>
      <div className='email flex-row'>
        <MailIcon/>
        <p> Ushapriyadharsini19@gmail.com</p>
      </div>
      <div className='place flex-row'>
        <PlaceIcon/>
        <p> Madurai / Coimbatore, Tamilnadu, India</p>
      </div>
    </div>
  )
}

export default Contacts