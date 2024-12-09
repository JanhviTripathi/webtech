import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import style from "./pages/LoginPage.module.css"
import axios from 'axios';

function UpdateCard() {
    let data = useLocation();
    let {id} = useParams();
    console.log("id :", id);
    
    let navigate = useNavigate();
  
    console.log(data);

    let [updateCard,setUpdatecard] =useState({
        item : data.state.product.item,
        warranty : data.state.product.warranty,
        warranty_id : data.state.product.warranty_id,

    })

    let handleChange = (e) =>{
        let {name,value}=e.target 
        setUpdatecard({...updateCard,[name]:value})
    }

    let handleSubmit= async(e)=>{
       e.preventDefault();
       let response = await axios.put(`http://localhost:3000/${data.state.product_Type}/${data.state.product.id}`,updateCard);
        console.log(response);
        navigate("/homePage")
        
    }
    
  return (
    <div className={style["loginPage"]}>
      <div className={style["login"]} >
        <form action="" onSubmit={handleSubmit}>
        <h1>Update Product</h1>
        {/* <div className="img" >
        <label htmlFor="">Image:</label>
          <input type="file" placeholder ='Enter your Image' name="image"  onChange={handleChange} value={updateCard.image}/>
          </div> */}
          <div>
          <label htmlFor="">Item :</label>
          <input type="text" placeholder ='Enter your Item' name="item"  onChange={handleChange} value={updateCard.item}/>
          </div>
         
         <div>
         <label htmlFor="">Warranty : </label>
         <input type="text" placeholder ='Warranty' name="warranty" onChange={handleChange} value={updateCard.warranty}/>
         </div>

         <div>
         <label htmlFor="">Warranty Id: </label>
         <input type="text" placeholder ='Warranty Id' name="warranty_id" className='warranty_id' onChange={handleChange} readOnly value={updateCard.warranty_id}/>
         </div>
          
          <button>Update Card</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateCard
