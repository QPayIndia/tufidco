import React, { useState } from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const ULBKkyc = () => {

  const textBox = [
  
    {
      name:"Zone",
      value:""
    },
    {
      name:"CUG Number",
      value:""
    },
    {
      name:"Municipal Engineer Contact Number",
      value:""
    },
   
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
              <h3>ULB KYC</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/   ULB KYC</p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
             
            
             
           
          </div>

          <div className="CardContainer" style={{gap:"20px"}}>
             <table>
                  <tr>
                    <td style={{width:"32%"}}>
                    <p >
                 ULB Name
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                    <p >
                Ambasamudram
                    </p>
                        </td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td style={{width:"32%"}}>
                    <p >
                 District
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                    <p >
                Tirunelveli
                    </p>
                        </td>
                  </tr>
                </table>
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
                Address
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                  
                    <input style={{height:"80px",marginLeft:"20px",width:"80%"}} type="text"></input>

                  
                        </td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                Pincode
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                  
                    <input style={{height:"30px",marginLeft:"20px",width:"80%"}} type="text"></input>

                  
                        </td>
                  </tr>
                </table>


           
             
           
            
            <div style={{display:"flex",justifyContent:"space-between"}}>
             
              
              <div style={{display:"flex",flexDirection:"row",marginTop:"30px"}}>
              <p className="greenBtn">Update</p>
              </div>
              <div></div>
            </div>
          </div>

        
         
      
        </div>
      </div>
    </>
  );
};

export default ULBKkyc;
