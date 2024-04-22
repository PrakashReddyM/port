import React from 'react'
import "../styles/title.css"

const Title = () => {
    const Name = "Prakash Reddy";
    const LeadText = "Mern Stack Developer Ready To Develop"
  return (
    <div className="set container my-5 py-5" >
      <div className="row align-items-center text-center">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid w-50 rounded-5"
            src="https://media.licdn.com/dms/image/D5603AQFceqZBblK-ig/profile-displayphoto-shrink_800_800/0/1712831157564?e=1718841600&v=beta&t=uB4bXKUc0Lxzm4qLJWQiHIm7k1av9JoeYJm6q3ANG0s"
            alt="Prakash Reddy"
          />
        </div>
        <div className="col-12 col-md-6 pt-4">
          <h1 className='font-weight-bold'>Hey, I am <span className="text-success">{Name}</span></h1>
          <h5>{LeadText}</h5>
        </div>
      </div>
    </div>
  )
}

export default Title
