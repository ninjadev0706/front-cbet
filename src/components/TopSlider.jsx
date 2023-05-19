import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'

function TopSlider() {
    const [state] = useContext(AppContext)
    useEffect(() => {
        if (window.refreshSlider) {
            window.refreshSlider()
        }
    }, [state.promotions.length])
    return (
        <div class="splide single-slider slider-no-dots slider-no-arrows slider-visible" id="single-slider-1">
            <div class="splide__track">
                <div class="splide__list">
                    <div class="splide__slide" style={{ width: "100vw" }}>
                        <div class="card card-style m-0 bg-5 shadow-card shadow-card-m" style={{ height: "129px" }}>
                            <div class="opacity-50"></div>
                        </div>
                    </div>
                    <div class="splide__slide" style={{ width: "100vw" }}>
                        <div class="card card-style m-0 bg-9 shadow-card shadow-card-m" style={{ height: "129px" }}>
                            <div class="opacity-50"></div>
                        </div>
                    </div>
                    <div class="splide__slide" style={{ width: "100vw" }}>
                        <div class="card card-style m-0 bg-7 shadow-card shadow-card-m" style={{ height: "129px" }}>
                            <div class="opacity-50"></div>
                        </div>
                    </div>
                    <div class="splide__slide" style={{ width: "100vw" }}>
                        <div class="card card-style m-0 bg-5 shadow-card shadow-card-m" style={{ height: "129px" }}>
                            <div class="opacity-50"></div>
                        </div>
                    </div>
                    <div class="splide__slide" style={{ width: "100vw" }}>
                        <div class="card card-style m-0 bg-9 shadow-card shadow-card-m" style={{ height: "129px" }}>
                            <div class="opacity-50"></div>
                        </div>
                    </div>
                    <div class="splide__slide" style={{ width: "100vw" }}>
                        <div class="card card-style m-0 bg-7 shadow-card shadow-card-m" style={{ height: "129px" }}>
                            <div class="opacity-50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSlider