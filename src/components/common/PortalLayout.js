import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import '../../navigationbar.css'
export default function PortalLayout({ children }) {
  return (
    <Layout>
      <Container fluid="md" style={{ height: '80vh', overflow: 'hidden' }}>
        <Row className="bg-custom-primary">
          <Col md={3}>
            <div className="bg-custom-primary p-3">
              <ul className="portal-navbar">
                <li>
                  <Link
                    className="d-block py-2 mb-2 border-bottom text-center bg-white fw-bold"
                    to="/portal/student/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-block py-2 mb-2 border-bottom text-center bg-white fw-bold"
                    to="/portal/student/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-block py-2 mb-2 border-bottom text-center bg-white fw-bold"
                    to="/portal/student/result"
                  >
                    Result
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-block py-2 mb-2 border-bottom text-center bg-white fw-bold"
                    to="/portal/student/attendance"
                  >
                    Attendance
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-block py-2 mb-2 border-bottom text-center bg-white fw-bold"
                    to="/portal/student/billing"
                  >
                    Billing
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={9} className="bg-white p-3 mt-3">
            <div style={{ display: 'block', height: '76vh', overflow: 'auto' }}>
              {children}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
