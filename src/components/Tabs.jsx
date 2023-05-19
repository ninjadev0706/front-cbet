import React, { useContext, useState } from 'react'
import { getCategoryDetail, productStart } from '../services'
import { AppContext } from '../App'
import Loader from './Loader'
import { toast } from 'react-toastify'

function Tabs() {
    const [state, setState] = useContext(AppContext)
    const [active, setActive] = useState(0)
    return (
        <div class="content t3" id="tab-group-1" style={{ margin: "20px 15px 20px 15px" }}>
            <div class="tab-controls tabs-medium tabs-rounded" data-highlight="bg-highlight">
                {[{ name: "Tab 1" }, { name: "Tab 2" }, { name: "Tab 3" }, { name: "Tab 4" }].map((category, index) => (
                    <a
                        href="#"
                        data-active={active == index ? true : false}
                        className={`${active == index ? "bg-highlight" : ""}`}
                        data-bs-toggle="collapse"
                        data-bs-target={`#tab-${index}`}
                        onClick={() => {
                            setActive(index)
                            // if (!state.categoryLoading) {
                            //     setState({
                            //         ...state,
                            //         categoryLoading: true
                            //     })
                            //     getCategoryDetail({ category: category.name }).then(res => {
                            //         if (res.data && Array.isArray(res.data)) {
                            //             setState({
                            //                 ...state,
                            //                 categoriesDetails: res.data,
                            //                 categoryLoading: false
                            //             })
                            //         } else {
                            //             setState({
                            //                 ...state,
                            //                 categoryLoading: false
                            //             })
                            //             console.log("get cateogry detail reponse", res.data)
                            //             toast.error("Something went wrong")
                            //         }
                            //     }).catch(err => {
                            //         console.log(err)
                            //         setState({
                            //             ...state,
                            //             categoryLoading: false
                            //         })
                            //         toast.error("Something went wrong")
                            //     })
                            // }
                        }}
                    >
                        {category.name}
                    </a>
                ))}
            </div>
            <div class="clearfix mb-3"></div>
            {[{ name: "Tab 1" }, { name: "Tab 2" }, { name: "Tab 3" }, { name: "Tab 4" }, { name: "Tab 5" }, { name: "Tab 6" },].map((category, index) => (<div data-bs-parent={`#tab-group-${index}`} class={`collapse ${(active == index) ? "show" : ""}`} id={`tab-${index}`}>
                <div class="row me-0 ms-0 mb-0 position-relative">
                    {Array.from({ length: Math.random() * 15 }).map((p, i) => (
                        <div class="col-6 ps-0 pe-0" >
                            <div class="card card-style m-1">
                                <img src={require("../images/fishing-card.jpg")} class="img-fluid" />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div class="custom_play_btn">
                                    <p className='mb-0'>Fishing</p>
                                    <div><img src={require("../images/heart.png")} alt="" width="17px" height="17px"/></div>
                                </div>
                                {/* <span className='text-center mx-1'>Description</span> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>))}
        </div>
    )
}

export default Tabs