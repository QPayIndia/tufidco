import React from "react";
import "../../../Styles/styles.css";
import NavBar from "../../navContainer.js";

import home from "../../../assets/home.svg";
import Header from "../../header.js";

const status = [
  {
    name:"Select Status",
    value : ""
  },
  {
    name:"Started",
    value : ""
  },
  {
    name:"Not Started",
    value : ""
  },
  {
    name:"Close",
    value : ""
  }
]

const progress =[
  {
    name:"0 - 10%",
    value:""
  },
  {
    name:"10% - 20%",
    value:""
  },
  {
    name:"20% - 30%",
    value:""
  },
  {
    name:"30% - 40%",
    value:""
  },
  {
    name:"40% - 50%",
    value:""
  },
  {
    name:"50% - 60%",
    value:""
  },
  {
    name:"70% - 80%",
    value:""
  },
  {
    name:"80% - 90%",
    value:""
  },
  {
    name:"90% - 100%",
    value:""
  }
]

const data =[
  {
    name:"Project ID",
    value:" K_MI_088_2022_W_1993"
  },
  {
    name:"Project Cost",
    value:"₹ 17 Lakhs"
  },
  {
    name:"Agency Type",
    value:"Municipality"
  },
  {
    name:"Agency Name",
    value:"Adiramapattinam"
  },
  {
    name:"Wrok Create Date",
    value:"5/07/2023"
  },
  {
    name:"District",
    value:"Lakshmi Vinayaga Nagar"
  },
  {
    name:"Scheme",
    value:"KNMT"
  },
  {
    name:"Sector",
    value:"Water Bodies"
  }
]

const PhysicalProgressUpdate = () => {
  
  return (
    <>
     <Header setvalue={false} />
      <div className="homeContainer">
        <NavBar />
        <div className="bodyContainer">
          <div className="bodyHead">
            <div className="headTop">
              <h3>Physical Progress Update</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/   Physical Progress Update</p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
            
            
             
           
          </div>

          <div className="CardContainer">
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:"15px"}}>
              <p><b>Project Name</b> : (A) Lakshmi Vinayaga Nagar Extension Cross Street – I</p>
<p></p>
            </div>
          <div className="gridContainer2">
            {data.map((item,index) =>(
              <p style={{marginTop:"5px"}}><b>{item.name}</b> : {item.value}</p>
            ))}
          </div>

          <table className="dataTable" style={{borderCollapse:"collapse",marginTop:"50px"}}>
              <thead>
                <td style={{width:"20"}}>
                 Main Project
                </td>
                <td>
                 Work Status 
                </td>
                <td>
                  Physical Work
                </td>
                <td>
                Photos
                </td>
              </thead>
              <tbody>
              
                <td>
                <div className="textBox">
                <input style={{height:"60px",marginLeft:"20px"}} type="text"></input>
              </div>
                </td>
                <td>
                <div className="dropdown-container" >
              <select className='form-select' style={{height:"35px"}} value="">
                {status.map((item,index) =>(
                  <option value={item.value}>{item.name}</option>
                  
                ))}
                    

            </select>
            </div>
                </td>
                <td>
                <div className="dropdown-container">
              <select className='form-select'  style={{height:"35px"}} value="">
                {progress.map((item,index) =>(
                  <option value={item.value}>{item.name}</option>
                  
                ))}
                    

            </select>
            </div>
                </td>
                <td>
                <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                  <p className="boxBorder">Choose File</p>
                </div>
                </td>
                
                
              
               
            
              </tbody>
            </table>
          

        
            <div style={{display:"flex",justifyContent:"space-between",marginTop:"30px"}}>
              <div></div>
              <div style={{display:"flex",flexDirection:"row",gap:"10px"}}><p className="Btn" style={{background:"green"}}>Save Work</p><p className="Btn" style={{background:"red"}}>Back to List</p></div>
              

            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default PhysicalProgressUpdate;
