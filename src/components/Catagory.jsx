import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCatagory, deleteCatagory, getallCatagories } from '../services/allApi';


const Catagory = () => {
  const [refresh,setRefresh] = useState({})
  const [show, setShow] = useState(false);
  const [catagory, setCatagory] = useState([])

  const handleClose = () => {
    setShow(false);
    setCatagoryName("")

  }
  const handleShow = () => setShow(true);

  const [catagoryName, setCatagoryName] = useState("");
  // console.log(catagoryName);

  const handleCatagory = async () => {
    if (!catagoryName) {
      toast.warning("please enter input")

    }

    else {
      const body = {
        catogName: catagoryName,
        allVideos: []
      }

      const respnse = await addCatagory(body);

      if (respnse.status === 201) {
        setRefresh(respnse)
        toast.success("Catagory created successfully")
        handleClose()
      }
    }
  }

  const getCatagory = async () => {
    const result = await getallCatagories();

    const { data } = result
    // console.log("result", data);
    setCatagory(data)

  }
  useEffect(() => {
    getCatagory()
  }, [refresh])

  const removeCatagory = async (id,catogName) => {
    const delresponse = await deleteCatagory(id)
    // console.log(delresponse);
    if(delresponse.status===200){
      setRefresh(delresponse)
      toast.success(`${catogName} Catagory Deleted Succesfully!`)
    }
    

  }

  return (
    <>
      <div className='m-3'>
        <button className='btn btn-warning' onClick={handleShow}> ADD NEW CATAGORY</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        data-bs-theme='dark'
      >
        <Modal.Header closeButton>
          <Modal.Title className='textStyle'><i class="fa-solid fa-list-ul text-warning me-3"></i>Add Catagory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='textStyle'>Please fill the form</p>
          <Form className='border border-secondary rounded p-3'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Catagory Name" className='mb-2' onChange={(e) => setCatagoryName(e.target.value)} />

            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCatagory} >Add</Button>
        </Modal.Footer>
      </Modal>

      {
        catagory?.map((item) => (
          <div className='border border-secondary rounded p-3 m-3'>
            <div className='d-flex justify-content-between align-items-center'>
              <h6 color='white'>{item.catogName}</h6>
              <Button variant="white" onClick={() => removeCatagory(item.id,item.catogName)} ><i class="fa-solid fa-trash text-danger" ></i></Button>
            </div>
          </div>
        ))
      }



    </>
  )
}

export default Catagory