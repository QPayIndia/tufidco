import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const Report = () => {
  
  const cardData = [
    {
      name: "Project Summary",
      icon: "article",
      backgroundColor: "#0c83ff",
    },
    {
      name: "Project Detail",
      icon: "article",
      backgroundColor: "#247297",
    },
    {
      name: "Project Stage",
      icon: "article",
      backgroundColor: "#f58646",
    },
    {
      name: "Estimate",
      icon: "article",
      backgroundColor: "#EF4444",
    },
    {
      name: "BOQ",
      icon: "article",
      backgroundColor: "#f35c86",
    },
    {
      name: "RA",
      icon: "article",
      backgroundColor: "#059669",
    },
    {
      name: "Gantt",
      icon: "article",
      backgroundColor: "#0c83ff",
    },
    {
      name: "Project Issue",
      icon: "article",
      backgroundColor: "#247297",
    },
    {
      name: "Project Picture",
      icon: "article",
      backgroundColor: "#f58646",
    },
    {
      name: "Project Video",
      icon: "article",
      backgroundColor: "#EF4444",
    },
    {
      name: "Procurement",
      icon: "article",
      backgroundColor: "#f35c86",
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
              <h3>Report</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/  Report</p>
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

export default Report;
