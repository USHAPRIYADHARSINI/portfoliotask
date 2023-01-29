import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

  return (
    <div className='navbar'>
        <Button variant="outlined" color='secondary' onClick={() => navigate('/')}>
        About
      </Button>
      <Button variant="outlined" onClick={() => navigate('/itskills')}>
        IT Skills
      </Button>
      <Button variant="outlined" color='success' onClick={() => navigate('/projects')}>
        Projetcs
      </Button>
      <Button variant="outlined" onClick={() => navigate('/comingsoon')}>
        Next
      </Button>
      <Button variant="outlined" color='error' onClick={() => navigate('/contacts')}>
        Contact Details
      </Button>
    </div>
  )
}

export default Navbar