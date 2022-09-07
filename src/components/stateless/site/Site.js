import React from 'react'
import Home from "../../statefull/home/Home"
import Admin from "../admin/Admin"
import { Routes, Route } from "react-router-dom"
import Header from '../header/Header'
import Footer from '../footer/Footer'

export default function Site() {
    return (
        <>
            {/* <NavLink to="/">Home</NavLink>
            <NavLink to="/admin">Admin</NavLink> */}

            <Header />

            <div className="site">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            </div>

            <div className="minSite"></div>

            <Footer />
        </>
    )
}
