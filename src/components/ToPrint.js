import React, {useRef} from 'react'
import { Table } from 'react-bootstrap'
import QRCode from 'qrcode.react'

export default class ToPrint extends React.Component {


	
	render() {
		return (
			<div className="border p-3 bg-white shadow-sm">
				<div className="d-flex justify-content-between align-items-start border-bottom my-3 py-3">
					<h3>Astha online shopping</h3>
					<div>
						<p>Mobile: 019927387</p>
						<p>E-mail: astha@gmail.com</p>
						<p>Address: Bahaddarhat, chattogram</p>
					</div>
				</div>
				<div className="mb-3 pb-3 border-bottom">
					<p>Name: username</p>
					<p>Address: Address</p>
				</div>
				<Table striped hover bordered>
					<thead>
						<th className="p-3 bg-dark text-white">Id</th>
						<th className="p-3 bg-dark text-white">Product name</th>
						<th className="p-3 bg-dark text-white">Product price</th>
						<th className="p-3 bg-dark text-white">Invoice no</th>
					</thead>
					<tbody>
						<tr>
							<td>xakjafadke</td>
							<td>core i5 hp laptop</td>
							<td>23,000</td>
							<td>1001</td>
						</tr>
						<tr>
							<td>xakjafadke</td>
							<td>laptop stand</td>
							<td>700</td>
							<td>1001</td>
						</tr>
					</tbody>
				</Table>
				{/* <QRCode 
				value="http://facebook.github.io/react/"
				imageSettings={{
					src: "/favicon.ico",
					x: null,
					y: null,
					height: 24,
					width: 24,
					excavate: true,
				  }}
				/> */}
				
			</div>
		)
	}

	
}
