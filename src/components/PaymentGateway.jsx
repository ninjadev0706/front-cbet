import React from 'react'

function DepositTabs() {
    return (
        <div class="content m-0">
            <div class="tabs tabs-pill" id="tab-group-2">
                <div class="mt-3"></div>
                <div class="collapse show" id="tab-4" data-bs-parent="#tab-group-2">
                    <div class="form-custom form-label form-icon mb-3 bg-transparent">
                        <input type="text" class="form-control rounded-xs mb-3" id="c1a" placeholder="Amount" />
                        <label for="c1a" class="color-theme">Amount</label>
                        <span>(required)</span>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between">
                        <button type="button" class="btn-full btn border-blue-dark color-blue-dark text-center mb-2">50</button>
                        <button type="button" class="btn-full btn border-blue-dark color-blue-dark text-center mb-2">100</button>
                        <button type="button" class="btn-full btn border-blue-dark color-blue-dark text-center mb-2">200</button>
                        <button type="button" class="btn-full btn border-blue-dark color-blue-dark text-center mb-2">300</button>
                        <button type="button" class="btn-full btn border-blue-dark color-blue-dark text-center mb-2">500</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default DepositTabs