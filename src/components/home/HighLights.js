import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function HighLights() {
  return (
    <div>
      <Row>
        <Col
          lg={3}
          md={6}
          sm={6}
          xs={12}
          style={{
            marginTop: '-30px',
            marginBottom: '30px',
            zIndex: '100',
            padding: '10px 10px',
          }}
        >
          <div className="p-5 bg-white text-center text-bold rounded shadow-lg">
            Class Room
          </div>
        </Col>
        <Col
          lg={3}
          md={6}
          sm={6}
          xs={12}
          style={{
            marginTop: '-30px',
            marginBottom: '30px',
            zIndex: '100',
            padding: '10px 10px',
          }}
        >
          <div className="p-5 bg-white text-center text-bold rounded shadow-lg">
            Assignment
          </div>
        </Col>
        <Col
          lg={3}
          md={6}
          sm={6}
          xs={12}
          style={{
            marginTop: '-30px',
            marginBottom: '30px',
            zIndex: '100',
            padding: '10px 10px',
          }}
        >
          <div className="p-5 bg-white text-center text-bold rounded shadow-lg">
            Meeting
          </div>
        </Col>
        <Col
          lg={3}
          md={6}
          sm={6}
          xs={12}
          style={{
            marginTop: '-30px',
            marginBottom: '30px',
            zIndex: '100',
            padding: '10px 10px',
          }}
        >
          <div className="p-5 bg-white text-center text-bold rounded shadow-lg">
            Class Routine
          </div>
        </Col>
      </Row>
    </div>
  )
}
