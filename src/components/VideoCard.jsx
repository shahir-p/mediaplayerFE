import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addHistory, deleteVideo } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';


const VideoCard = ({ displayVideo, setDeleteStatus }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);

    const { caption, embededLink } = displayVideo;

    const today = new Date();
    console.log(today);

    const year = today.getFullYear();
    const month = today.getMonth()+ 1;
    const day = today.getDate();
    console.log(year, month, day);

    const hour = today.getHours();
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const timeValue=`${day}-${month}-${year} ${hour}:${minutes}`
    console.log("timeValue",timeValue);

    const history={
      caption:caption,
      embededLink:embededLink,
      timeStamp:timeValue

    }
    await addHistory(history)



  }

  const removeVideo = async (id) => {
    const response = await deleteVideo(id);
    console.log("response", response);
    if (response.status === 200) {
      setDeleteStatus(response)
      toast.success(`${displayVideo.caption} deleted Succefully`)

    }

  }


  return (
    <>
      <Card style={{ width: '17rem', margin: "10px" }}>
        <Card.Img variant="top" src={displayVideo.thumbnailUrl} width={'300px'} onClick={handleShow} />
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Title>{displayVideo.caption.slice(0, 12)}..</Card.Title>
            <Button variant="white" onClick={() => removeVideo(displayVideo.id)}><i class="fa-solid fa-trash text-danger" ></i></Button>
          </div>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        data-bs-theme='dark'
      >
        <Modal.Header closeButton>
          <Modal.Title >{displayVideo.caption.slice(0, 12)}..</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="350" src={displayVideo.embededLink}></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

    </>
  )
}

export default VideoCard