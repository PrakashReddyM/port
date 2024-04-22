import React from 'react'
import  "../styles/skills.css"

const SkillSection = () => {
  return (
    <div class="main bg w-100 mt-8 my-5" style={{ backgroundColor: "black" }}>
    <div class="container text-center py-4 ">
      <h2 class="font-weight-bold text-white ">
        <span class="text-success">Technology</span> Stack
      </h2>
      <div class="text-white lead pb-4">
        I design, develop and deliver with these weapons
      </div>
    </div>
    <div
      class="d-flex w-80 flex-column align-items-center justify-content-between py-3"
    >
      <div class="d-flex flex-row justify-content-between">
        <div class="d-flex flex-column align-items-center p-4" >
          <img
            class="img rounded-5 "
            
            src={require("../asswsts/html.jpeg")}
            alt="img"
            
          />
          
        </div>
        <div class="d-flex flex-column align-items-center p-4">
          <img
            class="img rounded"
            src={require("../asswsts/css.jpeg")}
            alt="img"
          />
          
        </div>
        <div class="d-flex flex-column align-items-center p-4">
          <img
            class="img rounded"
            src={require("../asswsts/jss.jpeg")}
            alt="img"
          />
          
        </div>
        <div class="d-flex flex-column align-items-center p-4">
          <img
            class="img rounded"
            src={require("../asswsts/boot.jpeg")}
            alt="img"
          />
          
        </div>
      </div>
      <div class="d-flex flex-row mb-5">
        <div class="d-flex flex-column align-items-center p-4">
          <img
            class="img rounded"
            src={require("../asswsts/reactjs.jpeg")}
            alt="img"
          />
          
        </div>
        
        <div class="d-flex flex-column align-items-center p-4">
          <img
            class="img rounded"
            src={require("../asswsts/exp.jpeg")}
            alt="img"
          />
          
        </div>
        <div class="d-flex flex-column align-items-center p-4">
          <img
            class="img rounded"
            src={require("../asswsts/node.jpeg")}
            alt="img"
            style={{width:"100"}}
          />
          
        </div>
        <div class="d-flex flex-column align-items-center p-4">
          <img
            class="img rounded"
            src={require("../asswsts/mango.jpeg")}
            alt="img"
          />
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default SkillSection
