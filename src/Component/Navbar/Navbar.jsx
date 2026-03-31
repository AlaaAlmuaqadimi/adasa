
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
// import style Form './Navbar.module.css'

export default function Navbar() {
    return (
        <div >
            <nav className="navbar navbar-expand-lg py-1 pt-2 navbar-bg fixed-top px-5 ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='d-flex'>
                        <img className='logo-img' src={logo} alt="" />
                        <div className='m-0'>
                            <h4 className='mb-0 ms-0 pe-0'>عدسة</h4>
                            <p className='photosize'>عالم التصوير الفوتوغرافي</p>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse-custom rounded-pill px-0 navbar-collapse mx-auto fw-bolder justify-content-center align-items-center" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `nav-link ms-2 rounded-pill ${isActive ? "active-link" : ""}`
                                    }
                                >
                                    الرئيسية
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="blog"
                                    className={({ isActive }) =>
                                        `nav-link ms-2 rounded-pill ${isActive ? "active-link" : ""}`
                                    }
                                >
                                    المدونة
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="about"
                                    className={({ isActive }) =>
                                        `nav-link ms-2 rounded-pill ${isActive ? "active-link" : ""}`
                                    }
                                >
                                    من نحن
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        {/* <div><i class="fa-solid fa-magnifying-glass"></i>font</div> */}
                        <div>
                            <p className='rounded-pill reading fw-bolder'>ابدأ القراءة</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
