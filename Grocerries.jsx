import React from "react";
import { useContext } from "react";
import { globalVar } from "../globalContext/GlobalContext";
import { useEffect } from "react";
import Card from "../Card";

const Grocerries =()=>{
    
    let {products,fetchProducts,refreshId}=useContext(globalVar);

console.log(products)
 useEffect(()=>{
  fetchProducts("http://localhost:3000/grocery")
},[refreshId])


    
        return(
             <div className="maincontainer">
              {products.map((ele,i)=>{return<Card product={ele} key={i+1}/>})}
             </div>
            )
}

export default Grocerries;