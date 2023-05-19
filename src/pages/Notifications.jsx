import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MenuSidebar from '../components/MenuSidebar'

function Notifications() {
    return (
        <div className='t1'>
            <div className='page'>
                <div class="page-content footer-clear">
                    <Header />
                    <div id="menu-notifications"
                        class="rounded-m d-block mx-2"
                    // style={{ backgroundColor: "#fff" }}
                    >
                        <div class="menu-size" style={{ height: "75vh" }}>
                            <div class="content pb-2">
                                <a href="page-activity.html" class="d-flex py-1 justify-content-between">
                                    <div class="align-self-center ps-1">
                                        <h5 class="pt-1 mb-n1 color_yellow">Deposit $100 Approved</h5>
                                        <p class="mb-0 font-11 opacity-70 color-white">14th March 03:14 AM</p>
                                    </div>
                                    <div class="align-self-center">
                                        <span class="icon rounded-s me-2 shadow-bg shadow-bg-xs">
                                            <i class="fa fa-check color-green-dark fa-3x"></i>
                                        </span>
                                    </div>
                                </a>
                                <div class="divider my-2 opacity-50"></div>
                                <a href="page-activity.html" class="d-flex py-1 justify-content-between">
                                    <div class="align-self-center ps-1">
                                        <h5 class="pt-1 mb-n1 color_yellow">Withdraw $100 Rejected</h5>
                                        <p class="mb-0 font-11 opacity-70 color-white">14th March 03:14 AM</p>
                                    </div>
                                    <div class="align-self-center">
                                        <span class="icon rounded-s me-2 shadow-bg shadow-bg-xs">
                                            <i class="fa-solid fa-circle-minus color-red-dark fa-3x"></i>
                                            {/* <i class="fa-solid fa-ban color-red-dark fa-3x"></i> */}
                                        </span>
                                    </div>
                                </a>
                                <div class="divider my-2 opacity-50"></div>
                                <a href="page-activity.html" class="d-flex py-1 justify-content-between">
                                    <div class="align-self-center ps-1">
                                        <h5 class="pt-1 mb-n1 color_yellow">Rebate $10 Approved</h5>
                                        <p class="mb-0 font-11 opacity-70 color-white">14th March 03:14 AM</p>
                                    </div>
                                    <div class="align-self-center">
                                        <span class="icon rounded-s me-2 shadow-bg shadow-bg-xs">
                                            <i class="fa fa-check color-green-dark fa-3x"></i>
                                        </span>
                                    </div>
                                </a>
                                <div class="divider my-2 opacity-50"></div>
                                <a href="page-activity.html" class="d-flex py-1 justify-content-between">
                                    <div class="align-self-center ps-1">
                                        <h5 class="pt-1 mb-n1 color_yellow">Deposit $100 Approved</h5>
                                        <p class="mb-0 font-11 opacity-70 color-white">14th March 03:14 AM</p>
                                    </div>
                                    <div class="align-self-center">
                                        <span class="icon rounded-s me-2 shadow-bg shadow-bg-xs">
                                            <i class="fa fa-check color-green-dark fa-3x"></i>
                                        </span>
                                    </div>
                                </a>
                                <div class="divider my-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <MenuSidebar />
            </div>
        </div>
    )
}

export default Notifications