import React from 'react'

export default function VoiceOf({ title }) {
  return (
    <div className="p-1 bg-white shadow-sm border rounded">
      <h5 className="bg-light py-2">{title}</h5>
      <div>
        <img
          src="/images/avater.png"
          style={{
            height: '200px',
            width: '180px',
            float: 'left',
            marginRight: '10px',
          }}
        />
        <p style={{ textAlign: 'justify' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum...<a href="#">Read More</a>
        </p>
      </div>
    </div>
  )
}
