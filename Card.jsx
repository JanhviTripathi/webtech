import React, { useContext } from 'react'
import { globalVar } from './globalContext/GlobalContext';
import { useNavigate } from 'react-router-dom';

const Card =({product})=> {
 let {handleDelete} = useContext(globalVar);
 let navigate = useNavigate();

 
 let handleUpdate=()=>{
    navigate(`/updatecard/${product.id}`,{state:{product,product_Type : "Electronics"}})    
    // console.log(product.)
 }
  return (
    <div className="cardcontainer">
      <div className="card">
          <div className="img">
            <img src={product.image} alt="" />
          </div>
          <p className='title'>{product.item}</p>
          <p>{product.warranty}</p>
          <p>{product.id}</p>
          <button className="update" onClick={handleUpdate}>Update</button>
          <button className="delete" onClick={()=>{handleDelete("Electronics",product.id)}}>Delete</button>
         </div>
    </div>
  )
}

export default Card
