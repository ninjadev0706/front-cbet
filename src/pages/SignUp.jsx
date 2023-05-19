import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../App'
import { signup } from '../services'
import { toast } from 'react-toastify'
import Header from '../components/Header'

function SignUp() {
    const navigate = useNavigate()
    const [state, setState] = useContext(AppContext)
    const [data, setData] = useState({
        username: "",
        password: "",
        password2: "",
        mobile: "",
    })

    const handleSubmit = () => {
        navigate("/signup2")
    }
    return (
        <div className="t3" >
            <div id="page">
                <div class="page-content pb-0">
                    <div data-card-height="cover-full" class="card mb-0 mx-0">
                        <div className="t1">
                            <Header />
                        </div>
                        <div class="card-center">
                            {/* <div class="text-left" style={{paddingLeft:"15px"}}>
                                <h1 class="font-40 color-white">Sign Up</h1>
                            </div> */}
                            <div class="content">

                                <p class="input-title my-1 font-14" style={{ color: "#FFF" }}>Full Name :</p>
                                <div class={`input-style has-borders no-icon validate-field mb-4  ${data.user ? "input-style-active" : ""}`}>
                                    <input onChange={e => setData({ ...data, user: e.target.value })} type="name" class={`form-control validate-name`} id="form1a" placeholder="Username" />
                                    <i class="fa fa-times disabled invalid color-red-dark"></i>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <em>(required)</em>
                                </div>

                                <p class="input-title my-1 font-14" style={{ color: "#FFF" }}>Mobile No :</p>
                                <div class={`input-style has-borders no-icon validate-field mb-4  ${data.phone ? "input-style-active" : ""}`}>
                                    <input onChange={e => setData({ ...data, phone: e.target.value })} type="number" class={`form-control validate-name`} id="form1a" placeholder="Phone number" />
                                    <i class="fa fa-times disabled invalid color-red-dark"></i>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <em>(required)</em>
                                </div>

                                <p class="input-title my-1 font-14" style={{ color: "#FFF" }}>Password :</p>
                                <div class="input-style has-borders no-icon validate-field mb-4">
                                    <input type="password" class="form-control validate-text" id="form3" placeholder="Password" />
                                    <i class="fa fa-times disabled invalid color-red-dark"></i>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <em>(required)</em>
                                </div>
                                {/* <div class={`input-style has-borders no-icon validate-field mb-4  ${data.password ? "input-style-active" : ""}`}>
                                    <i class="ps-1 fa fa-lock"></i>
                                    <input onChange={e => setData({ ...data, password: e.target.value })} type="password" class={`form-control validate-password`} id="form1a" placeholder="Password" />
                                    <i class="fa fa-times disabled invalid color-red-dark"></i>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <em>(required)</em>
                                </div> */}
                                <p class="input-title my-1 font-14" style={{ color: "#FFF" }}>Confirm Password :</p>

                                <div class={`input-style has-borders no-icon validate-field mb-4  ${data.password2 ? "input-style-active" : ""}`}>
                                    <input onChange={e => setData({ ...data, password2: e.target.value })} type="password" class={`form-control validate-password`} id="form1a" placeholder="Confirm Password" />
                                    <i class="fa fa-times disabled invalid color-red-dark"></i>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <em>(required)</em>
                                </div>

                                <a href=".#" data-back-button class="btn mx-auto w-100 btn-full btn_green register_btn mt-4" onClick={e => {
                                    e.preventDefault()
                                    handleSubmit()
                                }}>REGISTER</a>
                               
                                <p class="input-title text-center my-1 font-14" style={{ color: "#FFF" }}>Already Have An Account?</p>
                                <p class="input-title text-center my-1 font-14" style={{ color: "#FFF" }} onClick={e => {
                                    e.preventDefault()
                                    navigate("/")
                                }}>Login Here</p>
                            </div>
                        </div>
                        {/* <div className="t1">
                            <Footer />
                        </div> */}
                        <div class="card-overlay bg-black"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp