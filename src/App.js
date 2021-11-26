import React from 'react';
import { useState } from 'react';

export const App = () => {
  const [height, setHeight ] = useState("");
  const [weight, setWeight ] = useState("");
  const [show, setShow] = useState("");
  const [condition, setCondition] = useState("");


  const inputEvent1 = (event) =>{
    setHeight(event.target.value);
  }
  const inputEvent2 = (event) =>{
    setWeight(event.target.value);
  }
  const submit = () => {
    let height_inm = (height*0.01)*(height*0.01) ;
    setShow(weight/height_inm);

    if(show < 18.5){
      setCondition("You are in underweight range");
    }else if(show > 18.4 && show < 25.0){
      setCondition("You are in healthy weight range");
    }else if(show > 24.9 && show < 30.0 ){
      setCondition("You are in overweight range");
    }else{
      setCondition("Obesity class 1")
    }
  }

  
  return (
    <div className="main">
      <div className="box">

        <div className="header" style={{
          backgroundColor: "#1565C0", color: "white", paddingTop: "13px",
          paddingBottom: "13px"
        }}>
          <h1>BMI Calculator</h1>
        </div>

        <div className="height" style={{marginTop:"20px"}}>
          <p>Enter your height in cm:</p>
          <input type="text" onChange={inputEvent1} value={height}/>
        </div>
        <div className="weight" style={{marginTop:"20px"}}>
          <p>Enter your weight in kg:</p>
          <input type="text" onChange={inputEvent2} value={weight}/>
        </div>
        <button onClick={submit} style={{marginTop:"20px"}}>Submit</button>

        <div className="content" style={{marginTop:"20px"}}>
        <p>Your BMI is {show}</p>
        <p>Your suggested wieght range is between 50 - 67</p>
        <p>{condition}</p>
        </div>
      </div>
    </div>
  )
}
