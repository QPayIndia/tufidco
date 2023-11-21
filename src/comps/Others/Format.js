import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const Format = () => {
  
  const cardData = [
    {
      name: "Format - 1",
      icon: "article",
      desc:"Acceptance of Work ",
      backgroundColor: "#0c83ff",
    },
    {
      name: "Format - 2",
      icon: "article",
      desc:"Complete Information",
      backgroundColor: "#247297",
    },
    {
      name: "Format - 3",
      icon: "article",
      desc:"Progress Report",
      backgroundColor: "#f58646",
    },
    {
      name: "Format - 4",
      icon: "article",
      desc:"Pending Payment",
      backgroundColor: "#EF4444",
    },
    {
      name: "Format - 5",
      icon: "article",
      desc:"Physical and Financial Progress",
      backgroundColor: "#f35c86",
    },
    {
      name: "Format - 6",
      icon: "article",
      desc:"Format",
      backgroundColor: "#059669",
    },
    {
      name: "Format - 7",
      icon: "article",
      desc:"Initial Work",
      backgroundColor: "#0c83ff",
    },
    {
      name: "Format - 8",
      icon: "article",
      desc:"Completed Work",
      backgroundColor: "#247297",
    },
    {
      name: "Format - 9",
      icon: "article",
      desc:"Format",
      backgroundColor: "#f58646",
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
              <h3>Format</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/  Format</p>
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
                style={{background:"white"}}
              >
                <span className="material-symbols-rounded" style={{color:"black"}}>{card.icon}</span>
                <div >
                  <p style={{color:"black",textAlign:"end",height:"100%"}}>{card.name}</p>
                  <p style={{fontSize:"smaller",textAlign:"end"}}>{card.desc}</p>
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

export default Format;
