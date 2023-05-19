import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function MenuSidebar() {
    const navigate = useNavigate()
    return (
        <div id="menu-sidebar" data-menu-active="nav-welcome"
            class="offcanvas offcanvas-start offcanvas-detached d-block">
            <div class="menu-size" style={{ width: "230px" }}>
                <div>
                    <div class="page-title sidebar-title d-flex">
                        <div class="align-self-center">
                            <h1>Username</h1>
                            <p class="color-highlight">$123</p>
                        </div>
                    </div>

                    <div class="divider divider-margins mb-3 opacity-50"></div>

                    <div class="list-group list-custom list-menu-large">
                        <a href="#" id="nav-welcome" class="list-group-item list-group-item-active" onClick={e => {
                            e.preventDefault()
                            navigate("/deposit")
                        }}>
                            <i class="bi bg-red-dark shadow-bg shadow-bg-xs bi-heart-fill"></i>
                            <div>Deposit</div>
                            <i class="bi bi-chevron-right"></i>
                        </a>
                        <a href="#" id="nav-pages" class="list-group-item" onClick={e => {
                            e.preventDefault()
                            navigate("/withdraw")
                        }}>
                            <i class="bi bg-green-dark shadow-bg shadow-bg-xs bi-star-fill"></i>
                            <div>Withdraw</div>
                            <i class="bi bi-chevron-right"></i>
                        </a>
                        <a href="#" id="nav-homes" class="list-group-item" onClick={e => {
                            e.preventDefault()
                            navigate("/promotions")
                        }}>
                            <i class="bi bg-blue-dark shadow-bg shadow-bg-xs bi-house-fill"></i>
                            <div>Promotions</div>
                            <i class="bi bi-chevron-right"></i>
                        </a>
                        <a href="#" id="nav-comps" class="list-group-item" onClick={e => {
                            e.preventDefault()
                            navigate("/history")
                        }}>
                            <i class="bi bg-brown-dark shadow-bg shadow-bg-xs bi-gear-wide-connected"></i>
                            <div>Transaction History</div>
                            <i class="bi bi-chevron-right"></i>
                        </a>
                        <a data-bs-toggle="offcanvas" data-bs-target="#menu-highlights" href="#" class="list-group-item" onClick={e => {
                            e.preventDefault()
                            navigate("/account")
                        }}>
                            <i class="bi bg-magenta-dark shadow-bg shadow-bg-xs bi-droplet"></i>
                            <div>Account</div>
                            <i class="bi bi-chevron-right"></i>
                        </a>
                    </div>

                    <div class="divider divider-margins mb-3 opacity-50"></div>

                    <div class="list-group list-custom list-menu-small">
                        <a href="#" class="list-group-item" onClick={e => {
                            e.preventDefault()
                            navigate("/")
                        }}>
                            <i class="bi bi-bar-chart-fill opacity-20 font-16"></i>
                            <div>Log Out</div>
                            <i class="bi bi-chevron-right"></i>
                        </a>
                    </div>

                    <div class="divider divider-margins opacity-50"></div>
                    <p class="px-3 font-9 opacity-30 color-theme mt-n3">Copyright <span class="copyright-year"></span>. Made with <i class="bi bi-heart-fill color-red-dark px-1"></i> by Enabled</p>
                </div>
            </div>
        </div>

    )
}

export default MenuSidebar