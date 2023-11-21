import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const Attendance = () => {
  
  const data = [
    {
      Name : "Abhishek Thakur (Divisional Project Engineer (DPE))",
      Time : "April 15, 2023",
      Place : "Govt. Excellence H.S School, Bagli",
      image : "-",
      status : "Present",
      
    },
    {
      Name : "Education Department",
      Time : "April 12, 2023",
      Place : "Govt. Excellence H.S School, Bagli",
      image : "-",
      status : "Present",
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
                  <h3>Attendance</h3>
                 
                  <div className="dashItems">
                  <img
                      style={{ cursor: "pointer" }}
                      src={home}
                      alt="searchIcon"
                    />
                     <p>/  Attendance</p>
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
                   Name
                    </td>
                    <td>
                    Time
                    </td>
                    <td>
                   Place
                    </td>
                    
    
                    <td>
                    Image
                    </td>
                   
                    <td>
                    Status
                    </td>
                   
                  </thead>
                  <tbody>
                    {data.map((item,index)=>(
                        <tr>
                        <td style={{width:"50px"}}>
                        {index+1}
    
                   </td> 
                   <td>
                    <p> {item.Name}</p>
                  
                   </td>
                   <td>
                   {item.Time}
                   </td>
                   <td>
                   {item.Place}
                   </td>
                   <td>
                   {item.image}
                   </td>
                   <td>
                   {item.status}
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

export default Attendance;
