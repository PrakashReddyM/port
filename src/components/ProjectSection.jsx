import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectSection = () => {
   
  return (
    <div className="container mt-5">
    <h2 className="text-center mb-5">Projects</h2>
    <div className="row">
        <div className="col-md-4">
            <div className="card mb-2 shadow-sm">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 1" />
                <div className="card-body">
                    <h5 className="card-title">Project 1</h5>
                    <p className="card-text">Description of Project 1 goes here.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card mb-2 shadow-sm">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 2" />
                <div className="card-body">
                    <h5 className="card-title">Project 2</h5>
                    <p className="card-text">Description of Project 2 goes here.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card mb-2 shadow-sm">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 3" />
                <div className="card-body">
                    <h5 className="card-title">Project 3</h5>
                    <p className="card-text">Description of Project 3 goes here.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProjectSection
