import React, { useContext, useEffect } from 'react'
import BalanceWrapper from '../components/BalanceWrapper'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MenuNotification from '../components/MenuNotification'
import Tabs from '../components/Tabs'
import TopSlider from '../components/TopSlider'
import { getCategoryDetail, getNotificationCount, getPromotions, getWallet, productCategories } from '../services'
import { AppContext } from '../App'
import { toast } from 'react-toastify'
import MenuSidebar from '../components/MenuSidebar'

function Home() {
    const [state, setState] = useContext(AppContext)
    useEffect(() => {
        setState({
            ...state,
            categoryLoading: true
        })
        if (window.refreshSlider) {
            window.refreshSlider()
        }
        // Promise.all([getPromotions(), getWallet(), getNotificationCount(), productCategories(),]).then(([res1, res2, res3, res4]) => {
        //     let currentState = state
        //     if (res1.data && Array.isArray(res1.data)) {
        //         currentState.promotions = res1.data
        //     }
        //     if (res2.data && res2.data.id) {
        //         currentState.wallet = res2.data
        //     }
        //     if (res3.data && res3.data.count) {
        //         currentState.notificationCount = res3.data.count
        //     }
        //     setState(currentState)
        //     if (res4.data && Array.isArray(res4.data) && res4.data.length) {
        //         getCategoryDetail({ category: res4.data[0].name }).then(detailRes => {
        //             if (detailRes.data && Array.isArray(detailRes.data)) {
        //                 setState(state=>({
        //                     ...state,
        //                     categoriesDetails: detailRes.data,
        //                     categories: res4.data,
        //                     categoryLoading: false
        //                 }))
        //             } else {
        //                 setState(state=>({
        //                     ...state,
        //                     categoryLoading: false,
        //                     categories: res4.data,
        //                 }))
        //                 console.log("get cateogry detail reponse", detailRes.data)
        //                 toast.error("Something went wrong")
        //             }
        //         }).catch(err => {
        //             console.log(err)
        //             setState(state=>({
        //                 ...state,
        //                 categoryLoading: false,
        //                 categories: res4.data,
        //             }))
        //             toast.error("Something went wrong")
        //         })
        //     } else {
        //         console.log("reponse categories", res4.data)
        //     }
        // }).catch(err => {
        //     console.log(err)
        // })
    }, [])
    return (
        <div className='t1'>
            <div className='page'>
                <div class="page-content footer-clear">
                    <Header />
                    <TopSlider />
                    <BalanceWrapper />
                    <Tabs />
                </div>
                <Footer />
                <MenuSidebar />
                <MenuNotification />
            </div>
        </div>
    )
}

export default Home