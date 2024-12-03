import React, { useContext, useState } from "react";
import { globalVar } from "./GlobalContainer";

const Card=(props)=>{
      let {updatePanel,setUpdatePanel,setUpdateData}=useContext(globalVar)
      let {createdAt,title,description,category} = props.data.ele
  
    return(
    <div className="card">
    <p>{createdAt}</p>
    <div>
     <h3>{title}</h3>
     <h3>{category}</h3>
     </div>
     <p>Description:</p>
     <p className="description">{description.length > 40 ? description.slice(0,40) + "..." :description }</p>    
     <div className="buttons">
     <button className="delete"  onClick={()=>{props.data.handleDelete(props.data.i)}}>Delete</button>
     <button className="update" onClick={()=>{setUpdatePanel(!updatePanel),setUpdateData({data:props.data.ele, index:props.data.i})}}>Update</button>
     </div>
 </div>
    )
}

export default Card;