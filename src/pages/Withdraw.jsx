import React, { useContext } from "react";
import { UserContext } from '../App'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MenuNotification from '../components/MenuNotification'
import MenuSidebar from "../components/MenuSidebar";

function Withdraw() {
    const { mode } = useContext(UserContext)
    return (
        <div className='t1'>
            <div className='page'>
                <div class="page-content footer-clear">
                    <Header />
                    <div class="card card-fixed">
                        <div class="card-center mx-3 px-4 py-4 rounded-m" style={{
                            height: "40vh",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}>
                            <div class="form-custom form-label form-icon mb-3 bg-transparent">
                                <input type="number" class="form-control rounded-xs" id="c1a" placeholder="Amount" />
                                <label for="c1a" class="color-theme">Amount</label>
                                <span>(required)</span>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button class="btn btn-xl gradient-highlight shadow-bg shadow-bg-s mt-4">Withdraw</button>
                            </div>
                        </div>
                        {mode == "light-mode" && <div class={`card-overlay rounded-0 m-0 bg-black-light opacity-70`}></div>}
                    </div>
                </div>
                <Footer />
                <MenuSidebar />
                <MenuNotification />
            </div>
        </div >
    )
}

export default Withdraw