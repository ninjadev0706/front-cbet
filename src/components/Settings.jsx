import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MenuSidebar from './MenuSidebar'

const Settings = () => {
    const navigate = useNavigate()
    return (
        <div className="t1">
            <Header />
            <div id="settings">
                <p className="setting_head mb-1">SETTING</p>
                <a href=".#" className="change_pswd w-100" onClick={e => {
                    e.preventDefault()
                    navigate("/notifications")
                }}>Change Password</a>
                <a href=".#" className="logout w100" onClick={e => {
                    e.preventDefault()
                    navigate("/")
                }}>Logout</a>
            </div>
            <Footer />
            <MenuSidebar />
        </div>
    )
}

export default Settings