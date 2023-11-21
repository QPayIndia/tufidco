import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const PreSanctionList = () => {
  
  return (
    <>
      <Header setvalue={false} />
      <div className="homeContainer">
        <NavBar />
        <div className="bodyContainer">
          <div className="bodyHead">
            <div className="headTop">
              <h3>Pre Sanction List</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/ Pre Sanction List</p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
              <div className="headBody">
                <p>Project, Edit data, view data and remove from system</p>
              </div>
            
             
           
          </div>

          <div className="fullContainer">
                <p>Add New</p>
          </div>
         
         <div className="tableContainer">
          <div className="tableTop">
            <div>
                <p>Results</p>
            </div>
            <div className="searchContainer">
              <p>Search</p>
              <input className="searchBox">
              </input>
            </div>
          </div>
            <table className="dataTable">
              <thead>
                <td>
                  Inward Date
                </td>
                <td>
                 Inward Number
                </td>
                <td>
                Head of Department
                </td>
                <td>
                 ULB Name
                </td>
                <td>
                 Document Date
                </td>
               
                <td>
                 Action
                </td>
              </thead>
              <tbody>
              
                <td >
                11/08/2023
                </td>
                <td>
                5484415
                </td>
                <td>
                Chennai Metropolitan Water Supply And Sewerage Board	
                </td>
                <td>
               Tiruppur
                </td>
                <td>
                5/07/2023
                </td>
                
                <td>
                <div className="rowAfter">
                  <p className="greenBtn">View</p>
                  <p className="orangeBtn">Edit</p>
                  <p className="blackBtn">Delete</p>
                 </div>
                </td>
            
              </tbody>
            </table>
            <div style={{display:"flex",justifyContent:"space-between",flexDirection:"row",marginTop:"10px",width:"100%"}}>
              <p style={{fontSize:"smaller"}}>Showing 1 to 2 of 2 Entires</p>
              <div className="pagebar">
                <p className="pageNo">Previous</p>
                <p className="pageNoActive">1</p>
                <p className="pageNo">Next</p>
              </div>
            </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default PreSanctionList;
