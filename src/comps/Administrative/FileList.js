import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const FileList = () => {
  
  return (
    <>
      <Header setvalue={false} />
      <div className="homeContainer">
        <NavBar />
        <div className="bodyContainer">
          <div className="bodyHead">
            <div className="headTop">
              <h3>Administrative Sanction File List</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/   Administrative Sanction /  Administrative Sanction File list</p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
              <div className="headBody">
                <p>Edit data, Print data and remove from system
</p>
              </div>
            
             
           
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
                 Category
                </td>
                <td>
                Agency Code
                </td>
                <td>
                Stage Amount
                </td>
                

                <td>
                 Last Payment Date
                </td>
               
                <td>
                 Action
                </td>
              </thead>
              <tbody>
              
                <td style={{textAlign:"start"}}>
                (A) Lakshmi Vinayaga Nagar Extension Cross Street – I <br></br>
<b>Agency Code</b> : K_MI_088_2022_W_1993<br></br>
<b>Sanction Type</b> : Loan
                
                </td>
                <td>
                Renumerative
                </td>
                <td>
                18.55
                </td>
                <td>
                101
                </td>
                <td>
                05/07/2023
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

export default FileList;
