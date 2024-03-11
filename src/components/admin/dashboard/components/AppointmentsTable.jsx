import React from 'react'
import { appointments, Doctors, Locations, users } from './../../../../Data';
import './scss/appointmentsTable.css'
const AppointmentsTable = () => {
    return (
        <div className='appointments-table-comp'>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Doctor</th>
                    <th>Patient</th>
                    <th>Date</th>
                    <th>Service</th>
                    <th>Status</th>
                    <th>Location</th>
                </thead>
                <tbody>
                    {appointments.map(appointment => {
                        return <tr>
                            <td>{appointment.id}</td>
                            <td>{Doctors.map((doctor) => { if (doctor.id === appointment.Doctor_id) { return `${doctor.FirstName} ${doctor.LastName}` } return '' })}</td>
                            <td>{users.map(user => { if (user.id === appointment.user_id) { return `${user.UserName}` } return '' })}</td>
                            <td>{appointment.Date.slice(3, 15)}</td>
                            <td service={appointment.Service}><span>{appointment.Service}</span></td>
                            <td status={appointment.Status}><span>{appointment.Status}</span></td>
                            <td>{Locations.map(location => { if (location.id === appointment.location_id) { return `${location.Name}` } return '' })}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AppointmentsTable