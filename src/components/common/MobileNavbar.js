import React from 'react'
import { Accordion, Container, Navbar, Offcanvas } from 'react-bootstrap'
import {
  faBars,
  faHome,
  faUser,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import '../../navigationbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MobileNavbar() {
  const handleClose = () => setShow(false)
  const [show, setShow] = React.useState(false)
  const handleNavShow = () => setShow(true)
  return (
    <div className="mobile-menu">
      <Navbar
        bg="white"
        variant="white"
        className="mobile-menu m-0 py-1 shadow-lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <div className="d-flex flex-direction-column align-items-center">
              <img
                src="/images/logowhite.png"
                alt="logo"
                height="40"
                style={{
                  background: 'transparent',
                  width: '40px',
                }}
              />
              <img
                src="/images/namelogo.png"
                alt="logo"
                style={{
                  marginTop: '5px',
                  height: '10px',
                  background: 'transparent',
                  display: 'block',
                }}
              />
            </div>
          </Navbar.Brand>
          <div
            style={{
              cursor: 'pointer',
              padding: '10px',
            }}
          >
            <FontAwesomeIcon
              icon={faBars}
              style={{ height: '30px' }}
              onClick={handleNavShow}
            />
          </div>
        </Container>
      </Navbar>
      <Offcanvas style={{ width: '200px' }} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>School</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ padding: '0' }}>
          <ul className="mobileNav">
            <li>
              <Link href="/">
                <a className="mobileNavNoDropItem">
                  <FontAwesomeIcon
                    icon={faHome}
                    style={{ height: '18px', margin: '0 10px' }}
                  />
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span>
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{ height: '18px', marginRight: '10px' }}
                      />
                      Information
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="dropItem">
                      <li>
                        <Link href="/information/notice">Notice</Link>
                      </li>
                      <li>
                        <Link href="/information/calendar">Calendar</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            <li>
              <Link href="/" className="mobileNavNoDropItem">
                <a className="mobileNavNoDropItem">
                  {' '}
                  <FontAwesomeIcon
                    icon={faHome}
                    style={{ height: '18px', margin: '0 10px' }}
                  />
                  Academic
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="mobileNavNoDropItem">
                <a className="mobileNavNoDropItem">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ height: '18px', margin: '0 10px' }}
                  />
                  About us
                </a>
              </Link>
            </li>
            <li>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span>
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{ height: '18px', marginRight: '10px' }}
                      />
                      Gallery
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="dropItem">
                      <li>
                        <Link href="/gallery/photos">Photos</Link>
                      </li>
                      <li>
                        <Link href="/gallery/videos">Videos</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            <li>
              <Link href="/" className="mobileNavNoDropItem">
                <a className="mobileNavNoDropItem">
                  <FontAwesomeIcon
                    icon={faHome}
                    style={{ height: '18px', margin: '0 10px' }}
                  />
                  Admission
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="mobileNavNoDropItem">
                <a className="mobileNavNoDropItem">
                  <FontAwesomeIcon
                    icon={faHome}
                    style={{ height: '18px', margin: '0 10px' }}
                  />{' '}
                  Contact us
                </a>
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
