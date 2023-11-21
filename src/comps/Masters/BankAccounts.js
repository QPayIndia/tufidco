import React, { useState } from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";
import Select from 'react-select';


const BankAccounts = () => {

  const schemes = [
    { value: "", label: "KNMT", color: "#fffff" },
    { value: "", label: "Singara Chennai", color: "#fffff" }
   
    ];

  const textBox = [

    {
      name:"Bank Name",
      value:""
    },
    {
      name:"Account Number",
      value:""
    },
    {
      name:"IFSC Code",
      value:""
    },
    {
      name:"Branch Name",
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

  return (
    <>
     <Header setvalue={false} />
      <div className="homeContainer">
        <NavBar />
        <div className="bodyContainer">
          <div className="bodyHead">
            <div className="headTop">
              <h3>Bank Accounts</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/   Bank Accounts</p>
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
                   Scheme
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                      <div style={{width:"80%",marginLeft:"20px"}}>
                      <Select myFontSize="20px" options={schemes} styles={styles} />
                      </div>
                   
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

<div style={{display:"flex",flexDirection:"row",marginTop:"10px",verticalAlign:"center"}}>
           <div style={{display:"flex",justifyContent:"space-evenly",flexDirection:"column"}}> 
           <p >Upload Account Passbook 1st Page</p>
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
                Scheme
                </td>
                <td>
                Bank
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
               {item.scheme}
               </td>
               <td>
               {item.bank}
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

export default BankAccounts;
