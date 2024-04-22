import React from 'react'
import "../styles/projects.css"

const ProjectSection = () => {
   
  return (
    <div className='sect'>
        <div className="container mt-5">
            <h2 className="text-center text-success font-weight-bold  mb-5">Projects</h2>
            <div className='col mt-5'>
                <div className="car">
                    <div><a href="https://mbachaiwalah.vercel.app/"><img src={require("../asswsts/pic1.png")} alt="pic1" /></a></div>
                    <div className='content'>
                        <h4>MBA ChaiWalah</h4>
                        <p>An immersive tea marketplace crafted with React and CSS, offering a seamless blend of tradition and modernity in UI design.</p>
                    </div>
                </div>
                <div className="car">
                    <div className='content'>
                        <h4>Videos HUB</h4>
                        <p>Explore and upload videos effortlessly,Designed with React and Material UI, featuring a sleek UI design for seamless navigation and engagement.</p>
                    </div>
                    <div><a href="https://react-video-app-eight-khaki.vercel.app/"><img src={require("../asswsts/pic2.png")} alt="pic2" /></a></div>
                </div>
                <div className="car">
                    <div><a href="/"><img src={require("../asswsts/pic3.jpeg")} alt="pic3" /></a></div>
                    <div className='content'>
                        <h4>Protfolio</h4>
                        <p>Seamlessly blending Bootstrap with React and CSS, my portfolio showcases a stunning collection of projects, reflecting my dedication to elegant design and robust functionality in web development.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ProjectSection;
