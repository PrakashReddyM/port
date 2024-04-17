import React from "react";
import SkillCard from "./SkillCard";
import "../styles/skills.css";

const SkillSection = () => {
  return (
    <div className=" w-100 ">
      <div className="container text-center py-5">
        <h1 className="font-weight-bold ">
          <span className="text-success">Technology</span> Stack
        </h1>
        <div className=" pb-4 ">
          I design, develop and deliver with these weapons
        </div>
      </div>
      <div className="container mt-3">
            
            <div className="row">
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm" style={{ backgroundColor: "#4CAF50", color: "#000000" }}>
                        <div className="card-body text-center">
                            <i className="fab fa-html5 skill-icon"></i>
                            <h4 className="skill-title mt-4">HTML</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm" style={{ backgroundColor: "#000000", color: "#ffffff" }}>
                        <div className="card-body text-center">
                            <i className="fab fa-css3-alt skill-icon"></i>
                            <h4 className="skill-title text-success  mt-4">CSS</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm" style={{ backgroundColor: "#000000", color: "#ffffff" }}>
                        <div className="card-body text-center">
                            <i className="fab fa-bootstrap skill-icon"></i>
                            <h4 className="skill-title text-success  mt-4">Bootstrap</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm" style={{ backgroundColor: "#000000", color: "#ffffff" }}>
                        <div className="card-body text-center">
                            <i className="fas fa-database skill-icon"></i>
                            <h4 className="skill-title text-success  mt-4">MongoDB</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm" style={{ backgroundColor: "#000000", color: "#ffffff" }}>
                        <div className="card-body text-center">
                            <i className="fab fa-node-js skill-icon"></i>
                            <h4 className="skill-title text-success  mt-4">Express.js</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm" style={{ backgroundColor: "#000000", color: "#ffffff" }}>
                        <div className="card-body text-center">
                            <i className="fab fa-node-js skill-icon"></i>
                            <h4 className="skill-title text-success  mt-4">Node.js</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm" style={{ backgroundColor: "#4CAF50", color: "#000000" }}>
                        <div className="card-body text-center">
                            <i className="fab fa-react skill-icon"></i>
                            <h4 className="skill-title  mt-4">React.js</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm" style={{ backgroundColor: "#000000", color: "#ffffff" }}>
                        <div className="card-body text-center">
                            <i className="fab fa-js-square skill-icon"></i>
                            <h4 className="skill-title text-success  mt-4">JavaScript</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
      
    
  );
};

export default SkillSection;
