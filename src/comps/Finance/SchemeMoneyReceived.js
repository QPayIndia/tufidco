import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const SchemeMoneyReceived = () => {
  
  const data = [
    {
      scheme : "Govt School Rework",
      schemenum : "Deposit",
      dep : "Health Department",
      year : "2023-2024",
      date : "01-Apr-2023",
      mode : "Credit Received",
      amount : "Rs 40.00 lakhs",
      createdby : "By : Admin On : Aug. 1, 2023, 1:31 p.m."
      
    },

    {
      scheme : "Govt School Rework",
      schemenum : "Deposit",
      dep : "Health Department",
      year : "2023-2024",
      date : "01-Apr-2023",
      mode : "Credit Received",
      amount : "Rs 40.00 lakhs",
      createdby : "By : Admin On : Aug. 1, 2023, 1:31 p.m."
      
    },
  
      ];

  return (
    <>
      <Header setvalue={false} />
      <div className="homeContainer">
        <NavBar />
        <div className="bodyContainer">
          <div className="bodyHead">
            <div className="headTop">
              <h3>Scheme Opening Received</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/  Scheme Opening Received</p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
              
            
             
           
          </div>

      
          <div className="fullContainer">
                <p>Add New</p>
          </div>
         
        <div className="tableContainer">
          <div className="tableTop">
            <div>
                <p></p>
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
                  Sr. No.
                </td>
                <td>
               Scheme
                </td>
                <td>
                Scheme Number
                </td>
                <td>
               Department
                </td>
                

                <td>
                Fy
                </td>
               
                <td>
                Date
                </td>
                <td>
                Mode
                </td>
                <td>
                Amount
                </td>
                <td>
                Created By
                </td>
               
              </thead>
              <tbody>
                {data.map((item,index)=>(
                    <tr>
                      <td style={{width:"50px"}}>
                    {index+1}

               </td>
               <td>
                <p > {item.scheme}</p>
              
               </td>
               <td>
               {item.schemenum}
               </td>
               <td>
               {item.dep}
               </td>
               <td>
               {item.year}
               </td>
               <td>
               {item.date}
               </td>
               <td>
               {item.mode}
               </td>
               <td>
               {item.amount}
               </td>
               <td>
               {item.createdby}
               </td>
               
               
                    </tr>
                ))}
              
                
                
  
            
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

export default SchemeMoneyReceived;
