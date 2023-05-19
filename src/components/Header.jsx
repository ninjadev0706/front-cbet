import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    return (
        <div style={{ zIndex: "111" }}>
            <div class="page-title d-flex justify-content-end my-0">
                <div className='align-self-center me-auto t3 customized-icon'>
                <a href=".#"  data-bs-toggle="offcanvas" data-bs-target="#menu-sidebar" data-menu="menu-main"><i class="fa-solid fa-bars-staggered"></i></a>
                    <img  src={require('../images/logo.png')} alt='' width="84px" />
                </div>
                <div class="align-self-center" className='currency_icon'>
                    <a href=".#" ><img src={require('../images/headset.png')} alt='' width="23px" height="22px"/>
                    <p className="para">Live chat</p></a>
                </div>
                {/* <div class="align-self-center">
                    <a href=".#"
                        // data-bs-toggle="offcanvas"
                        // data-bs-target="#menu-notifications"
                        onClick={e=>{
                            e.preventDefault()
                            navigate("/notifications")
                        }}
                        class="icon gradient-blue color-white shadow-bg shadow-bg-xs rounded-m">
                        <i class="bi bi-bell-fill font-17"></i>
                        <em class="badge bg-red-dark color-white scale-box">3</em>
                    </a>
                </div> */}
            </div>
            <marquee width="100%" direction="left">
            📣 Judiking88 | Play safety Play JK8 | 要玩就要玩 最安全的JK8 | Come try our new added payment gateway "JK8PAY" FPX with more deposit bank method! | 📣New game lauching 🥇RG| RichGaming | Come try our new game, new luck for you ! 🎮Download our JK8 apps IOS & Android, Easy, Fast, Safe!. 🏆We highly recommend deposit using ''AUTO Ewallet'' [TouchnGo, Boostpay, Grabpay, Shopeepay, Duitnow, VIsa card, Master card, Credit card]. NO SCAM, NO WAITING, NO SCAN QR. 🎁🎁🎁 Earn extra income at JK8 just click "SHARE" button to your friends, the more you SHARE the more you GET!😘😘😘 
            </marquee>
        </div>
    )
}

export default Header