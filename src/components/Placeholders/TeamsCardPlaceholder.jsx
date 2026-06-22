import React from 'react'

const TeamsCardPlaceholder = () => {
    return (
        <div class="card" aria-hidden="true">
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-10"></span>
                </h5>
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-5"></span>
                </p>
            </div>
        </div>
    )
}

export default TeamsCardPlaceholder