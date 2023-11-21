import React, { useState } from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";
import { Link } from "react-router-dom";
import Select from 'react-select';

const ProjectUpdate = () => {
  
  const typeopt = [
    {
      name : "Yes",
      value :"yes"
    },
    {
      name : "No",
      value :"no"
    },
  ]

  const sectors = [
    { value: "", label: "Parks", color: "#fffff" },
    { value: "", label: "Water Bodies", color: "#fffff" },
    { value: "", label: "UGSS", color: "#fffff" },
    { value: "", label: "School", color: "#fffff" },
    { value: "", label: "BT Roads", color: "#fffff" }
    ];

  const options = [
    { value: "", label: "---", color: "#fffff" }
    ];

    const projects = [
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

  const schemes = [
    { value: "", label: "KNMT", color: "#fffff" },
    { value: "", label: "Singara Chennai", color: "#fffff" }
   
    ];

    const years = [
      { value: "", label: "2022", color: "#fffff" },
      { value: "", label: "2023", color: "#fffff" }
     
      ];
  
  const data = [
   
    {
      name:"Ring Road 1",
      id:"K_MI_088_2022_W_1993",
      sector : "BT Roads"
    },
    {
      name:"Ring Road 2",
      id:"K_MI_088_2022_W_1994",
      sector : "BT Roads"
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
              <h3>Project Update</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/   Project Update </p>
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

                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                  Financial Year
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                      <div style={{width:"80%",marginLeft:"20px"}}>
                      <Select myFontSize="20px" options={years} styles={styles} />
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
                  Project Name
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                      <div style={{width:"80%",marginLeft:"20px"}}>
                      <Select myFontSize="20px" options={projects} styles={styles} />
                      </div>
                   
                        </td>
                  </tr>
                </table>

                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                  Technical Specification Ref No
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
                 TS Date
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

                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                  Project Id
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                      <p style={{width:"100%",marginLeft:"20px"}}>
                      K_MI_088_2022_W_1993
                      </p>
                   
                        </td>
                  </tr>
                </table>

                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                  Tender Called
                    </p>
                    </td>
                    <td style={{width:"100%"}}>
                    <div style={{display:"flex",flexDirection:"row",marginTop:"3px"}}>
                        {typeopt.map((item,index)=>(
                          <div style={{marginLeft:"20px"}}>
                            <input
                          type="radio"
                          name={"variableName"}
                          value={item.value}
                          style={{accentColor:"#1B8381",marginRight:"3px"}}
                          />{item.name}
                            </div>
                        ))}
                      
                      </div>
                        </td>
                  </tr>
                </table>

      


                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                 Tender Date
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


                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                 Tender Finalize Date
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

             

                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                  Project Sanctioned Amount
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
                 Work Order Issue Date
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

                <table>
                  <tr>
                    <td style={{width:"30%"}}>
                    <p >
                  Work Order Amount with GST
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
                  Work Order Amount without GST
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
                  Sector
                </td>
                <td>
                  Project Id
                </td>
                <td>
              Project Name
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
               {item.sector}
               </td>
               <td>
               {item.id}
               </td>
               <td>
               {item.name}
               </td>
              
               <td>
               <div className="rowAfter">
                  
                  <p className="greenBtn">Update</p>
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

export default ProjectUpdate;
