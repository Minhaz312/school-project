import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
export default function NoticeMarque() {
  return (
    <Container className="bg-white d-flex align-items-center border">
      <span className="fw-bold">Notice:&nbsp;</span>
      <Marquee gradient={false} pauseOnHover={true} speed={50} className="p-2">
        {/* <Link href="#">
          <span
            style={{
              textDecoration: 'none',
              fontStyle: 'italic',
              color: 'black',
              cursor: 'pointer',
            }}
          >
            This is for all students to pay there tuition fee to be able to site
            in examination hall
          </span>
        </Link>
        <span style={{ padding: '0 10px' }}>|</span> */}
        <Link href="/#">
          <span style={{ color: 'black', cursor: 'pointer' }}>
            আমাদের সাইটের ডেভেলপমেন্ট এর কাজ চলতেছে, অনুগ্রহ করে আপনারা সরাসরি
            আমাদের স্কুলের অফিসে যোগাযোগ করুন।
          </span>
        </Link>
        <span style={{ padding: '0 10px' }}>|</span>
      </Marquee>
    </Container>
  )
}
