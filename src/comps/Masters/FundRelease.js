import React, { useState } from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";
import { Link } from "react-router-dom";
import Select from 'react-select';

const FundRelease = () => {
  const options = [
    { value: "", label: "Ring Road", color: "#fffff" }
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
      date:"02/01/2023",
      amount: "45.00",
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
              <h3>Fund Release</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/   Fund Release </p>
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
                   Project
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                      <div style={{display:"flex",flexDirection:"row"}}>
                      <div style={{width:"60%",marginLeft:"20px"}}>
                      <Select myFontSize="20px" options={options} styles={styles} />
                       </div>
                       <div className="Btn" style={{marginLeft:"20px"}}>
                     <Link to="/releasehistory"> <p>Show Release History</p> </Link>
              </div>
                        
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

                      <p style={{width:"100%",marginLeft:"20px"}}>K_MI_088_2022_W_1993</p>
                        </td>
                  </tr>
                </table>

                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                  Fund Release Date
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                      <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
                      <input style={{height:"30px",marginLeft:"20px",width:"80%"}} type="text"></input> 
                      <span className="material-symbols-rounded" style={{color:"black",cursor:"pointer"}}>calendar_month</span>
                      </div>

                        </td>
                  </tr>
                </table>

                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                 Release Amount
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                    <div style={{width:"100%",gap:"20px",display:"flex",flexDirection:"row"}}>
                    <input style={{height:"30px",marginLeft:"20px",width:"80%"}} type="text"></input>
                    <p>(Lakh)</p>
                      </div>
                   
                     
                        </td>
                  </tr>
                </table>

                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                 Remarks
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                    <input style={{height:"50px",marginLeft:"20px",width:"80%"}} type="text"></input>

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
              Project Name
                </td>
                <td>
                Id
                </td>
                <td>
                Release Date
                </td>
                <td>
               Release Amount (Lakh)
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
               {item.name}
               </td>
               <td>
               {item.id}
               </td>
               <td>
               {item.date}
               </td>
               <td>
               {item.amount}
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

export default FundRelease;
