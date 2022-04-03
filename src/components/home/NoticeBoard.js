import React from 'react'

export default function NoticeBoard() {
  return (
    <div className="bg-white shadow-sm p-1">
      <h6 className="text-center pb-2 mt-1 border-bottom mb-3">Notice Board</h6>
      <div className="border bg-light px-1 pt-1 my-1">
        <div>
          <b className="d-inline">
            <u>Notice:</u>
          </b>
          &nbsp;{' '}
          <p className="fst-italic d-inline text-dark">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>
        </div>
        {/* <hr /> */}
        <p
          className="fst-italic border-top pb-0 mb-0"
          style={{ fontSize: '12px' }}
        >
          1/3/2021 . Thursday
        </p>
      </div>
      <div className="border bg-light px-1 pt-1 my-1">
        <div>
          <b className="d-inline">
            <u>Notice:</u>
          </b>
          &nbsp;{' '}
          <p className="fst-italic d-inline">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>
        </div>
        {/* <hr /> */}
        <p
          className="fst-italic border-top  pb-0 mb-0"
          style={{ fontSize: '12px' }}
        >
          1/3/2021 . Thursday
        </p>
      </div>
      <div className="border bg-light px-1 pt-1 my-1">
        <div>
          <b className="d-inline">
            <u>Notice:</u>
          </b>
          &nbsp;{' '}
          <p className="fst-italic d-inline">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>
        </div>
        {/* <hr /> */}
        <p
          className="fst-italic border-top  pb-0 mb-0"
          style={{ fontSize: '12px' }}
        >
          1/3/2021 . Thursday
        </p>
      </div>
    </div>
  )
}
