import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

const SOR = () => {

  const cardData = [
    {
      name: "# ACCESSORIES",
      dep: "MP Public Works Department (MP PWD)",
      type:"Medical works",
      totalitem: 200,
      lastupdatede: "Jan. 10, 2023, 2:17 p.m.",
    },
    {
      name: "# AIR CONDITIONER HVAC",
      dep: "MP Public Works Department (MP PWD)",
      type:"Medical works",
      totalitem: 80,
      lastupdatede: "Jan. 10, 2023, 2:17 p.m.",
    },
    {
      name: "# Aluminum Structural Glazing Composite Panel and Spider glazing",
      dep: "MP Public Works Department (MP PWD)",
      type:"Medical works",
      totalitem: 101,
      lastupdatede: "Jan. 10, 2023, 2:17 p.m.",
    },
    {
      name: "# Aluminum Work",
      dep: "MP Public Works Department (MP PWD)",
      type:"Medical works",
      totalitem: 55,
      lastupdatede: "Jan. 10, 2023, 2:17 p.m.",
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
              <h3>SOR</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/  SOR</p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
              
            
             
           
          </div>

          <div className="fullContainer">
               <Link to="/addsor"> <p>Add New</p>  </Link>
          </div>
         
          <div className="dashboardContainer">
          <div className="cardContainer">
            {cardData.map((card, index) => (
              <div
                className="sorBtn"
                style={{ backgroundColor: "white"}}
              >
                <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                  <div style={{display:"flex",flexDirection:"row"}}><p  style={{color:"white",fontSize:"smaller",marginLeft:"5px",background:"blue",paddingLeft:"5px",paddingRight:"5px",borderRadius:"3px"}}>{card.dep}</p><p style={{color:"white",fontSize:"smaller",marginLeft:"5px",background:"orange",paddingLeft:"5px",paddingRight:"5px",borderRadius:"3px"}}>{card.type}</p></div>
                </div>
                <div >
                  <p style={{color:"black",textAlign:"start",height:"100%",marginTop:"10px",fontWeight:"medium"}}>{card.name}</p>
                </div>
                <div >
                  <p style={{color:"grey",textAlign:"start",height:"100%",marginTop:"3px",fontSize:"smaller"}}>Total SOR Item :{card.totalitem}</p>
                </div>
                <div >
                  <p style={{color:"black",textAlign:"start",height:"100%",marginTop:"10px",fontSize:"smaller"}}><p>Last Updated : <b>{card.lastupdatede}</b></p></p>
                </div>
                
                <span className="material-symbols-rounded" style={{color:"white"}}></span>
                
              </div>
            ))}
          </div>
         
        </div>
      
        </div>
      </div>
    </>
  );
};
    

export default SOR;
