import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import { UserContext } from '../App'
import { useNavigate } from 'react-router-dom'
import MenuSidebar from './MenuSidebar'

const DepositNew = () => {
  const { mode } = useContext(UserContext)
  const navigate = useNavigate()
  return (
    <div className='t1'>
      <div className='page'>
        <div class="page-content footer-clear">
          <Header />
          <div id="deposit_cards">
            <div>
              <a href=".#" onClick={e => {
                e.preventDefault()
                navigate("/payment-gateway")
              }} className="pay_menu">
                <img src={require("../../src/image/auto-ewallet.jpg")} alt="" />
              </a>
              <a href=".#" onClick={e => {
                e.preventDefault()
                navigate("/online-transfer")
              }} className="pay_menu">
                <img src={require("../../src/image/online.jpg")} alt="" />
              </a>
              <a href=".#" onClick={e => {
                e.preventDefault()
                navigate("/reload-card")
              }} className="pay_menu">
                <img src={require("../../src/image/ATM.jpg")} alt="" />
              </a>

            </div>
          </div>
        </div>
        <Footer />
        <MenuSidebar />
      </div>
    </div>
  )
}

export default DepositNew