import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const ProjectSanction = () => {
  
  return (
    <>
     <Header setvalue={false} />
      <div className="homeContainer">
        <NavBar />
        <div className="bodyContainer">
          <div className="bodyHead">
            <div className="headTop">
              <h3>Project Create</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/   Project Create </p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
              <div className="headBody">
                <p>Add Project
</p>
              </div>
            
             
           
          </div>

          <div className="CardContainer">
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <p><b>Approved Project Cost (in lakhs)</b> :
₹ 12345.99 lacs</p>
<p style={{width:"50%",textAlign:"start"}}><b>Approved Project Cost (in lakhs)</b> :
₹ 12345.99 lacs</p>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
              <p><b>ULB Share (in lakhs)</b> :
₹ 12345.99 lacs</p>
<p style={{width:"50%",textAlign:"start"}}><b>AMRUT 2.0 Share (in lakhs)</b> :
₹ 12345.99 lacs</p>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
              <p ><b>SUIDF Share (in lakhs)</b> :
₹ 12345.99 lacs</p>
<p style={{width:"50%",textAlign:"start"}}><b>Other Share (in lakhs)</b> :
₹ 12345.99 lacs</p>
            </div>

            <div className="textBoxContainer" style={{marginTop:"40px"}}>
              <p>
                Select Financial Year
              </p>
              <div className="textBox">
                <input style={{height:"30px",marginLeft:"20px"}} type="text"></input>
              </div>
            </div>
            <div className="textBoxContainer">
              <p>
                Scheme
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
                Project Name
              </p>
              <div className="textBox">
                <input style={{height:"30px",marginLeft:"20px"}} type="text"></input>
              </div>
            </div>
            <div className="textBoxContainer">
              <p>
              Technical Sanction Reference No.
              </p>
              <div className="textBox">
                <input style={{height:"30px",marginLeft:"20px"}} type="text"></input>
              </div>
            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div></div>
              <p className="Btn">Add Work</p>

            </div>
          </div>
         
      
        </div>
      </div>
    </>
  );
};

export default ProjectSanction;
