import React, { createContext , useState } from "react";

export const globalVar = createContext();

const  GlobalContainer = ({children})=>{
    let [todoList,setTodoList]= useState([]);
           let [updatePanel,setUpdatePanel]=useState(false);
           let [updateData,setUpdateData]=useState("");


   let handleTodoList=(data)=>{
       setTodoList([ ... todoList ,data])
   }

   console.log(todoList);
     

    return(
        <globalVar.Provider value={{todoList,setTodoList,handleTodoList,updatePanel,setUpdatePanel,updateData,setUpdateData}}>
            {children}
        </globalVar.Provider>
    )
}

export default GlobalContainer;