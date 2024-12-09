import React, { useContext, useEffect } from "react";
import { globalVar } from "../globalContext/GlobalContext";
import Card from "../Card";

const Electronics =()=>{

    let {products,fetchProducts,refreshId}=useContext(globalVar);

console.log(products)
 useEffect(()=>{
  fetchProducts("http://localhost:3000/Electronics")
},[refreshId])


    return(
         <div className="maincontainer">
         {products.map((ele,i)=>{return<Card product={ele} key={i+1}/>})}
         </div>
        )
}

export default Electronics;