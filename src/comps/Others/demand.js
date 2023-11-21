import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const Demand = () => {
  
  const data = [
    {
      dep : "Education Department",
      date : "April 12, 2023",
      project : "Govt. Excellence H.S School, Bagli",
      type : "Approved",
      status : "paid",
      amount : "₹ 88,00,000.00",
      createdby : "Admin",
      createddate : "May 12, 2023, 5 p.m."
    },
    {
      dep : "Health Department",
      date : "April 15, 2023",
      project : "Govt. Hospital, Bagli",
      type : "Immediate Demand",
      status : "paid",
      amount : "₹ 5,00,000.00",
      createdby : "Admin",
      createddate : "May 15, 2023, 5 p.m."
    }
      ];
      const cardData = [
        {
          name: "Total Demand",
          value: "Rs 422.46 lacs",
          icon: "currency_rupee",
          backgroundColor: "#0c83ff",
        },
        {
          name: "Draft Demand",
          value: "Rs 111.19 lacs" ,
          icon: "currency_rupee",
          backgroundColor: "#247297",
        },
        {
          name: "Pending Demand",
          value: "Rs 0.00 lacs",
          icon: "currency_rupee",
          backgroundColor: "#f58646",
        },
        {
          name: "Approved Demand",
          value: "Rs 79.91 lacs",
          icon: "currency_rupee",
          backgroundColor: "#EF4444",
        },
        {
          name: "Rejected Demand",
          value: "Rs 0.00 lacs",
          icon: "currency_rupee",
          backgroundColor: "#f35c86",
        },
        {
          name: "Paid Invoice",
          value: "Rs 231.36 lacs",
          icon: "currency_rupee",
          backgroundColor: "#059669",
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
                  <h3>Demand</h3>
                 
                  <div className="dashItems">
                  <img
                      style={{ cursor: "pointer" }}
                      src={home}
                      alt="searchIcon"
                    />
                     <p>/  Demand</p>
                    <div className="searchBar">
                     
                    </div>
                  </div>
                  </div>
                  
                
                 
               
              </div>
    
          
             
              <div className="dashboardContainer">
              <div className="cardContainer">
                {cardData.map((card, index) => (
                  <div
                    className="card"
                    style={{ backgroundColor: card.backgroundColor }}
                  >
                    <span className="material-symbols-rounded" style={{color:"white"}}>{card.icon}</span>
                    <div className="cardContent">
                      <p style={{color:"white"}}>{card.name}</p>
                      <h4 style={{color:"white"}}>{card.value}</h4>
                    </div>
                  </div>
                ))}
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
                <table className="dataTable">
                  <thead>
                    <td>
                      Sr. No.
                    </td>
                    <td>
                   Dep/Scheme
                    </td>
                    <td>
                    Project
                    </td>
                    <td>
                   Demand Type
                    </td>
                    
    
                    <td>
                    Status
                    </td>
                   
                    <td>
                    Demand Date
                    </td>
                    <td>
                    Total Amount
                    </td>
                    <td>
                   Created By
                    </td>
                    <td>
                    Created Date
                    </td>
                  </thead>
                  <tbody>
                    {data.map((item,index)=>(
                        <tr>
                          <td style={{width:"50px"}}>
                        {index+1}
    
                   </td>
                   <td>
                    <p style={{color:"blue",cursor:"pointer"}}> {item.dep}</p>
                  
                   </td>
                   <td>
                   {item.project}
                   </td>
                   <td>
                   {item.type}
                   </td>
                   <td>
                   {item.status}
                   </td>
                   <td>
                   {item.date}
                   </td>
                   <td>
                   {item.amount}
                   </td>
                   <td>
                   {item.createdby}
                   </td>
                   <td>
                   {item.createddate}
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

export default Demand;
