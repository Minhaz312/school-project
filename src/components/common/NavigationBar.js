import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
// import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import '../../navigationbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelopeSquare,
  faMailBulk,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import NoticeMarque from './NoticeMarque'
export default function NavigationBar() {
  return (
    <div className=" shadow-lg" style={{ background: '#00539CFF' }}>
      <style>{`
      .flex-direction-column {
        flex-direction: column;
      }
      `}</style>
      <Navbar
        variant="transparent"
        className={`desktop-menu m-0 py-1`}
        style={{ background: '#00539CFF' }}
        sticky="top"
      >
        <Container>
          <Navbar.Brand to="#home">
            <div className="d-flex flex-direction-column">
              <img
                src="/images/logo.png"
                alt="logo"
                height="100"
                style={{ background: 'transparent', display: 'block' }}
              />
            </div>
          </Navbar.Brand>
          <Nav className="me-auto">
            <ul className={`navcontainer`}>
              <li>
                <Link to="/">Home</Link>
              </li>

              {/* <li>
                <a className={styles.dropmenu}>
                  Academic
                  <ul className={styles.droplist}>
                    <li>
                      <Link to="/#">Class Routine</Link>
                    </li>
                    <li>
                      <Link to="/#">Result</Link>
                    </li>
                    <li>
                      <Link to="/#">Curriculam</Link>
                    </li>
                  </ul>
                </a>
              </li> */}
              <li>
                <a className="dropmenu">
                  Information
                  <ul className="droplist">
                    <li>
                      <Link to="/information/notice">Notice</Link>
                    </li>
                    <li>
                      <Link to="/information/calendar">Calendar</Link>
                    </li>
                  </ul>
                </a>
              </li>
              <li>
                <a className="dropmenu">
                  Gallery
                  <ul className="droplist">
                    <li>
                      <Link to="/gallery/photos">Photos</Link>
                    </li>
                    <li>
                      <Link to="/gallery/videos">Videos</Link>
                    </li>
                  </ul>
                </a>
              </li>
              <li>
                <Link to="/about-us">About us</Link>
              </li>
              <li>
                <Link to="/admission">Admission</Link>
              </li>
              <li>
                <Link to="/contact-us"> Contact us</Link>
              </li>
              <li className="fw-bold text-white">|</li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </Nav>
          <div className="text-white">
            <p>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ fontSize: '20px', marginRight: '5px' }}
              />
              xyz@example.com
            </p>
            <p>
              <FontAwesomeIcon
                icon={faPhone}
                style={{ fontSize: '20px', marginRight: '5px' }}
              />
              <span>013-123456,</span>
              <span>&nbsp;018123456789</span>
            </p>
          </div>
        </Container>
      </Navbar>
      <NoticeMarque />
    </div>
  )
}
