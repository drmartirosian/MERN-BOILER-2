import React from 'react'
import { FaCode } from "react-icons/fa";

function LandingPage() {
    return (
        <>
        <div className="app">
            <FaCode style={{ fontSize: '4rem' }} /><br />
            <span style={{ fontSize: '2rem' }}>LANDING PAGE</span>
        </div>
        <div style={{ float:'right' }}>Footer stuff here</div>
        </>
    )
}

export default LandingPage
