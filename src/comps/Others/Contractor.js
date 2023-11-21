import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const Contractor = () => {
  
 
  const data = [
    {
      concessname : "A B C ASSOCIATE 	",
      proprname : "",
      gst : "None",
      logininfo : "Login ID: PWD",
      address : "Chennai",
      district : "Chennai",
      bankInfo : "NA",
     
      
    },

    {
      concessname : "A. H. Construction Pro. Salman Khan",
      proprname : "",
      gst : "None",
      logininfo : "Login ID: PWD",
      address : "Chennai",
      district : "Chennai",
      bankInfo : "NA",
      
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
              <h3>Contractor</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/  Contractor</p>
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
                Concessionaire Name
                </td>
                <td>
                Proprietor Name
                </td>
                <td>
              GST / PAN Number
                </td>
                

                <td>
                Login Info
                </td>
               
                <td>
                Address
                </td>
                <td>
                District
                </td>
                <td>
                Bank Info
                </td>
               
               
              </thead>
              <tbody>
                {data.map((item,index)=>(
                    <tr>
                      <td style={{width:"50px"}}>
                    {index+1}

               </td>
               <td>
                <p style={{color:"blue",textAlign:"start",cursor:"pointer"}} > {item.concessname}</p>
              
               </td>
               <td>
               {item.proprname}
               </td>
               <td>
               {item.gst}
               </td>
               <td>
               {item.logininfo}
               </td>
               <td>
               {item.address}
               </td>
               <td>
               {item.district}
               </td>
               <td>
               {item.bankInfo}
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

export default Contractor;
