import React, { useState, useRef } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCompress,
  faPauseCircle,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/common/Layout'

export default function Videos() {
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [playVideo, setPlayVideo] = useState(false)
  const [volume, setVolume] = useState(1)
  const [totalDuration, setTotalDuration] = useState(0)
  const [videoFullScreenMode, setVideoFullScreenMode] = useState(false)
  const ref = useRef(null)
  const handleVideoModalOpen = () => {
    // setTotalDuration(ref.current.getDuration())
    setShowVideoModal(true)
  }
  const handlePlayVidoe = () => {
    if (playVideo === true) {
      setPlayVideo(false)
    } else {
      setPlayVideo(true)
    }
  }
  const handleVideoModalClose = () => {
    setShowVideoModal(false)
  }
  const videoFullScreen = () => {
    if (videoFullScreenMode === true) {
      setVideoFullScreenMode(false)
    } else {
      setVideoFullScreenMode(true)
    }
  }
  return (
    <Layout>
      <Modal
        show={showVideoModal}
        onHide={handleVideoModalClose}
        fullscreen={videoFullScreenMode}
      >
        <Modal.Body>
          <div
            style={{
              width: 'auto',
              height: '100%',
            }}
          >
            <ReactPlayer
              url="#"
              playing={playVideo}
              volume={volume}
              ref={ref}
              style={{ background: 'grey' }}
              onDuration={(duration) => {
                setTotalDuration(duration)
              }}
              width="100%"
              height="100%"
            />
            <div className="d-flex justify-content-between w-100">
              <div className="d-flex align-items-center">
                <input
                  type="range"
                  defaultValue={volume}
                  step="any"
                  min={0}
                  max={1}
                  onChange={(e) => setVolume(e.target.value)}
                />
                <p>{(totalDuration / 60).toFixed(2)}</p>
              </div>
              <button className="btn" onClick={videoFullScreen}>
                <FontAwesomeIcon
                  icon={faCompress}
                  style={{ fontSize: '40px' }}
                />
              </button>
            </div>

            <div className="w-100 text-center" onClick={handlePlayVidoe}>
              <FontAwesomeIcon
                icon={playVideo ? faPauseCircle : faPlayCircle}
                style={{
                  //   height: '40px',
                  fontSize: '40px',
                  color: '#000',
                  cursor: 'pointer',
                }}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleVideoModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Container fluid="lg">
        <h1 className="text-center my-3 py-3 border-bottom">Videos Gallery</h1>
        <Row className="pb-3">
          <Col md={4} sm={4} xs={6} className="text-center p-1 border">
            <div className="gallery-img-container">
              <div className="gallery-img-content">
                <div className="d-block" style={{ zIndex: '1000' }}>
                  <div onClick={handleVideoModalOpen}>
                    <FontAwesomeIcon
                      icon={faPlayCircle}
                      style={{
                        fontSize: '40px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        zIndex: '100',
                      }}
                    />
                  </div>
                  <p>
                    these are our cultural programmes pictures, to make memory
                  </p>
                </div>
              </div>
              <ReactPlayer url="#" width="100%" height="100%" />
            </div>
          </Col>
          <Col md={4} sm={4} xs={6} className="text-center p-1 border">
            <div className="gallery-img-container">
              <div className="gallery-img-content">
                <div className="d-block" style={{ zIndex: '1000' }}>
                  <div onClick={handleVideoModalOpen}>
                    <FontAwesomeIcon
                      icon={faPlayCircle}
                      style={{
                        fontSize: '40px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        zIndex: '100',
                      }}
                    />
                  </div>
                  <p>
                    these are our cultural programmes pictures, to make memory
                  </p>
                </div>
              </div>
              <ReactPlayer url="#" width="100%" height="100%" />
            </div>
          </Col>
          <Col md={4} sm={4} xs={6} className="text-center p-1 border">
            <div className="gallery-img-container">
              <div className="gallery-img-content">
                <div className="d-block" style={{ zIndex: '1000' }}>
                  <div onClick={handleVideoModalOpen}>
                    <FontAwesomeIcon
                      icon={faPlayCircle}
                      style={{
                        fontSize: '40px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        zIndex: '100',
                      }}
                    />
                  </div>
                  <p>
                    these are our cultural programmes pictures, to make memory
                  </p>
                </div>
              </div>
              <ReactPlayer url="#" width="100%" height="100%" />
            </div>
          </Col>
          <Col md={4} sm={4} xs={6} className="text-center p-1 border">
            <div className="gallery-img-container">
              <div className="gallery-img-content">
                <div className="d-block" style={{ zIndex: '1000' }}>
                  <div onClick={handleVideoModalOpen}>
                    <FontAwesomeIcon
                      icon={faPlayCircle}
                      style={{
                        fontSize: '40px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        zIndex: '100',
                      }}
                    />
                  </div>
                  <p>
                    these are our cultural programmes pictures, to make memory
                  </p>
                </div>
              </div>
              <ReactPlayer url="#" width="100%" height="100%" />
            </div>
          </Col>
          <Col md={4} sm={4} xs={6} className="text-center p-1 border">
            <div className="gallery-img-container">
              <div className="gallery-img-content">
                <div className="d-block" style={{ zIndex: '1000' }}>
                  <div onClick={handleVideoModalOpen}>
                    <FontAwesomeIcon
                      icon={faPlayCircle}
                      style={{
                        fontSize: '40px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        zIndex: '100',
                      }}
                    />
                  </div>
                  <p>
                    these are our cultural programmes pictures, to make memory
                  </p>
                </div>
              </div>
              <ReactPlayer url="#" width="100%" height="100%" />
            </div>
          </Col>
          <Col md={4} sm={4} xs={6} className="text-center p-1 border">
            <div className="gallery-img-container">
              <div className="gallery-img-content">
                <div className="d-block" style={{ zIndex: '1000' }}>
                  <div onClick={handleVideoModalOpen}>
                    <FontAwesomeIcon
                      icon={faPlayCircle}
                      style={{
                        fontSize: '40px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        zIndex: '100',
                      }}
                    />
                  </div>
                  <p>
                    these are our cultural programmes pictures, to make memory
                  </p>
                </div>
              </div>
              <ReactPlayer url="#" width="100%" height="100%" />
            </div>
          </Col>
          <Col md={4} sm={4} xs={6} className="text-center p-1 border">
            <div className="gallery-img-container">
              <div className="gallery-img-content">
                <div className="d-block" style={{ zIndex: '1000' }}>
                  <div onClick={handleVideoModalOpen}>
                    <FontAwesomeIcon
                      icon={faPlayCircle}
                      style={{
                        fontSize: '40px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        zIndex: '100',
                      }}
                    />
                  </div>
                  <p>
                    these are our cultural programmes pictures, to make memory
                  </p>
                </div>
              </div>
              <ReactPlayer url="#" width="100%" height="100%" />
            </div>
          </Col>
          <Col md={4} sm={4} xs={6} className="text-center p-1 border">
            <div className="gallery-img-container">
              <div className="gallery-img-content">
                <div className="d-block" style={{ zIndex: '1000' }}>
                  <div onClick={handleVideoModalOpen}>
                    <FontAwesomeIcon
                      icon={faPlayCircle}
                      style={{
                        fontSize: '40px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        zIndex: '100',
                      }}
                    />
                  </div>
                  <p>
                    these are our cultural programmes pictures, to make memory
                  </p>
                </div>
              </div>
              <ReactPlayer url="#" width="100%" height="100%" />
            </div>
          </Col>
          <Col md={4} sm={4} xs={6} className="text-center p-1 border">
            <div className="gallery-img-container">
              <div className="gallery-img-content">
                <div className="d-block" style={{ zIndex: '1000' }}>
                  <div onClick={handleVideoModalOpen}>
                    <FontAwesomeIcon
                      icon={faPlayCircle}
                      style={{
                        fontSize: '40px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        zIndex: '100',
                      }}
                    />
                  </div>
                  <p>
                    these are our cultural programmes pictures, to make memory
                  </p>
                </div>
              </div>
              <ReactPlayer url="#" width="100%" height="100%" />
            </div>
          </Col>
          <Col md={4} sm={4} xs={6} className="text-center p-1 border">
            <div className="gallery-img-container">
              <div className="gallery-img-content">
                <div className="d-block" style={{ zIndex: '1000' }}>
                  <div onClick={handleVideoModalOpen}>
                    <FontAwesomeIcon
                      icon={faPlayCircle}
                      style={{
                        fontSize: '40px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        zIndex: '100',
                      }}
                    />
                  </div>
                  <p>
                    these are our cultural programmes pictures, to make memory
                  </p>
                </div>
              </div>
              <ReactPlayer url="#" width="100%" height="100%" />
            </div>
          </Col>
          <Col md={4} sm={4} xs={6} className="text-center p-1 border">
            <div className="gallery-img-container">
              <div className="gallery-img-content">
                <div className="d-block" style={{ zIndex: '1000' }}>
                  <div onClick={handleVideoModalOpen}>
                    <FontAwesomeIcon
                      icon={faPlayCircle}
                      style={{
                        fontSize: '40px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        zIndex: '100',
                      }}
                    />
                  </div>
                  <p>
                    these are our cultural programmes pictures, to make memory
                  </p>
                </div>
              </div>
              <ReactPlayer url="#" width="100%" height="100%" />
            </div>
          </Col>
          <Col md={4} sm={4} xs={6} className="text-center p-1 border">
            <div className="gallery-img-container">
              <div className="gallery-img-content">
                <div className="d-block" style={{ zIndex: '1000' }}>
                  <div onClick={handleVideoModalOpen}>
                    <FontAwesomeIcon
                      icon={faPlayCircle}
                      style={{
                        fontSize: '40px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        zIndex: '100',
                      }}
                    />
                  </div>
                  <p>
                    these are our cultural programmes pictures, to make memory
                  </p>
                </div>
              </div>
              <ReactPlayer url="#" width="100%" height="100%" />
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
          <button className="px-5 py-2 border rounded my-3 shadow-sm bg-custom-primary text-white">
            Load More
          </button>
        </div>
      </Container>
    </Layout>
  )
}
