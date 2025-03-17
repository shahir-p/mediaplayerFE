import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>

<Navbar className="bg-dark">
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
            <Navbar.Brand >
            <i class="fa-solid fa-video fa-bounce text-warning"></i>
              <span style={{color:"white", marginLeft:"5px"}}>Media Player</span>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header