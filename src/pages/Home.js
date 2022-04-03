import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './../home.css'
import Layout from '../components/common/Layout'
// import Footer from "../components/footer/Footer";
import Banner from './../components/home/Banner'
import AboutUs from './../components/home/AboutUs'
import VoiceOf from './../components/home/VoiceOf'
import SchoolList from './../components/home/SchoolList'
import PhotoGellery from './../components/home/PhotoGellery'
import VideoGellery from './../components/home/VideoGellery'
import NoticeBoard from './../components/home/NoticeBoard'
import ContactUs from './../components/home/ContactUs'
import { useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_API)
  useEffect(async () => {
    const URL = 'http://localhost:5000/api/info/messages'
    await axios
      .get(URL)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => console.log(error))
  })
  return (
    <Layout>
      <Banner height="bannerHeight" />
      <Container fluid="lg">
        <AboutUs aboutImage="aboutImage" />
        {/* <HighLights /> */}
        <Row className="my-3">
          <Col md={6} sm={12}>
            <VoiceOf title="Message from Chairman" />
          </Col>
          <Col md={6} sm={12}>
            <VoiceOf title="Message from Principal" />
          </Col>
        </Row>
        <SchoolList />
        <Row className="my-3">
          <Col lg={9} md={12}>
            <div>
              <PhotoGellery />
              <hr />
              <VideoGellery />
            </div>
          </Col>
          <Col lg={3} md={12}>
            <NoticeBoard />
          </Col>
        </Row>
        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
          <hr />
          <ContactUs />
        </div>
      </Container>
    </Layout>
  )
}
