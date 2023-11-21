import React from "react";
import "../../../Styles/styles.css";
import NavBar from "../../navContainer.js";

import home from "../../../assets/home.svg";
import Header from "../../header.js";

import Select from 'react-select';

const AddSOR = () => {



const styles = {
  option: (provided, state) => ({
    ...provided,
    fontWeight: state.isSelected ? "bold" : "normal",
    color: "grey",
    backgroundColor: state.data.color,
    fontSize: "small",
  }),

 
};

 const category = [
    {name:"---",
      value : "-"
  },
  {name:"Books",
      value : "books"
  },
 ];

 const textBox =[
  {
    name : "Sor Agency*"
  },
  {
    name : "Rate Type*"
  },
  {
    name : "Work Type*"
  },
  {
    name : "Sub Work Type*"
  },
 ]



  const options = [
  { value: "", label: "---", color: "#fffff" }
  ];

  return (
    <>
      <Header setvalue={false} />
      <div className="homeContainer">
        <NavBar />
        <div className="bodyContainer">
          <div className="bodyHead">
            <div className="headTop">
              <h3>Add SOR</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/  AddSOR</p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
              
            
             
           
          </div>

          
          <div className="CardContainer">


            {textBox.map((item,index)=>(
              <div className="dropdown-container">
              <p className="text">{item.name}</p>
              <div style={{marginTop:"5px"}}>
              <Select myFontSize="20px" options={options} styles={styles} />
              </div>
            </div>
            ))}

           
            <div style={{justifyContent:"space-evenly",display:"flex",verticalAlign:"center",marginTop:"30px",flexDirection:"row"}}>
              <p className="Btn" style={{height:"fit-content"}}>Add SOR</p>

  
            </div>
            
          </div>
          
      
        </div>
      </div>
    </>
  );
};
    

export default AddSOR;
