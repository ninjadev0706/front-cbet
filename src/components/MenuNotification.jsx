import React from 'react'

function MenuNotification() {
    return (
        <div id="menu-notifications"
            class="offcanvas offcanvas-top offcanvas-detached rounded-m d-block"
            style={{ backgroundColor: "#fff" }}
        >
            <div class="menu-size" style={{ height: "90vh" }}>
                <div class="content pb-2">
                    <a href="page-activity.html" class="d-flex py-1 justify-content-between">
                        <div class="align-self-center ps-1">
                            <h5 class="pt-1 mb-n1">Deposit $100 Approved</h5>
                            <p class="mb-0 font-11 opacity-70">14th March 03:14 AM</p>
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
                            <h5 class="pt-1 mb-n1">Withdraw $100 Rejected</h5>
                            <p class="mb-0 font-11 opacity-70">14th March 03:14 AM</p>
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
                            <h5 class="pt-1 mb-n1">Rebate $10 Approved</h5>
                            <p class="mb-0 font-11 opacity-70">14th March 03:14 AM</p>
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
                            <h5 class="pt-1 mb-n1">Deposit $100 Approved</h5>
                            <p class="mb-0 font-11 opacity-70">14th March 03:14 AM</p>
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
    )
}

export default MenuNotification