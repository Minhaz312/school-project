import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function PhotoGellery() {
  return (
    <div>
      <h3 className="my-2">Photo Gellery</h3>
      <div>
        <Row>
          <Col md={2} sm={3} xs={4} className="text-center p-1 border">
            <img
              src="/images/avater.png"
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={2} sm={3} xs={4} className="text-center p-1 border">
            <img
              src="/images/avater.png"
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={2} sm={3} xs={4} className="text-center p-1 border">
            <img
              src="/images/avater.png"
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={2} sm={3} xs={4} className="text-center p-1 border">
            <img
              src="/images/avater.png"
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={2} sm={3} xs={4} className="text-center p-1 border">
            <img
              src="/images/avater.png"
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={2} sm={3} xs={4} className="text-center p-1 border">
            <img
              src="/images/avater.png"
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={2} sm={3} xs={4} className="text-center p-1 border">
            <img
              src="/images/avater.png"
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={2} sm={3} xs={4} className="text-center p-1 border">
            <img
              src="/images/avater.png"
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={2} sm={3} xs={4} className="text-center p-1 border">
            <img
              src="/images/avater.png"
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={2} sm={3} xs={4} className="text-center p-1 border">
            <img
              src="/images/avater.png"
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={2} sm={3} xs={4} className="text-center p-1 border">
            <img
              src="/images/avater.png"
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={2} sm={3} xs={4} className="text-center p-1 border">
            <img
              src="/images/avater.png"
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
          </Col>
        </Row>
      </div>
      <div className="d-flex justify-content-center my-3">
        <Link href="/gallery/photos">
          <span className="px-5 py-1 btn bg-custom-primary text-white">
            See All
          </span>
        </Link>
      </div>
    </div>
  )
}
