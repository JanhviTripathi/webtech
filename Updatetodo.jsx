import React, { useContext, useState } from "react";
import { globalVar } from "./GlobalContainer";

const Updatetodo = ()=>{
    let {updateData,setUpdateData,todoList,setTodoList,setUpdatePanel}=useContext(globalVar);
    console.log(updateData);
    let [data,setData]=useState({
        createdAt:updateData.createdAt,
        title:updateData.title,
        description:updateData.description,
        category:updateData.category,
       })
    
       let handleChange=(e)=>{
        let {name, value} = e.target;
        setData({...data, [name]:value})
   };
   let handleUpdate = (e)=>{
    e.preventDefault();
    let filterData=todoList.filter((ele,i)=>i!=updateData.index);
    setTodoList([...filterData,data]);
    setUpdatePanel(false);
   }
    return(
        <section className="updateContainer">
        <div className="FormContainer">
        <h1>Update a Note</h1>
            <form action="" className="form-grp"  onSubmit={handleUpdate}>
                <div>
                <label htmlFor="" className="title">Title</label>
                <br />
                <input  type="text" name="title" id="" placeholder="Title" className="titleinput" value={data.title} onChange={handleChange}/>
                </div>
                <div>
                <label htmlFor="">Description </label>
                <br />
                <textarea name="description" id=""  className="description" placeholder="Description"  cols={144} rows={3} value={data.description} onChange={handleChange}></textarea>
                </div>
                <label htmlFor="">Category</label>
                <div className="radio" name="category"  onChange={handleChange}>
                    <input type="radio" name="category" id="" value="Study"/>
                    <label htmlFor="">Study</label>
                    <input type="radio" name="category" id="" className="r1" value="General"/>
                    <label htmlFor="">General</label>
                    <input type="radio" name="category" id="" className="r1" value="Personal"/>
                    <label htmlFor="">Personal</label>
                    <input type="radio" name="category" id="" className="r1" value="Official"/>
                    <label htmlFor="">Official</label>
                </div>
                 <button type="submit">Add Note</button>
            
            </form>
            
          
            
        </div> 
        </section>
    )
}

export default Updatetodo;