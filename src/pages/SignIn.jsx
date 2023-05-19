import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../App'
import { toast } from 'react-toastify'
import { login } from '../services'
import MenuSidebar from '../components/MenuSidebar'

function SignIn() {
    const [state, setState] = useContext(AppContext)
    const navigate = useNavigate()
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = () => {
        navigate("/home")
        // const { username, password } = data
        // if (username && password) {
        //     login(data).then(res => {
        //         if (res.data && res.data.refresh) {
        //             localStorage.setItem("refreshToken",res.data.refresh)
        //             localStorage.setItem("accessToken",res.data.access)
        //             setState({
        //                 ...state,
        //                 refreshToken: res.data.refresh,
        //                 accessToken: res.data.access,
        //             })
        //         } else {
        //             toast.error("Something went wrong")
        //         }
        //     }).catch(err => {
        //         if (err.response && err.response.data && err.response.data.detail) {
        //             toast.error(err.response.data.detail)
        //         } else {
        //             toast.error("Something went wrong")
        //         }
        //     })
        // } else {
        //     toast.error("All fields are mandatory")
        // }
    }
    return (
        <div className="t3" >
            <div id="page">
                <div class="page-content pb-0">
                    <div data-card-height="cover-full" class="card mb-0 mx-0">
                        <div className="t1">
                            <Header />
                        </div>
                        <div class="card-center px-4">
                            <div>
                                <h1 class="font-23 font-700" style={{ color: '#b3cfff' }}>Login</h1>
                            </div>
                            <p class="input-title mb-2 font-14" style={{ color: "white" }}>Mobile No / Username</p>
                            <div >

                                <div class={`input-style has-borders has-icon validate-field mb-2  ${data.username ? "input-style-active" : ""}`}>
                                    <input type="name" class={`form-control validate-name`} id="form1" placeholder="Username" onChange={e => setData({ ...data, username: e.target.value })} />
                                    <i class="fa fa-times disabled invalid color-red-dark"></i>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <em>(required)</em>
                                </div>
                                {/* <div class={`input-style input-transparent no-borders has-icon validate-field mb-4  ${data.user ? "input-style-active" : ""}`}>
                                    <i class="ps-1 fa fa-user"></i>
                                    <input onChange={e => setData({ ...data, user: e.target.value })} type="name" class={`form-control validate-name`} id="form1a" placeholder="Username" />
                                    <label for="form1a" class="color-highlight">Username</label>
                                    <i class="fa fa-times disabled invalid color-red-dark"></i>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <em>(required)</em>
                                </div> */}
                                <p class="input-title mb-2 font-14" style={{ color: "white" }}>Password</p>
                                <div class={`input-style has-borders has-icon validate-field mb-4  ${data.password ? "input-style-active" : ""}`}>
                                    <input onChange={e => setData({ ...data, password: e.target.value })} type="password" class={`form-control validate-password`} id="form1a" placeholder="Password" />
                                    <i class="fa fa-times disabled invalid color-red-dark"></i>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <em>(required)</em>
                                </div>
                                {/* <div class={`input-style input-transparent no-borders has-icon validate-field mb-4  ${data.password ? "input-style-active" : ""}`}>
                                    <i class="ps-1 fa fa-lock"></i>
                                    <input onChange={e => setData({ ...data, password: e.target.value })} type="password" class={`form-control validate-password`} id="form1a" placeholder="Password" />
                                    <label for="form1a" class="color-highlight">Password</label>
                                    <i class="fa fa-times disabled invalid color-red-dark"></i>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <em>(required)</em>
                                </div> */}
                                <a href=".#" data-back-button class="btn btn-full btn_green mt-4" onClick={e => {
                                    e.preventDefault()
                                    handleSubmit()
                                }}>LOGIN</a>
                                {/* <div class="row pt-3 mb-3">
                                    <div class="col-6 text-start font-11">
                                    </div>
                                    <div class="col-6 text-end font-11">
                                        <a class="color-white opacity-50" href=".#" onClick={e => {
                                            e.preventDefault()
                                            navigate("/signup")
                                        }}>Create Account</a>
                                    </div>
                                </div> */}
                                <p class="input-title my-3 text-center font-14" style={{ color: "#FFF" }}>Do Not Have An Account Yet?</p>

                                <a href=".#" data-back-button class="btn mx-auto btn-full btn_green register_btn mt-2" onClick={e => {
                                    e.preventDefault()
                                    navigate("/signup")
                                }}>REGISTER</a>

                                <p class="input-title my-3 text-center font-14" style={{ color: "#FFF" }} onClick={e => {
                                    e.preventDefault()
                                    navigate("/signup")
                                }}>Forgot Password? Click Here</p>
                            </div>
                        </div>
                        <div className="t1">
                            <Footer />
                            <MenuSidebar />
                        </div>
                        <div class="card-overlay bg-black"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn