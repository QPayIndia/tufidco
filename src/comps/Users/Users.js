import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import home from "../../assets/home.svg";
import Header from "../header.js";

const Users = () => {
  
  return (
    <>
    <Header setvalue={false} />
      <div className="homeContainer">
        <NavBar />
        <div className="bodyContainer">
          <div className="bodyHead">
            <div className="headTop">
              <h3>Users</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/ Vendor Master</p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
              <div className="headBody">
                <p>Add new User, edit data,print data and remove from system</p>
              </div>
            
             
           
          </div>

          <div className="fullContainer">
                <p> New User</p>
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
                  Name
                </td>
                <td>
                 Login Id
                </td>
                <td>
                 Role
                </td>
                <td>
                 Mobile
                </td>
                <td>
                 Last Login
                </td>
                <td>
                 Status
                </td>
                <td>
                 Action
                </td>
              </thead>
              <tbody>
              
                <td className="vendorName">
                Abhishek Thakur
                </td>
                <td>
                dpe.narsinghpur
                </td>
                <td>
                Divisional Project Engineer (DPE)
                </td>
                <td>
                9827671646
                </td>
                <td>
                June 26, 2023, 12:32 p.m.
                </td>
                <td>
                 <div className="rowAfter">
                  <p className="greenBtn">Active</p>
                  
                 </div>
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

export default Users;
