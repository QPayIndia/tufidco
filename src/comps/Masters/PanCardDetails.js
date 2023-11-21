import React, { useState } from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const PanCardDetails = () => {

  const textBox = [
  
    {
      name:"PA Number",
      value:""
    },
    {
      name:"First Name",
      value:""
    },
    {
      name:"Middle Name",
      value:""
    },
    {
      name:"Sur Name",
      value:""
    }
  
  ]
  
  const data = [
   
    {
      name:"Scheme",
      scheme:"Scheme A",
      bank: "SBI"
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
              <h3>Pan Card Details</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/   Pan Card Details</p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
             
            
             
           
          </div>

          <div className="CardContainer" style={{gap:"20px"}}>
            {textBox.map((item,index)=>(
                  <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                  {item.name}
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                    <input style={{height:"30px",marginLeft:"20px",width:"80%"}} type="text"></input>

                        </td>
                  </tr>
                </table>
            ))}
              <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                  DOB
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                      <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
                      <input style={{height:"30px",marginLeft:"20px",width:"40%"}} type="text"></input>

                      <span className="material-symbols-rounded" style={{color:"black",cursor:"pointer"}}>calendar_month</span>

                      </div>

                        </td>
                  </tr>
                </table>

<div style={{display:"flex",flexDirection:"row",marginTop:"10px",verticalAlign:"center"}}>
           <div style={{display:"flex",justifyContent:"space-evenly",flexDirection:"column"}}> 
           <p >Upload Scan Copy</p>
           </div>
              <div className="Btn" style={{marginLeft:"20px"}}>
                Select File
              </div>

            </div>
           
             
           
            
            <div style={{display:"flex",justifyContent:"space-between"}}>
             
              
              <div style={{display:"flex",flexDirection:"row",marginTop:"30px"}}>
              <p className="greenBtn">Save</p>
              <p className="greenBtn" style={{background:"red",marginLeft:"10px"}}>Cancel</p>
              </div>
              <div></div>
            </div>
          </div>

      
         
      
        </div>
      </div>
    </>
  );
};

export default PanCardDetails;
