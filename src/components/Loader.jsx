import React from 'react'

function Loader({height="300px"}) {
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ height }}>
            <div class="spinner-border position-absolute" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loader