import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../components/common/Layout'
import ContactUs from '../components/home/ContactUs'
export default function Contact() {
  return (
    <Layout>
      {/* <div>
			<img
			  src="/images/contactus.jpg"
			  style={{ width: "100%", height: "60vh" }}
			/>
		  </div> */}
      <Container fluid="lg">
        <h1 className="my-3 py-3 text-center border-bottom">Contact Us</h1>
        <ContactUs />
      </Container>
    </Layout>
  )
}
