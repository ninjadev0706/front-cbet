import React, { useState } from 'react'
import Transactions from '../pages/TransactionHistory'
import Bets from '../pages/BetHistory'
import Header from './Header'
import Footer from './Footer'
import MenuSidebar from './MenuSidebar'

function HistoryTabs() {
    const [active, setActive] = useState(1)
    return (
        <div className='t1'>
            <div className='page'>
                <div class="page-content footer-clear">
                    <Header />
                    <div class="content t3" id="tab-group-1" style={{ margin: "20px 15px 20px 15px" }}>
                        <div class="tab-controls tabs-medium tabs-rounded" data-highlight="bg-highlight" style={{ padding: "6px" }}>
                            <a href="#" style={{ margin: 0, width: "50%" }} data-active={active == 1 ? true : false} className={`${active == 1 ? "bg-highlight" : ""}`} data-bs-toggle="collapse" data-bs-target="#tab-1" onClick={() => setActive(1)}>Transaction History</a>
                            <a href="#" style={{ margin: 0, width: "50%" }} data-active={active == 2 ? true : false} className={`${active == 2 ? "bg-highlight" : ""}`} data-bs-toggle="collapse" data-bs-target="#tab-2" onClick={() => setActive(2)}>Bet History</a>
                        </div>
                        <div class="clearfix mb-3"></div>
                        <div data-bs-parent="#tab-group-1" class="collapse show" id="tab-1">
                            <Transactions />
                        </div>
                        <div data-bs-parent="#tab-group-1" class="collapse" id="tab-2">
                            <Bets />
                        </div>
                    </div>
                </div>
                <Footer />
                <MenuSidebar />
            </div>
        </div>
    )
}

export default HistoryTabs