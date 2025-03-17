import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { deleteHistory, gethistory } from '../services/allApi';

const History = () => {
  const [historyDetails, setHistoryDetails] = useState([])

  const [deleteStatus, setDeleteStatus] = useState({})
  const getallHistory = async () => {
    const response = await gethistory();
    const { data } = response
    setHistoryDetails(data)

    // console.log("history",response);

  }

  const removeHist=async(id)=>{
    const res=await deleteHistory(id)
    setDeleteStatus(res)

  }

  useEffect(() => {
    getallHistory()
  }, [deleteStatus])

  console.log("history", historyDetails);



  return (
    <>
      <div className='container mt-5 d-flex justify-content-between'>
        <h3>
          WATCH HISTORY
        </h3>
        <Link to={'/home'} style={{ textDecoration: "none", color: "white" }}> <i class="fa-solid fa-arrow-left me-2"></i>Back to home</Link>
      </div>

      <table className='table mt-5 mb-5 container' data-bs-theme='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            historyDetails.length > 0 ?
              historyDetails.map((item,index) => (
                <tr>
                  <td>{index+1}</td>
                  <td>{item.caption}</td>
                  <td>{item.embededLink}</td>
                  <td>{item.timeStamp}</td>
                  <td><Button variant="white" onClick={() => removeHist(item.id)}><i class="fa-solid fa-trash text-danger"></i></Button>
                  </td>
                </tr>
              )) : <p>History not found</p>
          }
        </tbody>

      </table>
    </>
  )
}

export default History