import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const FinancialProgress = () => {
  
  return (
    <>
      <Header setvalue={false} />
      <div className="homeContainer">
        <NavBar />
        <div className="bodyContainer">
          <div className="bodyHead">
            <div className="headTop">
              <h3>Financial Progress List</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/   Financial Progress List </p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
            
            
             
           
          </div>
          <div className="fullContainer">
                <p>Add New</p>
          </div>

          <div className="CardContainer">


  

            <div className="textBoxContainer" style={{marginTop:"40px"}}>
              <p>
                Select Scheme
              </p>
              <div className="textBox">
                <input style={{height:"30px",marginLeft:"20px"}} type="text"></input>
              </div>
            </div>
            <div className="textBoxContainer">
              <p>
                Financial Year
              </p>
              <div className="textBox">
                <input style={{height:"30px",marginLeft:"20px"}} type="text"></input>
              </div>
            </div>
            
            <div className="textBoxContainer">
              <p>
              Sector
              </p>
              <div className="textBox">
                <input style={{height:"30px",marginLeft:"20px"}} type="text"></input>
              </div>
            </div>
            <div className="textBoxContainer">
              <p>
              Project Id
              </p>
              <div className="textBox">
                <input style={{height:"30px",marginLeft:"20px"}} type="text"></input>
              </div>
            </div>
            <div className="textBoxContainer">
              <p>
              Project
              </p>
              <div className="textBox">
                <input style={{height:"30px",marginLeft:"20px"}} type="text"></input>
              </div>
            </div>
            <div className="textBoxContainer">
              <p>
              Request Amount
              </p>
              <div className="textBox">
                <input style={{height:"30px",marginLeft:"20px"}} type="text"></input>
              </div>
            </div>

            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div></div>
              <p className="Btn">Save Project</p>

            </div>

          </div>
      
         
       
        </div>
      </div>
    </>
  );
};

export default FinancialProgress;
