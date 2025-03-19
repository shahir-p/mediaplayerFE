import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const Landingpage = () => {
  return (
    <>
      <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly '>
        <Row>
          <Col >
            <h3 className='textStyle'>WELCOME TO<span className='text-warning'> MEADIA PLAYER</span></h3>
            <p className='textStyle mt-3 ' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio a deleniti, eos voluptate, cupiditate alias nulla magni doloremque laborum eius sunt ad non fugiat, cum error. Perferendis nobis deserunt delectus?
              Et reprehenderit, nesciunt quidem exercitationem hic natus tempora, quibusdam sit expedita fugit eius suscipit minus minima assumenda tenetur neque. Impedit illum sit placeat voluptates beatae dolorum minus totam, eligendi ut.</p>
            <Link to={'/home'}>
              <button className="btn btn-warning mt-2">GET STARTED <i className="fa-solid fa-arrow-right ms-1"></i></button>
            </Link>
          </Col>
          <Col style={{ marginLeft: "150px" }}>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" width={"350px"} className='ms-5' />
          </Col>
        </Row>
      </Container>
      {/* second section */}
      <div className='container'>
        <h3 className='textStyle'>Features</h3>
        <div className='d-flex align-items-center justify-content-evenly mt-5'>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
              <Card.Body>
                <Card.Title>Add Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Link to={'/home'}>
                  <Button variant="primary">Add Videos</Button></Link>

              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" />
              <Card.Body>
                <Card.Title>View Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Link to={'/home'}>
                  <Button variant="primary">View Videos</Button></Link>

              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
              <Card.Body>
                <Card.Title>Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Link to={'/history'}>
                  <Button variant="primary">Watch History</Button></Link>

              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* third Section */}
      <div className="container mt-5 border rounded p-5">
        <Row>
          <Col>
          <h3 className='textStyle'>SIMPLE AND POWERFUL</h3>
          <p className='textStyle'><span className='fs-5 fw-bold'>Play Everything :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vel maiores vero recusandae illum voluptate alias reiciendis, ipsam tempore doloribus facilis non officia aperiam aliquam dignissimos iste ea aspernatur voluptatum.</p>
          <p className='textStyle'><span className='fs-5 fw-bold'>Play Everything :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vel maiores vero recusandae illum voluptate alias reiciendis, ipsam tempore doloribus facilis non officia aperiam aliquam dignissimos iste ea aspernatur voluptatum.</p>
          <p className='textStyle'><span className='fs-5 fw-bold'>Play Everything :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vel maiores vero recusandae illum voluptate alias reiciendis, ipsam tempore doloribus facilis non officia aperiam aliquam dignissimos iste ea aspernatur voluptatum.</p>
          </Col>
          <Col>
          <div>
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/k0Ka-deab1s?list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbAVMk0Ka-deab1s" title="Ed Sheeran &amp; Diljit Dosanjh - Shape of You x Naina (Live in Birmingham 2024)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Landingpage