import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Layout from '../components/common/Layout'

export default function Login() {
  return (
    <Layout>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <div className="bg-white shadow-sm rounded border p-3 my-5">
            <h3 className="my-3 text-center">Login Form</h3>
            <form>
              <input
                type="text"
                className="form-control my-3"
                placeholder="Enter Id"
              />
              <input
                type="password"
                className="form-control my-3"
                placeholder="Enter Password"
              />
              <select className="form-control">
                <option>Select Role</option>
                <option>Student</option>
                <option>Teacher</option>
              </select>
              <div className="d-block my-3">
                <input type="checkbox" />
                &nbsp;Remember Me
              </div>
              <button className="btn bg-custom-primary text-white mt-3 mb-5 w-100">
                Login
              </button>
            </form>
          </div>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Layout>
  )
}
