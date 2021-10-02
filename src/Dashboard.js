import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="table">
           <div className="list">
                 <h1>GROWTH PLUG</h1>
             </div>
             <div className="list1">
                 <table>
                 <tr><Link to="" >Dashboard</Link></tr>
                 
                 <tr><Link to="" >Website</Link></tr>
                 <tr><Link to="" >Visitors</Link></tr>
                 <tr><Link to="" >Reviews</Link></tr>
                 <tr><Link to="" >Listings</Link></tr>
                 <tr><Link to="" >Appointments</Link></tr>
                 <tr><Link to="" >Settings</Link></tr>
                 </table>
                
             </div>
            <div className="tb">
            <table>
            <th>Source</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Reading </th>
            <th>Listed</th> 
            <th>Status</th>
            <th>Action</th>
            </table>
             </div>
        </div>
    )
}

export default Dashboard
