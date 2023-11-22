import React from "react";
import { useState,useEffect } from "react";
import App from "../App";
 import {usenavigate}from "react-router-dom"
//import { Calendar } from 'primereact/calendar';

const Inputs=()=>{
    const [date1,setDate1]=useState("")
    const [date2,setDate2]=useState("")
    const [Array,setArray]=useState([])

const B= ()=>{
    
  fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${date1}&end=${date2}`)
        .then(response => response.json())
        .then(result => setArray(result))
        .catch(error => console.log('error', error));
        {Array?.filter((i) => { 
            if(i.className="parashat"){
                  return( <fieldset>
                  <div key={i.title}>
                  <div>{i.start}</div>
                  <div>{i.hebrew}</div>
                  <div>{i.description}</div>
              </div> 
              </fieldset>
              );}
              })}
      
  
}
    return(<>
   <input placeholder="enter begining date" onChange={(e)=> {setDate1(e.target.value)}}></input>
   <input placeholder="enter end date"  onChange={(e)=>{ setDate2(e.target.value)}}></input>
   <button onClick={()=>B()}  >הצג הכל</button>
   

    {/* <Calendar dateFormat="dd/mm/yy" inline value={date} onChange={(e) => setDate1(e.value)}></Calendar>
     <Calendar  dateFormat="dd/mm/yy" inline value={date} onChange={(e) => setDate2(e.value)}></Calendar>  */}
 
</>
)
    }


export default Inputs