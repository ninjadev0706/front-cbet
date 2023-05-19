import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyOtp } from '../services'
import { AppContext } from '../App'
import { toast } from 'react-toastify'

function SignUp2() {
    const [state, setState] = useContext(AppContext)
    const [otp1, setOtp1] = useState("")
    const [otp2, setOtp2] = useState("")
    const [otp3, setOtp3] = useState("")
    const [otp4, setOtp4] = useState("")
    const [otp5, setOtp5] = useState("")
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()
    const navigate = useNavigate()

    const verify = () => {
        navigate("/signup3")
    }
    return (
        <div className='t3'>
            <div id="page">
                <div class="page-content pb-0">
                    <div data-card-height="cover-full" class="card mb-0">
                        <div class="card-center">
                            <div class="text-center">
                                <p class="font-600 color-highlight mb-1 font-16">Verify your Identity</p>
                                <h1 class="font-26 color-white">One Time Passcode</h1>
                            </div>
                            <div class="content px-4">
                                <div class="text-center mx-n3">
                                    <form action="">
                                    <input maxLength={1} class="otp mx-1 rounded-sm text-center font-20 font-900" type="text" onChange={(e) => {
                                            setOtp1(e.target.value)
                                            if (e.target.value) {
                                                if (ref2 && ref2.current) {
                                                    ref2.current.focus()
                                                }
                                            }
                                        }} value={otp1} ref={ref1} />
                                        <input maxLength={1} class="otp mx-1 rounded-sm text-center font-20 font-900" type="text" onChange={(e) => {
                                            setOtp2(e.target.value)
                                            if (!e.target.value) {
                                                if (ref1 && ref1.current) {
                                                    ref1.current.focus()
                                                }
                                            } else {
                                                if (ref3 && ref3.current) {
                                                    ref3.current.focus()
                                                }
                                            }
                                        }} value={otp2} ref={ref2} />
                                        <input maxLength={1} class="otp mx-1 rounded-sm text-center font-20 font-900" type="text" onChange={(e) => {
                                            setOtp3(e.target.value)
                                            if (!e.target.value) {
                                                if (ref2 && ref2.current) {
                                                    ref2.current.focus()
                                                }
                                            } else {
                                                if (ref4 && ref4.current) {
                                                    ref4.current.focus()
                                                }
                                            }
                                        }} value={otp3} ref={ref3} />
                                        <input maxLength={1} class="otp mx-1 rounded-sm text-center font-20 font-900" type="text" onChange={(e) => {
                                            setOtp4(e.target.value)
                                            if (!e.target.value) {
                                                if (ref3 && ref3.current) {
                                                    ref3.current.focus()
                                                }
                                            } else {
                                                if (ref5 && ref5.current) {
                                                    ref5.current.focus()
                                                }
                                            }
                                        }} value={otp4} ref={ref4} />
                                        <input maxLength={1} class="otp mx-1 rounded-sm text-center font-20 font-900" type="text" onChange={(e) => {
                                            setOtp5(e.target.value)
                                            if (!e.target.value) {
                                                if (ref4 && ref4.current) {
                                                    ref4.current.focus()
                                                }
                                            }
                                        }} value={otp5} ref={ref5} />
                                    </form>
                                </div>
                                <p class="text-center my-4 font-13 color-white">Didn't get your code? <a href=".#" style={{color:"#b3cfff"}}>Resend Code</a></p>
                                <a href=".#" data-back-button class="btn btn-full font-400 font-15 gradient-highlight mt-4 rounded-xs" onClick={e => {
                                    e.preventDefault()
                                    verify()
                                }}>VERIFY ACCOUNT</a>
                            </div>
                        </div>
                        <div class="card-overlay bg-black opacity-85"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp2