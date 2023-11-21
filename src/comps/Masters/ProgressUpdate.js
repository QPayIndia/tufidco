import React, { useState } from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";
import { Link } from "react-router-dom";
import Select from 'react-select';

const ProgressUpdate = () => {
  const options = [
    { value: "", label: "Not Commenced", color: "#fffff" },
    { value: "", label: "Commenced", color: "#fffff" },
    { value: "", label: "Completed", color: "#fffff" }

    ];

  const styles = {
    option: (provided, state) => ({
      ...provided,
      color: "grey",
      backgroundColor: state.data.color,
      fontSize: "medium",
    }),
  
   
  };

 
  const data = [
   
    {
      date:"02/02/2023",
      expamount:"2.27",
      vow: "1.75"
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
              <h3>Progress Update</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/   Progress Update </p>
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
                   Project Id
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                    <div style={{width:"80%",marginLeft:"20px"}}>
                      <p>K_MI_088_2022_W_1993</p>
                      </div>
                   
                        </td>
                  </tr>
                </table>

                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                  Received Amount
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                    <div style={{width:"80%",marginLeft:"20px"}}>
                      <p>Rs 45.00 (in Lakh)</p>
                      </div>
                   
                        </td>
                  </tr>
                </table>

                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                  Value of Work Done
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                    <div style={{width:"100%"}}>
                    <input style={{height:"30px",marginLeft:"20px",width:"80%"}} type="text"></input>
                      </div>
                   
                        </td>
                  </tr>
                </table>

                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                  Expenditure Amount
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                    <div style={{width:"100%",gap:"20px",display:"flex",flexDirection:"row"}}>
                    <input style={{height:"30px",marginLeft:"20px",width:"40%"}} type="text"></input>
                    <p>(Lakh)</p>
                      </div>
                   
                        </td>
                  </tr>
                </table>

               

               
                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                 Status
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                    <div style={{width:"80%",marginLeft:"20px"}}>
                    <Select myFontSize="20px" options={options} styles={styles} />
                      </div>
                   
                        </td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >Expenditure Breakup</p>
                    </td>
                    <td style={{width:"100%"}}>
                              <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
                    <div className="Btn" style={{marginLeft:"20px"}}>
                          Select File
                        </div>
                        <div style={{justifyContent:"space-evenly",display:"flex",flexDirection:"column"}}>
                        <p className="text">(Max. 2 MB is allowed)</p>
                        </div>
                        </div>
                        </td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                  Site Photo Before Commensement
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                              <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
                    <div className="Btn" style={{marginLeft:"20px"}}>
                          Select File
                        </div>
                        <div style={{justifyContent:"space-evenly",display:"flex",flexDirection:"column"}}>
                        <p className="text">(Max. 2 MB is allowed)</p>
                        </div>
                        </div>
                        </td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                  Present Stage Photo
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                              <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
                    <div className="Btn" style={{marginLeft:"20px"}}>
                          Select File
                        </div>
                        <div style={{justifyContent:"space-evenly",display:"flex",flexDirection:"column"}}>
                        <p className="text">(Max. 2 MB is allowed)</p>
                        </div>
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
                Date of Update
                </td>
                <td>
                Expenditure Amount (Lakh)
                </td>
                <td>
               Value of Work Done (Lakh)
                </td>
                <td>
               Action
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
               {item.expamount}
               </td>
               <td>
               {item.vow}
               </td>
               <td>
               <div className="rowAfter">
                  
                  <p className="orangeBtn">Edit</p>
                  <p className="blackBtn">Delete</p>
                 </div>
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

export default ProgressUpdate;
