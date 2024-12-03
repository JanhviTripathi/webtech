// import { useRef } from "react";
import React , {useState, useRef, useContext}from "react";
import { globalVar } from "./GlobalContainer";

const FormContainer=()=>{
      let {handleTodoList}= useContext(globalVar)
   const date = new Date();
   let days = ["Sun","Mon","Tues","Wed"]
   const createdAt = `${days[date.getDay()]} ${date.getMonth()+1} ${date.getDate()} ${date.getFullYear()}`

   let [data,setData] = useState({
    createdAt:createdAt,
    title:"",
    description:"",
    category:"",
   })

   let handleChange=(e)=>{
        let {name, value} = e.target;
        setData({...data, [name]:value})
   };

let submitData=(e)=>{
    e.preventDefault();
    (data.title !="" && data.description !="") &&  handleTodoList(data);
}

   console.log(data);
    return(
        <div className="FormContainer">
            <h1>Add a Note</h1>
            <form action="" className="form-grp" onSubmit={submitData}>
                <div>
                <label htmlFor="" className="title">Title</label>
                <br />
                <input  type="text" name="title" id="" placeholder="Title" className="titleinput" onChange={handleChange} />
                </div>
                <div>
                <label htmlFor="">Description </label>
                <br />
                <textarea name="description" id=""  className="description" placeholder="Description" onChange={handleChange} cols={144} ></textarea>
                </div>
                <label htmlFor="">Category</label>
                <div className="radio" name="category" onChange={handleChange}>
                    <div>
                    <input type="radio" name="category" id="" value="Study"/>
                    <label htmlFor="">Study</label>
                    </div>
                    <div>
                    <input type="radio" name="category" id="" className="r1" value="General"/>
                    <label htmlFor="">General</label>
                    </div>
                    <div>
                    <input type="radio" name="category" id="" className="r1" value="Personal"/>
                    <label htmlFor="">Personal</label>
                    </div>
                    <div>
                    <input type="radio" name="category" id="" className="r1" value="Official"/>
                    <label htmlFor="">Official</label>
                    </div>   
                </div>
                 <button type="submit">Add Note</button>
            
            </form>
            
          
            
        </div>
    )
}

export default FormContainer;