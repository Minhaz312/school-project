import React from "react";
import { Col, Row } from "react-bootstrap";

export default function ContactUs() {
  return (
    <Row>
      <Col lg={6} md={12}>
        <div>
          <input
            className="form-control my-3"
            type="text"
            placeholder="Enter Name"
          />
          <input
            className="form-control my-3"
            type="text"
            placeholder="Enter Email"
          />
          <input
            className="form-control my-3"
            type="text"
            placeholder="Enter Mobile"
          />
          <textarea
            className="form-control w-100"
            rows={10}
            placeholder="Write here..."
          />
          <input
            type="submit"
            className="btn bg-custom-primary text-white w-100 my-3"
            value="Send"
          />
        </div>
      </Col>
      <Col lg={6} md={12}>
        <div className="my-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.572618374539!2d91.84215951541576!3d22.331997547385768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad274efe99f821%3A0x5b0387951483fc85!2sSunrise%20Grammar%20School!5e0!3m2!1sen!2sbd!4v1638018143818!5m2!1sen!2sbd"
            height="480"
            // style={{ border: "0", width: "100%" }}
            style={{ width: "100%" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </Col>
    </Row>
  );
}
