import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const MasterData = () => {


   const cardData = [
    {
      name: "Division",
      icon: "article",
      backgroundColor: "#0c83ff",
    },
    {
      name: "District",
      icon: "article",
      backgroundColor: "#247297",
    },
    {
      name: "Work Type",
      icon: "article",
      backgroundColor: "#f58646",
    },
    {
      name: "Sub Work Type",
      icon: "article",
      backgroundColor: "#EF4444",
    },
    {
      name: "Sor Agency",
      icon: "article",
      backgroundColor: "#f35c86",
    },
    {
      name: "UOM",
      icon: "article",
      backgroundColor: "#059669",
    },
    {
      name: "Rate Type",
      icon: "article",
      backgroundColor: "#0c83ff",
    },
    {
      name: "Priority",
      icon: "article",
      backgroundColor: "#247297",
    },
    {
      name: "Department",
      icon: "article",
      backgroundColor: "#f58646",
    },
    {
      name: "Scheme",
      icon: "article",
      backgroundColor: "#EF4444",
    },
    {
      name: "Project Head",
      icon: "article",
      backgroundColor: "#f58646",
    },
    {
      name: "Budget Allocation",
      icon: "article",
      backgroundColor: "#0c83ff",
    },
    {
      name: "checklist Templ",
      icon: "article",
      backgroundColor: "#247297",
    },
    {
      name: "Model Type",
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
              <h3>Master Data</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/  Master Data</p>
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

export default MasterData;
