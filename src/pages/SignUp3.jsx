import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addAccount, getBanks } from '../services'
import { toast } from 'react-toastify'
import { AppContext } from '../App'

function SignUp3() {
    const navigate = useNavigate()
    const [state, setState] = useContext(AppContext)
    const [banks, setBanks] = useState([])
    const [data, setData] = useState({
        bank: "",
        fullName: "",
        account: "",
    })
    const handleSubmit = () => {
        navigate("/")
    }
    return (
        <div className="t3" >
            <div id="page">
                <div class="page-content pb-0">
                    <div data-card-height="cover-full" class="card mb-0">
                        <div class="card-center">
                            <div class="text-center">
                                <h1 class="font-40 color-white">Bank Details</h1>
                            </div>
                            <div class="content px-4">
                                <div class={`input-style no-borders no-icon mb-4  ${data.bank ? "input-style-active" : ""}`} style={{backgroundColor:"transparent",color:"#fff"}}>
                                    <label for="form1a" style={{backgroundColor:"transparent",color:"#fff"}} class="color-highlight">Select A Value</label>
                                    <select id="form1a-select" style={{backgroundColor:"transparent",borderBottomWidth:"1px"}} class={`form-control validate-name color-dark-light`}>
                                        <option value="" disabled="" selected="">Select a Bank</option>
                                        {banks.map(bank => (<option value={bank.id}>{bank.name}</option>))}
                                    </select>
                                    <span><i class="fa fa-chevron-down"></i></span>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                                    <em style={{backgroundColor:"transparent",color:"#fff"}}></em>
                                </div>
                                <div class={`input-style input-transparent no-borders has-icon validate-field mb-4  ${data.fullName ? "input-style-active" : ""}`}>
                                    <input onChange={e => setData({ ...data, fullName: e.target.value })} type="name" class={`form-control validate-name`} id="form1a" placeholder="Username" />
                                    <label for="form1a" class="color-highlight ">Username</label>
                                    <i class="fa fa-times disabled invalid color-red-dark"></i>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <em>(required)</em>
                                </div>
                                <div class={`input-style input-transparent no-borders has-icon validate-field mb-4  ${data.account ? "input-style-active" : ""}`}>
                                    <input onChange={e => setData({ ...data, account: e.target.value })} type="number" class={`form-control validate-name`} id="form1a" placeholder="Phone number" />
                                    <label for="form1a" class="color-highlight">Phone number</label>
                                    <i class="fa fa-times disabled invalid color-red-dark"></i>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <em>(required)</em>
                                </div>
                                <a href=".#" data-back-button class="btn btn-full btn-l font-600 font-15 gradient-highlight mt-4 rounded-s" onClick={e => {
                                    e.preventDefault()
                                    handleSubmit()
                                }}>Save And Continue</a>
                            </div>
                        </div>
                        <div class="card-overlay bg-black opacity-85"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp3