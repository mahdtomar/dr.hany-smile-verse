import React from 'react'
import { Link } from 'react-router-dom'
import './sass/ServicesSideBar.css'
const ServicesSideBar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link className="active">Service 1</Link>
                </li>
                <li>
                    <Link>Service 2</Link>
                </li>
                <li>
                    <Link>Service 3</Link>
                </li>
                <li>
                    <Link>Service 4</Link>
                </li>
            </ul>
            <div className="callus">
                <p className="title">If You Need Any Help Contact With Us</p>
                <span>+91 111 3216 745</span>
            </div>
        </div>
    )
}

export default ServicesSideBar