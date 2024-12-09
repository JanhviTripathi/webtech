import React, { useContext, useEffect } from "react";
import { globalVar } from "../globalContext/GlobalContext";
import Card from "../Card";
import { useLoaderData } from "react-router-dom";

const Medical =()=>{
    
    let {products,fetchProducts,refreshId}=useContext(globalVar);
    let data = useLoaderData();
console.log(products)
 useEffect(()=>{
  fetchProducts("http://localhost:3000/Medical")
},[refreshId])


    
        return(
             <div className="maincontainer">
              {products.map((ele,i)=>{return<Card product={ele} key={i+1}/>})}
             </div>
            )
}

export default Medical;