import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const FinanceReport = () => {
  
  const cardData = [
    {
      name: "Project Grant and Balance Report",
      icon: "article",
      backgroundColor: "#0c83ff",
    },
    {
      name: "Project Expenditure Report",
      icon: "article",
      backgroundColor: "#247297",
    },
    {
      name: "General Ledger (GL) Wise Report",
      icon: "article",
      backgroundColor: "#f58646",
    },
    {
      name: "Allocation & Expenditure Report",
      icon: "article",
      backgroundColor: "#EF4444",
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
              <h3>Finance Report</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/  Finance Report</p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
              
            
             
           
          </div>

      
         
          <div className="dashboardContainer">
          <div className="cardContainer">
            {cardData.map((card, index) => (
              <div
                className="cardBtn"
                style={{ backgroundColor: card.backgroundColor}}
              >
                <span className="material-symbols-rounded" style={{color:"white"}}>{card.icon}</span>
                <div >
                  <p style={{color:"white",textAlign:"center",height:"100%"}}>{card.name}</p>
                </div>
              </div>
            ))}
          </div>
         
        </div>
      
        </div>
      </div>
    </>
  );
};


export default FinanceReport;
