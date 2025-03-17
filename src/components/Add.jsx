import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allApi';
import { toast } from 'react-toastify';

const Add = ({setUploadVideoStatus}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setVideoDetails({
      caption: "",
      thumbnailUrl: "",
      embededLink: ""
    })
  }
  const handleShow = () => setShow(true);


  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    thumbnailUrl: "",
    embededLink: ""
  })

  const handleUpload = async() => {
    console.log("show");
    console.log(videoDetails);

    const { caption, thumbnailUrl, embededLink } = videoDetails;

    if (!caption || !thumbnailUrl || !embededLink) {
      toast.warning('enter the form completely')
    }else{
    const result=  await uploadVideo(videoDetails)

    if (result.status===201){
      setUploadVideoStatus(result)
      toast.success("successfully created")
    
      handleClose();
    }else{
      toast.error("error during creation")
    }
    }


  }

  const setEmbededLink = (data) => {
    const link = `https://www.youtube.com/embed/${data.slice(-11)}`;
    setVideoDetails({ ...videoDetails, embededLink: link })

  }

  return (
    <>
      <div className='d-flex align-items-center'>
        <h5 className='textStyle'>UPLOAD NEW VIDEO</h5>
        <button className='btn' onClick={handleShow}><i className="fa-solid fa-cloud-arrow-up text-white fs-5"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        data-bs-theme='dark'
      >
        <Modal.Header closeButton>
          <Modal.Title className='textStyle'><i class="fa-solid fa-film me-2 text-warning"></i>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='textStyle'>Please fill the form</p>
          <Form className='border border-secondary rounded p-3'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Video Title" className='mb-2'
                onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })}
              />
              <Form.Control type="text" placeholder="Video Thumbnail" className='mb-2'
                onChange={(e) => setVideoDetails({ ...videoDetails, thumbnailUrl: e.target.value })} />
              <Form.Control type="text" placeholder="Video Link"
                onChange={(e) => setEmbededLink(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default Add