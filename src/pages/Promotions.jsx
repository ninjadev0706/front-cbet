import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../App'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MenuNotification from '../components/MenuNotification'
import MenuSidebar from '../components/MenuSidebar'

function Promotions() {
    const { mode } = useContext(UserContext)
    return (
        <div className='t1'>
            <div className='page'>
                <div class="page-content footer-clear">
                    <Header />
                    <div class="card card-fixed">
                        <div class="card-center mx-2 px-2 py-3 rounded-m">
                            <div class="row me-0 ms-0 mb-0">
                                <div class="col-12 ps-0 pe-0 mb-4">
                                    <div class="card card-style m-1 mb-0">
                                        <img src="images/pictures/24w.jpg" alt='' class="img-fluid" />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button class="btn btn-xl gradient-highlight shadow-bg shadow-bg-s mt-4">Claim</button>
                                    </div>
                                </div>
                                <div class="col-12 ps-0 pe-0 mb-2">
                                    <div class="card card-style m-1 mb-0">
                                        <img src="images/pictures/24w.jpg" alt='' class="img-fluid" />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button class="btn btn-xl gradient-highlight shadow-bg shadow-bg-s mt-4">Claim</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {mode == "light-mode" && <div class={`card-overlay rounded-0 m-0 bg-black-light opacity-70`}></div>}
                    </div>
                </div>
                <Footer />
                <MenuSidebar />
                <MenuNotification />
            </div>
        </div>
    )
}

export default Promotions