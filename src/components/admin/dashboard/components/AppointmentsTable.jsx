import React, { useRef, useState } from 'react';
import { appointments, Doctors, Locations, users } from './../../../../Data';
import './scss/appointmentsTable.css';
import forward from '../../../../icons/CaretCircleRight.svg'
import backward from '../../../../icons/CaretCircleLeft.svg'

const AppointmentsTable = ({ list, count, headerList }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const currentPageRef = useRef(null);

    const tableRowsCount = count
    console.log(list.length)
    const decrementPage = () => {
        setCurrentPage(currentPage => Math.max(1, currentPage - 1));
    };

    const incrementPage = () => {
        setCurrentPage(currentPage => Math.min(Math.ceil(list.length / tableRowsCount), currentPage + 1));
    };


    const startingIndex = currentPage - 1
    const endingIndex = Math.min(startingIndex + tableRowsCount, list.length);
    return (
        <div className='appointments-table-comp'>
            <table>
                <thead>
                    <tr>
                        {headerList.map((item,i)=>{return <th key={i}>{item}</th>})}
                    </tr>
                </thead>
                <tbody>
                    {appointments.slice(startingIndex, endingIndex).map(appointment => {
                        return (
                            <tr key={appointment.id}>
                                <td>{appointment.id}</td>
                                <td>{Doctors.find(doctor => doctor.id === appointment.Doctor_id)?.FirstName} {Doctors.find(doctor => doctor.id === appointment.Doctor_id)?.LastName}</td>
                                <td>{users.find(user => user.id === appointment.user_id)?.UserName}</td>
                                <td>{appointment.Date.slice(3, 15)}</td>
                                <td service={appointment.Service}>{appointment.Service}</td>
                                <td status={appointment.Status}><span>{appointment.Status}</span></td>
                                <td>{Locations.find(location => location.id === appointment.location_id)?.Name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className='table-controles'>
                <div className='flex-2'>
                    <div className="backward" onClick={decrementPage}>
                        <img src={backward} alt="" />
                    </div>
                    <div className="current"><input type="text" ref={currentPageRef} value={currentPage} onChange={(e) => { setCurrentPage(e.target.value) }} /></div>
                    <div className="forward" onClick={incrementPage}><img src={forward} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentsTable;
