import React, { useState } from "react";
import "./Home.css";
import NavBar from "./navContainer.js";

import ChartComponent from "./Chart.js";
import Header from "./header.js";

const Home = ({ setvalue }) => {
  const cardData = [
    {
      name: "Corporations",
      value: 21,
      icon: "business",
      backgroundColor: "#DDEFE0",
    },
    {
      name: "Municipalities",
      value: 142 ,
      icon: "location_city",
      backgroundColor: "#F4ECDD",
    },
    {
      name: "Town Panchayats",
      value: 600,
      icon: "location_on",
      backgroundColor: "#EFDADA",
    },
    {
      name: "Total Funds",
      value: "Rs 12345.99 lacs",
      icon: "attach_money",
      backgroundColor: "#DEE0EF",
    },
    {
      name: "Total Projects",
      value: 62,
      icon: "work",
      backgroundColor: "#D0EEF6",
    },
    {
      name: "Total Loans",
      value: 40,
      icon: "payments",
      backgroundColor: "#ECD4F7",
    },
  ];



  return (
    <>
 <Header setvalue={setvalue} />

      <div className="homeContainer">
        <NavBar />
        <div className="dashboardContainer">
          <div className="cardContainer">
            {cardData.map((card, index) => (
              <div
                className="card"
                style={{ backgroundColor: card.backgroundColor }}
              >
                <span className="material-symbols-rounded">{card.icon}</span>
                <div className="cardContent">
                  <p>{card.name}</p>
                  <h4>{card.value}</h4>
                </div>
              </div>
            ))}
          </div>
          <ChartComponent />
        </div>
      </div>
    </>
  );
};

export default Home;