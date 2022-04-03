import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../components/common/Layout'
import DesktopForm from '../components/admission/DesktopForm'
import MobileForm from '../components/admission/MobileForm'
export default function Admission() {
  return (
    <Layout>
      <Container className="py-5">
        <div className="bg-custom-primary p-2 d-flex justify-content-center align-items-center">
          <div className="d-flex">
            {/* <div className="text-center">
				  <h3 className="text-danger">
					<img src="/images/logowhite.png" height="40" width="30px" />
					সানরাইজ গ্রামার স্কুল
				  </h3>
				  <p className="text-white">
					২৮ নং আশরাফ আলি রোড, সানরাইজ গ্রামার স্কুল (ভবন-১), পাথরঘাটা,
					চট্টগ্রাম
				  </p>
				</div> */}
            <h5 className="text-white text-center my-3">অনলাইন ভর্তি ফর্ম</h5>
          </div>
        </div>
        <div>
          <DesktopForm />
          <MobileForm />
        </div>
        <button className="px-5 py-2 bg-custom-primary text-white rounded shadow-sm">
          Submit
        </button>
      </Container>
    </Layout>
  )
}
