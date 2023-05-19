import React, { useContext } from 'react'
import { UserContext } from '../App'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MenuNotification from '../components/MenuNotification'
import MenuSidebar from '../components/MenuSidebar'

function Account() {
    const { mode } = useContext(UserContext)
    return (
        <div className='t1'>
            <div className='page'>
                <div class="page-content footer-clear">
                    <Header />
                    <div class="card card-fixed">
                        <div class="card-center mx-3 px-4 py-4 rounded-m">

                            <p class="input-title mb-2 font-14" style={{ color: "white" }}>Full Name :</p>
                            <div class="form-custom form-label form-icon mb-3 bg-transparent">
                                <input type="text" class="form-control rounded-xs" id="c1a" disabled placeholder="Full Name" />
                                <label for="c1a" class="color-theme">Full Name</label>
                                <span>(required)</span>
                            </div>

                            <p class="input-title mb-2 font-14" style={{ color: "white" }}>Bank Name:</p>
                            <div class="form-custom form-label form-icon mb-3 bg-transparent">
                                <input type="text" class="form-control rounded-xs" id="c1a" disabled placeholder="Bank" />
                                <label for="c1a" class="color-theme">Bank Name</label>
                                <span>(required)</span>
                            </div>

                            <p class="input-title mb-2 font-14" style={{ color: "white" }}>Bank Acoount No :</p>
                            <div class="form-custom form-label form-icon mb-3 bg-transparent">
                                <input type="text" class="form-control rounded-xs" id="c1a" disabled placeholder="Bank Account" />
                                <label for="c1a" class="color-theme">Bank Account No.</label>
                                <span>(required)</span>
                            </div>
                            <label class="form-check-label font-12 color_yellow" for="c2a">Remarks : For security purposes, please contact us to modify  any of information above.</label>
                            {/* <div class="d-flex align-items-center flex-column my-5">
                                <i class="fa-brands fa-whatsapp color-dark-green fa-3x" style={{ color: "#25D366" }}></i>
                                <h3>Live chat support</h3>
                            </div> */}
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

export default Account