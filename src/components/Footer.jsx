import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'

function Footer() {
  const { active, setActive } = useContext(UserContext)
  const navigate = useNavigate()
  return (
    <>
      <div id="footer-bar" class="footer-bar-1 footer-bar-detached">
        <a href="#" data-active={active == 1 ? true : false} className={`${active == 1 ? "active-nav" : ""}`} onClick={(e) => {
          e.preventDefault()
          setActive(1)
          navigate("/home")
        }} > <i class="fa-solid fa-house-chimney"></i>
        <p>HOME</p></a>
        
        <a href="#" data-active={active == 2 ? true : false} className={`${active == 2 ? "active-nav" : ""}`} onClick={(e) => {
          e.preventDefault()
          setActive(2)
          navigate("/promotions")
        }}><i class="fa-solid fa-receipt"></i>
        <p>PROMO</p></a>
        <a href="#" data-active={active == 3 ? true : false} className={`${active == 3 ? "active-nav" : ""}`} onClick={(e) => {
          e.preventDefault()
          setActive(3)
          navigate("/history")
        }}>
          <i class="fa-solid fa-folder-open"></i>
        <p>HISTORY</p>
          <span id='chat_count' className='badge_anima main_pulse'>1</span>
        </a>
        <a href="#" data-active={active == 4 ? true : false} className={`${active == 4 ? "active-nav" : ""}`} onClick={(e) => {
          e.preventDefault()
          setActive(4)
          navigate("/home")
        }}>
          <i class="fa-solid fa-comments"></i>
        <p>LIVECHAT</p>
          <span id='chat_count' className='badge_anima main_pulse'>1</span>
        </a>
        <a href="#" data-menu="menu-settings" data-active={active == 5 ? true : false} className={`${active == 5 ? "active-nav" : ""}`} onClick={(e) => {
          e.preventDefault()
          setActive(5)
          navigate("/settings")
        }}><i class="fa-solid fa-gears"></i>
        <p>SETTING</p></a>
      </div>
    </>
  )
}

export default Footer