import React from "react";
import "../../Styles/styles.css";
import NavBar from "../../comps/navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const FileUpload = () => {
  
  return (
    <>
     <Header setvalue={false} />
      <div className="homeContainer">
        <NavBar />
        <div className="bodyContainer">
          <div className="bodyHead">
            <div className="headTop">
              <h3>Administrative Sanction</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/   Administrative Sanction</p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
              <div className="headBody">
                <p>Add new Administrative Sanction
</p>
              </div>
            
             
           
          </div>

      
         
        <div className="CardContainer">
            <p><b>Guidelines File Upload :</b></p><br></br>
            <br></br>
            <p>1. Project File Format must be use as sample File format (Administrative Sanction File Format)<br></br>
2. Master must be use as sample data format (Masters File)<br></br>
- Agency Code<br></br>
- Sanction Type<br></br>
- Loan ROI<br></br>
- Moratorium<br></br>
3. Non Mandate Fields will be value 'NA'</p><br></br><br></br>

<div style={{display:"flex",flexDirection:"row"}}>
    <p>File Upload<font color="#00000">*</font></p>
    <div className="pagebar" style={{marginLeft:"20px"}}>
               <p  className="pageNo">Choose File</p>
              </div>
</div>

<div className="greenBtn" style={{width:"fit-content"}}>
    <p>Upload</p>
</div>
        </div>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
