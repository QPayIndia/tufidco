import React, { useState } from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";
import { Link } from "react-router-dom";
import Select from 'react-select';

const ProjectMaster = () => {

  const ulbs = [
    { value: "", label: "Ambasamudram", color: "#fffff" },
    { value: "", label: "Chennai", color: "#fffff" },
    { value: "", label: "Pudukottai", color: "#fffff" },
    { value: "", label: "Erode", color: "#fffff" }
    ];

    const sectors = [
      { value: "", label: "Parks", color: "#fffff" },
      { value: "", label: "Water Bodies", color: "#fffff" },
      { value: "", label: "UGSS", color: "#fffff" },
      { value: "", label: "School", color: "#fffff" }
      ];

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
      name:"Ring Road",
      ulb:"Ambasamudram",
      sector: "BT Roads",
      id:"K_MI_088_2022_W_1993"
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
              <h3>Project Master</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/   Project Master </p>
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
                  Name
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                    <input style={{height:"30px",marginLeft:"20px",width:"80%"}} type="text"></input>

                        </td>
                  </tr>
                </table>
        
          <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                   ULB
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                      <div style={{width:"80%",marginLeft:"20px"}}>
                      <Select myFontSize="20px" options={ulbs} styles={styles} />
                      </div>
                   
                        </td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                   Sector
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                      <div style={{width:"80%",marginLeft:"20px"}}>
                      <Select myFontSize="20px" options={sectors} styles={styles} />
                      </div>
                   
                        </td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                  Project Id
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                        <p style={{marginLeft:"20px"}}>
                        K_MI_088_2022_W_1993
                        </p>
                        </td>
                  </tr>
                </table>

                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                  Co Funded by
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                    <input style={{height:"30px",marginLeft:"20px",width:"80%"}} type="text"></input>

                        </td>
                  </tr>
                </table>

                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                 Administration Sanction Ref. No.
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                    <input style={{height:"30px",marginLeft:"20px",width:"80%"}} type="text"></input>

                        </td>
                  </tr>
                </table>

                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                 Sanction Date
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
           
             
           
            
            <div style={{display:"flex",justifyContent:"space-between"}}>
             
              
              <div style={{display:"flex",flexDirection:"row",marginTop:"30px"}}>
              <p className="greenBtn">Save</p>
              <p className="greenBtn" style={{background:"red",marginLeft:"10px"}}>Cancel</p>
              </div>
              <div></div>
            </div>
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
              Name
                </td>
                <td>
                ULB
                </td>
                <td>
                Sector
                </td>
                <td>
               Project Id
                </td>
                

                
              </thead>
              <tbody>
                {data.map((item,index)=>(
                    <tr>
                      <td style={{width:"50px"}}>
                    {index+1}

               </td>
               
               <td>
               {item.name}
               </td>
               <td>
               {item.ulb}
               </td>
               <td>
               {item.sector}
               </td>
               <td>
               {item.id}
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

export default ProjectMaster;
