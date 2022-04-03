import React from 'react'
import PortalLayout from '../../components/common/PortalLayout'
export default function StudentAttandance() {
  return (
    <PortalLayout>
      <div class="attendance-form">
        <form action="" method="POST">
          <table>
            <thead>
              <th>SI No.</th>
              <th>Subject</th>
              <th>Attendance</th>
            </thead>
            <tbody>
              <tr>
                <td className="p-3">1</td>
                <td className="p-3">Bangla</td>
                <td className="text-success">Present</td>
              </tr>
              <tr>
                <td className="p-3">2</td>
                <td className="p-3">Arabic</td>
                <td className="text-success">Present</td>
              </tr>
              <tr>
                <td className="p-3">3</td>
                <td className="p-3">English</td>
                <td className="text-danger">Absent</td>
              </tr>
              <tr>
                <td className="p-3">4</td>
                <td className="p-3">Mahtematics</td>
                <td className="text-success">Present</td>
              </tr>
              <tr>
                <td className="p-3">5</td>
                <td className="p-3">Physics</td>
                <td className="text-danger">Absent</td>
              </tr>
              <tr>
                <td className="p-3">6</td>
                <td className="p-3">Chemistry</td>
                <td className="text-success">Present</td>
              </tr>
              <tr>
                <td className="p-3">7</td>
                <td className="p-3">Biology</td>
                <td className="text-danger">Absent</td>
              </tr>
            </tbody>
          </table>
          <div style={{ width: '100%' }}>
            <h4>Present : 80%</h4>
            <h4>Absent : 20%</h4>
          </div>
          <input
            type="text"
            placeholder="Report..."
            class="form-control mb-3"
          />
          <input
            type="submit"
            value="Submit"
            class="btn btn-primary"
            style={{ float: 'right' }}
          />
        </form>
      </div>
    </PortalLayout>
  )
}
