import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const GanttChart = () => {
  
  const cardData = [
    {
      name: "# ACCESSORIES",
      dep: "MP Public Works Department (MP PWD)",
      type:"Medical works",
      prirority:"medium",
      planstartdate: "March 17, 2023 To April 17, 2024",
      actstartdate: "May 17, 2023 To June 17, 2024",
      progree : 50,
      lastupdatede: "Jan. 10, 2023, 2:17 p.m.",
    },
    {
      name: "# AIR CONDITIONER HVAC",
      dep: "MP Public Works Department (MP PWD)",
      type:"Medical works",
      prirority:"medium",
      planstartdate: "March 17, 2023 To April 17, 2024",
      actstartdate: "May 17, 2023 To June 17, 2024",
      progree : 0,
      lastupdatede: "Jan. 10, 2023, 2:17 p.m.",
    },
    {
      name: "# Aluminum Structural Glazing Composite Panel and Spider glazing",
      dep: "MP Public Works Department (MP PWD)",
      type:"Medical works",
      prirority:"medium",
      planstartdate: "March 17, 2023 To April 17, 2024",
      actstartdate: "May 17, 2023 To June 17, 2024",
      progree : 10,
      lastupdatede: "Jan. 10, 2023, 2:17 p.m.",
    },
    {
      name: "# Aluminum Work",
      dep: "MP Public Works Department (MP PWD)",
      type:"Medical works",
      prirority:"medium",
      planstartdate: "March 17, 2023 To April 17, 2024",
      actstartdate: "May 17, 2023 To June 17, 2024",
      progree : 70,
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
              <h3>Gantt Chart</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/  Gantt Chart</p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
              
            
             
           
          </div>

          <div className="fullContainer">
                <p>Add New</p>
          </div>
         
          <div className="dashboardContainer" >
          <div className="cardContainer" >
            {cardData.map((card, index) => (
              <div
                className="sorBtn"
                style={{ backgroundColor: "white", height:"fit-content"}}
              >
                 <div >
                  <p style={{color:"blue",textAlign:"start",height:"100%",marginTop:"10px",marginBottom:"10px",fontWeight:"medium"}}>{card.name}</p>
                </div>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                  <p  style={{color:"white",fontSize:"smaller",marginLeft:"5px",background:"blue",paddingLeft:"5px",paddingRight:"5px",borderRadius:"3px"}}>Gantt Plan</p><p style={{color:"white",fontSize:"smaller",marginLeft:"5px",background:"orange",paddingLeft:"5px",paddingRight:"5px",borderRadius:"3px"}}>priority : {card.prirority}</p>
                </div>
               
                <div >
                  <p style={{color:"grey",textAlign:"start",height:"100%",marginTop:"10px",fontSize:"smaller"}}>Plan Start Date & End Date :{card.planstartdate}</p>
                </div>
                <div >
                  <p style={{color:"grey",textAlign:"start",height:"100%",marginTop:"1px",fontSize:"smaller"}}>Actual Start Date & End Date :{card.actstartdate}</p>
                </div>
                <div>
                <progress id="file" value={card.progree} max="100" style={{marginTop:"10px",color:"green"}}> </progress>
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

export default GanttChart;
