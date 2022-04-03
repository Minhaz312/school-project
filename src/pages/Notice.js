import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../components/common/Layout'
import DesktopNoticeBoard from '../components/information/DesktopNoticeBoard'
export default function Notice() {
  return (
    <Layout>
      <Container>
        <DesktopNoticeBoard />
      </Container>
    </Layout>
  )
}
