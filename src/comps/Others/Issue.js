import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const Issue = () => {
  
  const data = [
    {
      heading : "Administration Issues",
      desc: "-",
      date : "April 12, 2023  ",
      file : "No File",
      createdby : "Admin | July 19, 2023, 6:17 p.m.",
      
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
                  <h3>Issues</h3>
                 
                  <div className="dashItems">
                  <img
                      style={{ cursor: "pointer" }}
                      src={home}
                      alt="searchIcon"
                    />
                     <p>/  Issues</p>
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
                   Heading
                    </td>
                    <td>
                    Description
                    </td>
                    <td>
                   Date
                    </td>
                    
    
                    <td>
                    File
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
                    <p> {item.heading}</p>
                  
                   </td>
                   <td>
                   {item.desc}
                   </td>
                   <td>
                   {item.date}
                   </td>
                   <td>
                   {item.file}
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
    
export default Issue;
