import React, { useState } from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";
import { Link } from "react-router-dom";
import Select from 'react-select';

const ReleaseHistory = () => {
  const options = [
    { value: "", label: "---", color: "#fffff" }
    ];

  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "grey",
      backgroundColor: state.data.color,
      fontSize: "small",
    }),
  
   
  };

 
  
  const data = [
   
    {
      date:"02/01/2023",
      amount:"27.00"
      
    },
    {
      date:"27/04/2023",
      amount:"12.00"
      
    }
    
  ];

  return (
    <>
     <Header setvalue={false} />
      <div className="homeContainer">
        <NavBar />
        <div className="bodyContainer">
          <div className="bodyHead">
            <div className="headTop">
              <h3>Release History</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/   Release History </p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
             
            
             
           
          </div>

          <div className="CardContainer" style={{gap:"20px"}}>
          <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                   Project Name
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                      <div style={{width:"80%",marginLeft:"20px"}}>
                      <p>Ring Road</p>
                      </div>
                   
                        </td>
                  </tr>
                </table>

                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                   Project ID
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                      <div style={{width:"80%",marginLeft:"20px"}}>
                      <p>K_MI_088_2022_W_1993</p>
                      </div>
                   
                        </td>
                  </tr>
                </table>

               
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
          <div style={{display:"flex",justifyContent:"space-evenly",width:"100%",justifyContent:"center"}}>
          <table className="dataTable" style={{width:"fit-content"}}>
              <thead>
                <td>
                  Sr. No.
                </td>
                <td>
              Release Date
                </td>
                <td>
                Release Amount (Lakhs)
                </td>
                
                

                
              </thead>
              <tbody>
                {data.map((item,index)=>(
                    <tr>
                      <td style={{width:"50px"}}>
                    {index+1}

               </td>
               
               <td>
               {item.date}
               </td>
               <td>
               {item.amount}
               </td>
              
            
               
                    </tr>
                ))}
              
                
                
  
            
              </tbody>
            </table>
          </div>
         
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

export default ReleaseHistory;
