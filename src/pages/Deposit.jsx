import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../App'
import PaymentGateway from '../components/PaymentGateway'
import OnlineTransfer from '../components/OnlineTransfer'
import ReloadCard from '../components/ReloadCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MenuNotification from '../components/MenuNotification'
import MenuSidebar from '../components/MenuSidebar'

function Deposit({ type }) {
    const { mode } = useContext(UserContext)
    return (
        <div className='t1'>
            <div className='page'>
                <div class="page-content footer-clear">
                    <Header />
                    <div class="card card-fixed">
                        <div class="card-center mt-4 mx-2 px-2 p-0 pt-3 rounded-m">
                            {type == "/payment-gateway" && <PaymentGateway />}
                            {type == "/online-transfer" && <OnlineTransfer />}
                            {type == "/reload-card" && <ReloadCard />}
                            <div className="d-flex justify-content-end">
                                <button class="btn btn-xl gradient-highlight shadow-bg shadow-bg-s mt-4 ms-auto">Deposit</button>
                            </div>
                            <div class="d-flex align-items-center flex-column my-3">
                                <i class="fa-brands fa-whatsapp color-dark-green fa-3x" style={{ color: "#25D366" }}></i>
                                <h3>Live chat support</h3>
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

export default Deposit