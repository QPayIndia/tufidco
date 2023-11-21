import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const SchemeFinancialPosition = () => {
  
  const data = [
    {
      project : "Scheduled Tribe Department",
      totproj : "149",
      amount : "Rs 14.00 cr",
     
      
      
    },
    {
      project : "Agriculture Department",
      totproj : "9",
      amount : "Rs 14.00 cr",
     
      
      
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
              <h3>Scheme Financial Position</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/  Scheme Financial Position</p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
              
            
             
           
          </div>

          <div className="fullContainer">
                <p>Add New</p>
          </div>
         
         
        <div className="tableContainer" style={{background:"white"}}>
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

         

          <div style={{width:"100%",background:"white",marginTop:"20px",marginBottom:"20px"}}>
          {data.map((item,index)=>(
                  <div style={{marginTop:"20px"}}>
                     <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                  <div style={{display:"flex",flexDirection:"row"}}><p  style={{color:"black",fontSize:"medium",marginLeft:"5px"}}>{item.project}</p>
                  <p style={{color:"white",fontSize:"smaller",marginLeft:"5px",background:"orange",paddingLeft:"5px",paddingRight:"5px",borderRadius:"3px"}}>Total Scheme :{item.totproj}</p>
                  <p style={{color:"white",fontSize:"smaller",marginLeft:"5px",background:"blue",paddingLeft:"5px",paddingRight:"5px",borderRadius:"3px"}}>Balance Amount : {item.amount}</p>
                  </div>
                  <span className="material-symbols-rounded" style={{color:"black"}}>expand_more</span>
                </div>
               
                  </div>
                  
                ))}
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
export default SchemeFinancialPosition;
