import React from "react";
import { Col, Row } from "react-bootstrap";

export default function VideoGellery() {
  return (
    <div>
      <h3 className="my-2">Video Gellery</h3>
      <Row>
        <Col md={6} sm={12}>
          <div>
            <video
              controls={true}
              autoPlay={false}
              style={{ width: "100%", height: "auto" }}
            >
              <source src="https://www.youtube.com/watch?v=bQZB4DD1Sc4" />
            </video>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div>
            <video
              controls
              autoPlay={false}
              style={{ width: "100%", height: "auto" }}
            >
              <source src="https://www.youtube.com/watch?v=bQZB4DD1Sc4" />
            </video>
          </div>
        </Col>
      </Row>
    </div>
  );
}
