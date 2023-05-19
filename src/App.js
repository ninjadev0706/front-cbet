import "./App.css"
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SignUp2 from "./pages/SignUp2";
import SignUp3 from "./pages/SignUp3";
import Notifications from "./pages/Notifications";
import Transactions from "./pages/TransactionHistory";
import Bets from "./pages/BetHistory";
import Account from "./pages/Account";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Promotions from "./pages/Promotions";
import Settings from "./components/Settings";
import DepositNew from "./components/DepositNew";
import HistoryTabs from "./components/HistoryTabs";
import { ToastContainer } from "react-toastify";
export const UserContext = React.createContext();
export const AppContext = React.createContext();

function App() {
  const location = useLocation()
  const [mode, setMode] = useState(localStorage.getItem("PayApp-Theme"))
  const [active, setActive] = useState(1)
  const [appData, setAppData] = useState({
    signupStep: 0,
    refreshToken: false,
    accessToken: false,
    promotions: [],
    categories: [],
    categoriesDetails: [],
    categoryLoading: false,
    wallet: {
      balance: "0.00",
      currency: "",
      id: "",
      user: "",
      username: "Username"
    }
  })

  useEffect(() => {
    window.addEventListener('storage', () => {
      setMode(localStorage.getItem("PayApp-Theme"))
    })
    window.addEventListener("resize", card_extender);
    const signupId = localStorage.getItem("signupId")
    const signupStep = localStorage.getItem("signupStep")
    const refreshToken = localStorage.getItem("refreshToken")
    const accessToken = localStorage.getItem("accessToken")
    // setAppData({
    //   ...appData,
    //   accessToken,
    //   refreshToken,
    //   signupId,
    //   signupStep: signupStep ? signupStep : 0,
    // })
  }, [])

  function card_extender() {
    const cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].getAttribute('data-card-height') === "cover") {
        if (window.matchMedia('(display-mode: fullscreen)').matches) { var windowHeight = window.outerHeight; }
        if (!window.matchMedia('(display-mode: fullscreen)').matches) { var windowHeight = window.innerHeight; }
        var coverHeight = windowHeight + 'px';
      }
      if (cards[i].getAttribute('data-card-height') === "cover-card") {
        var windowHeight = window.innerHeight;
        var coverHeight = windowHeight - 200 + 'px';
        cards[i].style.height = coverHeight
      }
      if (cards[i].getAttribute('data-card-height') === "cover-full") {
        if (window.matchMedia('(display-mode: fullscreen)').matches) { var windowHeight = window.outerHeight; }
        if (!window.matchMedia('(display-mode: fullscreen)').matches) { var windowHeight = window.innerHeight; }
        var coverHeight = windowHeight + 'px';
        cards[i].style.height = coverHeight
      }
      if (cards[i].hasAttribute('data-card-height')) {
        var getHeight = cards[i].getAttribute('data-card-height');
        cards[i].style.height = getHeight + 'px';
        if (getHeight === "cover") {
          var totalHeight = getHeight
          cards[i].style.height = coverHeight
        }
      }
    }
  }

  useEffect(() => {
    card_extender()
  }, [location])


  return (
    <UserContext.Provider value={{ mode, active, setActive }}>
      <AppContext.Provider value={[appData, setAppData]}>
        <ToastContainer />
        <Routes>
          <Route path="/" exact element={
              <SignIn />
          } />
          <Route exact path="/signup" element={
              <SignUp />
          } />
          <Route exact path="/signup2" element={
              <SignUp2 />
          } />
          <Route exact path="/signup3" element={
              <SignUp3 />
          } />
          <Route exact path="/home" element={
              <Home />
          } />
          <Route exact path="/notifications" element={
              <Notifications />
          } />
          <Route exact path="/history" element={
              <HistoryTabs />
          } />
          <Route exact path="/account" element={
              <Account />
          } />
          <Route exact path="/payment-gateway" element={
              <Deposit type={"/payment-gateway"} />
          } />
          <Route exact path="/online-transfer" element={
              <Deposit type={"/online-transfer"} />
          } />
          <Route exact path="/reload-card" element={
              <Deposit type={"/reload-card"} />
          } />
          <Route exact path="/withdraw" element={
              <Withdraw />
          } />
          <Route exact path="/promotions" element={
              <Promotions />
          } />
          <Route exact path="/settings" element={
              <Settings />
          } />
          <Route exact path="/deposit" element={
              <DepositNew />
          } />
        </Routes>
      </AppContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
