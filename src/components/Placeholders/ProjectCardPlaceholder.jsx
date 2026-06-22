import React from 'react'

const ProjectCardPlaceholder = () => {
    return (
        <div className="card" aria-hidden="true" style={{ backgroundColor: "#F8FAFC" }}>
            <div className="card-body">
                <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-5"></span>
                </h5>
                <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                </p>
            </div>
        </div>
    )
}

export default ProjectCardPlaceholder