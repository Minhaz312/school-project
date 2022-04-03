import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Banner({ height }) {
  const [index, setIndex] = React.useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <div style={{ zIndex: '-1' }} className={`${height}`}>
      {/* https://sacctg.com/cmsfiles/images/mbanner-02.png */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className={`${height}`}>
          <img
            className="d-block w-100"
            src="/images/avater.png"
            alt="First slide"
            style={{
              height: `100%`,
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              background: 'rgba(0, 83, 156, 0.623)',
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#ffffff',
              }}
            >
              <h1>Image 1</h1>
            </div>
          </div>
          <Carousel.Caption>
            <h3>this is caption one</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{' '}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={`${height}`}>
          <img
            className="d-block w-100"
            src="/images/avater.png"
            alt="Second slide"
            style={{ height: `100%`, objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              background: 'rgba(0, 83, 156, 0.623)',
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#ffffff',
              }}
            >
              <h1>Image 2</h1>
            </div>
          </div>
          <Carousel.Caption>
            <h3>this is caption two</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{' '}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={`${height}`}>
          <img
            className="d-block w-100"
            src="/images/avater.png"
            alt="Third slide"
            style={{ height: `100%`, objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              background: 'rgba(0, 83, 156, 0.623)',
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#ffffff',
              }}
            >
              <h1>Image 3</h1>
            </div>
          </div>
          <Carousel.Caption>
            <h3>this is caption three</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{' '}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={`${height}`}>
          <img
            className="d-block w-100"
            src="/images/avater.png"
            alt="Third slide"
            style={{ height: `100%`, objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              background: 'rgba(0, 83, 156, 0.623)',
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#ffffff',
              }}
            >
              <h1>Image 4</h1>
            </div>
          </div>
          <Carousel.Caption>
            <h3>this is caption four</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{' '}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={`${height}`}>
          <img
            className="d-block w-100"
            src="/images/avater.png"
            alt="Third slide"
            style={{ height: `100%`, objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              background: 'rgba(0, 83, 156, 0.623)',
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#ffffff',
              }}
            >
              <h1>Image 5</h1>
            </div>
          </div>
          <Carousel.Caption>
            <h3>this is caption five</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{' '}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={`${height}`}>
          <img
            className="d-block w-100"
            src="/images/avater.png"
            alt="Third slide"
            style={{ height: `100%`, objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              background: 'rgba(0, 83, 156, 0.623)',
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#ffffff',
              }}
            >
              <h1>Image 6</h1>
            </div>
          </div>
          <Carousel.Caption>
            <h3>this is caption six</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{' '}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={`${height}`}>
          <img
            className="d-block w-100"
            src="/images/avater.png"
            alt="Third slide"
            style={{ height: `100%`, objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              background: 'rgba(0, 83, 156, 0.623)',
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#ffffff',
              }}
            >
              <h1>Image 7</h1>
            </div>
          </div>
          <Carousel.Caption>
            <h3>this is caption seven</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{' '}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
