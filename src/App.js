import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './App.css';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

const containerStyle = {
  width: '1000px',
  height: '400px',

};

const center = {
  lat: 36.857960,
  lng: 10.202090
};

function app() {
  return (
    
    <div className='h'> 
    <div>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">map of the word</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            S. in as: <a href="#login">"google map "</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <LoadScript
      googleMapsApiKey="AIzaSyDNhjrMIn7LKvMDFORX8cw3dyym4zHkwRg"
    >
      <GoogleMap 
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
    </div>
    </div>
  )
}

export default app
