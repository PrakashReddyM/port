import React from 'react'

const ProjectCard = (props) => {
    const {title,excert,imageUrl}= props
  return (
    <div>
      <div className="col-10 col-md-4 my-2 pl-5 ml-auto">
        <div className="card shadow h-100 w-75">
          <img className="card-img-top" src={imageUrl} alt="free img" />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{excert}</p>
            <a href="/" className="stretched-link"></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
