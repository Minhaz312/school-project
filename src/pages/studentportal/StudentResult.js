import React from 'react'
import PortalLayout from '../../components/common/PortalLayout'
export default function StudentResult() {
  return (
    <PortalLayout>
      <div className="border rounded shadow-sm p-3">
        <h4 className="text-center mt-3 mb-5">Student Name Info</h4>
        <div className="">
          <div className="my-3 border-bottom pb-3">
            <form action="" method="POST">
              <input type="hidden" />
              <input type="text" placeholder="Search by Exam" />
              &nbsp;Or&nbsp;
              <input type="date" placeholder="Exam Name" />
              <input
                type="submit"
                value="Search"
                className="btn btn-sm bg-custom-primary text-white mx-2"
              />
            </form>
          </div>
          <div className="">
            <table className="table">
              <thead className="bg-dark text-white">
                <th className="text-center p-3">Subject</th>
                <th className="text-center p-3">MCQ</th>
                <th className="text-center p-3">CQ</th>
                <th className="text-center p-3">Total mark</th>
                <th className="text-center p-3">Grad</th>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 text-center fw-bold">Bangla</td>
                  <td className="p-3 text-center fw-bold">19</td>
                  <td className="p-3 text-center fw-bold">57</td>
                  <td className="p-3 text-center fw-bold">76</td>
                  <td className="p-3 text-center fw-bold">A</td>
                </tr>
                <tr>
                  <td className="p-3 text-center fw-bold">Arabic</td>
                  <td className="p-3 text-center fw-bold">19</td>
                  <td className="p-3 text-center fw-bold">57</td>
                  <td className="p-3 text-center fw-bold">76</td>
                  <td className="p-3 text-center fw-bold">A</td>
                </tr>
                <tr>
                  <td className="p-3 text-center fw-bold">English</td>
                  <td className="p-3 text-center fw-bold">19</td>
                  <td className="p-3 text-center fw-bold">57</td>
                  <td className="p-3 text-center fw-bold">76</td>
                  <td className="p-3 text-center fw-bold">A</td>
                </tr>
                <tr>
                  <td className="p-3 text-center fw-bold">Mathematic</td>
                  <td className="p-3 text-center fw-bold">19</td>
                  <td className="p-3 text-center fw-bold">57</td>
                  <td className="p-3 text-center fw-bold">76</td>
                  <td className="p-3 text-center fw-bold">A</td>
                </tr>
                <tr>
                  <td className="p-3 text-center fw-bold">Physics</td>
                  <td className="p-3 text-center fw-bold">19</td>
                  <td className="p-3 text-center fw-bold">57</td>
                  <td className="p-3 text-center fw-bold">76</td>
                  <td className="p-3 text-center fw-bold">A</td>
                </tr>
                <tr>
                  <td className="p-3 text-center fw-bold">Totoal</td>
                  <td className="p-3 text-center fw-bold">total</td>
                  <td className="p-3 text-center fw-bold">total</td>
                  <td className="p-3 text-center fw-bold">total</td>
                  <td className="p-3 text-center fw-bold">total</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ paddingLeft: '13px' }}>
            <h4>
              Result : <span className="good">pass</span>
            </h4>
            <h4 style={{ display: 'inline-block' }}>Comment : </h4>
            <p className="d-inline">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              ab exercitationem ut rem.
            </p>
          </div>
          <form action="" method="POST" style={{ padding: '13px' }}>
            <input
              type="text"
              placeholder="Comment"
              className="form-control d-inline"
            />
            <input
              type="submit"
              value="Comment"
              className="btn btn-primary my-3"
            />
          </form>
        </div>
      </div>
    </PortalLayout>
  )
}
