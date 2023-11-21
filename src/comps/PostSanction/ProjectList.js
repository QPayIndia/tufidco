import React from "react";
import "../../Styles/styles.css";
import NavBar from "../../comps/navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const ProjectList = () => {
  
  return (
    <>
      <Header setvalue={false} />
      <div className="homeContainer">
        <NavBar />
        <div className="bodyContainer">
          <div className="bodyHead">
            <div className="headTop">
              <h3>List Of Project</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/  Project Master / Project List</p>
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
                  Project Name
                </td>
                <td>
                 Place Of Project
                </td>
                <td>
                Agency Code
                </td>
                <td>
                 District
                </td>
                <td>
                 Scheme
                </td>
               
                <td>
                 Action
                </td>
              </thead>
              <tbody>
              
                <td style={{textAlign:"start"}}>
                (A) Lakshmi Vinayaga Nagar Extension Cross Street – I <br></br>
<b>Project ID</b> : K_MI_088_2022_W_1993<br></br>
<b>Agency Type</b> : Municipality
                
                </td>
                <td>
                Lakshmi Vinayaga Nagar
                </td>
                <td>
                101
                </td>
                <td>
                Thanjavur
                </td>
                <td>
                KNMT
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

export default ProjectList;
