import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const VendorPayment = () => {
  const data = [
   
    {
      name:"A B C ASSOCIATE",
      value:"Rs. 19.00 Lakhs"
    },
    {
      name:"A. H. Construction Pro. Salman Khan",
      value : "Rs 25.00 Lakhs"
    }
  ];

  const schemes = [
   
    {
      name:"------",
      value:""
    },
    {
      name:"Indira Gandhi National Widow Pension Scheme",
      value : ""
    }
  ];

  const sector = [
   
    {
      name:"------",
      value:""
    },
    {
      name:"Revenue Department",
      value : ""
    }
  ];

  const vendor = [
    {
      name:"------",
      value:""
    },
    {
      name:"A B C ASSOCIATE",
      value : ""
    },
    {
      name:"A. H. Construction Pro. Salman Khan",
      value : ""
    }
  ]
  
  return (
    <>
     <Header setvalue={false} />
      <div className="homeContainer">
        <NavBar />
        <div className="bodyContainer">
          <div className="bodyHead">
            <div className="headTop">
              <h3>Vendor Payment</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/   Vendor Payment</p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
             
            
             
           
          </div>

          <div className="CardContainer">
            

            <div className="gridContainer2">
            <div className="textBoxContainer">
              <p>
                Select Scheme
              </p>
              <div >

              <select style={{height:"30px",marginLeft:"20px",width:"170px"}} value="">
                {schemes.map((item,index) =>(
                  <option value={item.value}>{item.name}</option>
                  
                ))}
            </select>
            </div>
            </div>
            <div className="textBoxContainer">
              <p>
                Financial Year
              </p>
              <div className="textBox">
                <input style={{height:"30px",marginLeft:"20px"}} type="text"></input>
              </div>
            </div>
            <div className="textBoxContainer">
              <p>
                Sector
              </p>
              <div >

<select style={{height:"30px",marginLeft:"20px",width:"170px"}} value="">
  {sector.map((item,index) =>(
    <option value={item.value}>{item.name}</option>
    
  ))}
</select>
</div>
            </div>
            <div className="textBoxContainer">
              <p>
                Project Id
              </p>
              <div className="textBox">
                <input style={{height:"30px",marginLeft:"20px"}} type="text"></input>
              </div>
            </div>
            <div className="textBoxContainer">
              <p>
              Project
              </p>
              <div className="textBox">
                <input style={{height:"30px",marginLeft:"20px"}} type="text"></input>
              </div>
            </div>
            <div className="textBoxContainer">
              <p>
              Request Amount
              </p>
              <div className="textBox">
                <input style={{height:"30px",marginLeft:"20px"}} type="text"></input>
              </div>
            </div>
            <div className="textBoxContainer">
              <p>
              Ref Document
              </p>
              <div className="textBox">
                <input style={{height:"30px",marginLeft:"20px"}} type="text"></input>
              </div>
            </div>
            <div className="textBoxContainer">
              <p>
              Remarks
              </p>
              <div className="textBox">
                <input style={{height:"30px",marginLeft:"20px"}} type="text"></input>
              </div>
            </div>
            </div>

            <div style={{display:"flex",flexDirection:"row",width:"100%",marginTop:"30px"}}>
            <div className="dropdown-container" style={{width:"40%"}}>
              <p>Select Vendor*</p>
              <select className='form-select' style={{height:"35px",marginTop:"5px"}} value="">
                {vendor.map((item,index) =>(
                  <option value={item.value}>{item.name}</option>
                  
                ))}
            </select>
            </div>
            <div className="dropdown-container" style={{width:"40%"}}>
              <p>
              Amount*
              </p>
              <div className="textBox">
                <input style={{height:"35px",marginTop:"5px",width:"100%"}} type="text"></input>
              </div>
            </div>
            <div style={{justifyContent:"space-evenly",display:"flex",verticalAlign:"center",marginTop:"10px",flexDirection:"column",marginLeft:"20px"}}>
              <p className="Btn" style={{height:"fit-content"}}>Add Payment</p>

            </div>
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
          <div style={{display:"flex",justifyContent:"space-evenly",position:"relative"}}>
          <table className="dataTable" style={{width:"fit-content"}}>
              <thead>
                <td>
                  Sr. No.
                </td>
                <td>
              Vendor
                </td>
                <td>
                Amount
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
               
               <td style={{textAlign:"start"}}>
               {item.name}
               </td>
               <td>
               {item.value}
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

            <div style={{justifyContent:"space-evenly",display:"flex",marginTop:"10px",flexDirection:"row",width:"100%"}}>
              <p className="Btn" style={{height:"fit-content"}}>Save</p>

            </div>
         </div>
    
      
        </div>
      </div>
    </>
  );
};

export default VendorPayment;
