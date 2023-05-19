import React from 'react';
import { useNavigate } from 'react-router-dom';

const BalanceWrapper = () => {
  const navigate = useNavigate()
  return (
    <div className="balance_wrapper">
      <div>
        <div className="links">
          <a href=".#" onClick={e => {
            e.preventDefault()
            navigate("/")
          }}>Login</a>
          <a href=".#" className='register' onClick={e => {
            e.preventDefault()
            navigate("/signup")
          }}>Register</a>
        </div>
      </div>
      <div className="pbalance">
        <div className="balance_btns">
          <a href=".#" className="btns" onClick={e => {
            e.preventDefault()
            navigate("/deposit")
          }}>DEPOSIT</a>
          <a href=".#" className="btns withdraw_btn" onClick={e => {
            e.preventDefault()
            navigate("/withdraw")
          }}>WITHDRAW</a>
          <a href=".#" className="btns refresh_btn" onClick={e => {
            e.preventDefault()
            navigate("/home")
          }} >REFRESH</a>
        </div>
      </div>
    </div>
  )
}

export default BalanceWrapper