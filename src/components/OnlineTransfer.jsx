import React from 'react'

function DepositTabs() {
    return (
        <div class="content m-0">
            <div class="tabs tabs-pill" id="tab-group-2">
                <div class="mt-3"></div>
                <div class="collapse show" id="tab-5" data-bs-parent="#tab-group-2">
                    <div class="form-custom form-label form-icon mb-3 bg-transparent">
                        <input type="text" class="form-control rounded-xs mb-3" id="c1a" placeholder="Amount" />
                        <label for="c1a" class="color-theme">Amount</label>
                        <span>(required)</span>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between">
                        <button type="button" class="btn-full btn border-blue-dark color-blue-dark text-center mb-2">TNG</button>
                        <button type="button" class="btn-full btn border-blue-dark color-blue-dark text-center mb-2">DiGi</button>
                        <button type="button" class="btn-full btn border-blue-dark color-blue-dark text-center mb-2">Maxis</button>
                        <button type="button" class="btn-full btn border-blue-dark color-blue-dark text-center mb-2">Umobile</button>
                        <button type="button" class="btn-full btn border-blue-dark color-blue-dark text-center mb-2">Celcom</button>
                    </div>
                    <div class="form-custom form-label form-icon mb-3 bg-transparent">
                        <input type="number" class="form-control rounded-xs mb-3" id="c1a" placeholder="Number" />
                        <label for="c1a" class="color-theme">Number</label>
                        <span>(required)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DepositTabs