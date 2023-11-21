import React from "react";
import "./VendorMaster.css";
import NavBar from "./navContainer.js";
import searchIcon from "./../assets/search.svg";
import notificationIcon from "./../assets/notification.svg";
import revenueIcon from "./../assets/revenueIcon.svg";
import transactionsIcon from "./../assets/totalTransIcon.svg";
import totaluserIcon from "./../assets/totalUser.svg";
import likesIcon from "./../assets/likesIcon.svg";
import userPicture from "./../assets/image.png";
import home from "./../assets/home.svg";
import ChartComponent from "./Chart.js";
import PieChart from "./piechart";
import Header from "./header.js";

const VendorMaster = () => {
  
  return (
    <>
    <Header setvalue={false} />
      <div className="homeContainer">
        <NavBar />
        <div className="bodyContainer">
          <div className="bodyHead">
            <div className="headTop">
              <h3>Vendor Master </h3>
             
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
                <p>Add new Vendor, edit data,print data and remove from system</p>
              </div>
            
             
           
          </div>

          <div className="fullContainer">
                <p>Add New Vendor</p>
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
                  Vendor Details
                </td>
                <td>
                 Company Name
                </td>
                <td>
                 Email Id
                </td>
                <td>
                 Phone No
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
               <b> Vendor Name </b>: Suyog<br></br>
<b>Vendor Code </b>: TN_VEN26<br></br>
<b>PFMS Status </b>: PENDING
                </td>
                <td>
                ALIGHT
                </td>
                <td>
                parth@gmail.com
                </td>
                <td>
                5354554656	
                </td>
                <td>
                 <div className="rowAfter">
                  <p className="greenBtn">Active</p>
                  <p className="greenBtn">Approved</p>
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
         </div>
        </div>
      </div>
    </>
  );
};

export default VendorMaster;
