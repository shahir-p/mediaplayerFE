import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Catagory from '../components/Catagory'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  const [uploadVideoStatus,setUploadVideoStatus]= useState({})
  
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center mt-5">
        <Add setUploadVideoStatus={setUploadVideoStatus} />
        <Link style={{ textDecoration: "none", fontSize: "22px", color: "white" }} to={'/history'}>Watch History<i class="fa-solid fa-clock-rotate-left ms-2"></i></Link>
      </div>

      {/* second section */}
      <div className='container-fluid mt-5 w-100 mb-5'>
        <div className='row'>
          <div className='col-md-9'>
            <View uploadVideoStatus={uploadVideoStatus}/>
          </div>
          <div className='col-md-3'><Catagory /></div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        pauseOnHover
        theme="colored"

      />
    </>
  )
}

export default Home