import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center mt-5 bg-dark p-5'>
        <div className='d-flex align-items-center justify-content-evenly column-gap-5'>
          <div className='overview ' style={{ width: "400px" }}>
            <h5>
              <i class="fa-solid fa-video fa-bounce text-warning"></i>
              <span style={{ color: "white", marginLeft: "5px" }}>Media Player</span>
              <p style={{ color: "white", fontSize: "16px", fontWeight: "400", marginTop: "10px", textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente consequatur error obcaecati eligendi odit et neque libero placeat animi porro nihil totam, expedita provident, voluptatum magnam sed reiciendis officia nostrum.</p>
            </h5>
          </div>
          <div className='links text-white d-flex flex-column'>
            <h4>Links</h4>
            <Link to={'/'} style={{textDecoration:"none", color:"white"}}>Landing Page </Link>
            <Link to={'/home'} style={{textDecoration:"none", color:"white"}}>Home </Link>
           <Link to={'/history'} style={{textDecoration:"none", color:"white"}}> Watch History</Link>
          </div>
          <div className='guids text-white d-flex flex-column'>
            <h4>Guids</h4>
            React <br />
            React Bootstrap <br />
            Font Awesome
          </div>
          <div className='contact text-white d-flex flex-column'>
            <h4>Contact</h4>
            <div className='d-flex '>
              <input type="text" placeholder='Email' className='form-control' />
              <button className='btn btn-warning ms-2'>Subscribe</button>
            </div>
         <div className='d-flex justify-content-evenly align-items-center mt-2'>
         <i class="fa-brands fa-instagram fa-2x"></i>
         <i class="fa-brands fa-x-twitter fa-2x"></i>
         <i class="fa-brands fa-reddit fa-2x"></i>
         <i class="fa-brands fa-facebook fa-2x"></i>
         </div>
          </div>
        </div>
      </div>
      <p className=' d-flex justify-content-center mt-2'>© COPY RIGHT 2025 MEDIA PLAYER APP BUILT WITH REACT</p>
    </>

  )
}

export default Footer