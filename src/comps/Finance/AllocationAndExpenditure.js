import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const AllocationAndExpenditure = () => {
  
  const data = [
    {
      year : "2022-2023",
      dep : "PWD",
      scheme : "Road Reworks",
      proamount : "Rs 50.00 lakhs",
      taramount : "Rs 30.00 lakhs",
      
      
    },
    {
      year : "2022-2023",
      dep : "PWD",
      scheme : "Street  Reworks",
      proamount : "Rs 20.00 lakhs",
      taramount : "Rs 30.00 lakhs",
      
      
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
              <h3>Allocation and Expenditure</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/  Allocation and Expenditure</p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
              
            
             
           
          </div>

          <div className="fullContainer">
                <p>Add New</p>
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
            <table className="dataTable">
              <thead>
                <td>
                  Sr. No.
                </td>
                <td>
               Financial Year
                </td>
                <td>
                Department
                </td>
                <td>
               Scheme
                </td>
                

                <td>
                Total Provision Amount
                </td>
               
                <td>
                Total Target Amount
                </td>
               
               
              </thead>
              <tbody>
                {data.map((item,index)=>(
                    <tr>
                      <td style={{width:"50px"}}>
                    {index+1}

               </td>
               <td>
                <p > {item.year}</p>
              
               </td>
               <td>
               {item.dep}
               </td>
               <td>
               {item.scheme}
               </td>
               <td>
               {item.proamount}
               </td>
               <td>
               {item.taramount}
               </td>
               
               
               
                    </tr>
                ))}
              
                
                
  
            
              </tbody>
            </table>
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

export default AllocationAndExpenditure;
