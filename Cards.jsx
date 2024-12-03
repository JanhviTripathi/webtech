import React, { useContext } from "react";
import Card from "./Card";
import { globalVar } from "./GlobalContainer";

const Cards=()=>{
    let {todoList, setTodoList} = useContext(globalVar);
    console.log(todoList);

    let handleDelete=(index)=>{
        let filteredTodo = todoList.filter((ele,i)=>index !=i)
        setTodoList(filteredTodo);
    }
    
    return(
        <div className="maincard">
            <h1>All Notes</h1>
            {/* <Card></Card> */}
            {todoList.map((ele,i)=>{
                return <Card data={{ele,i,handleDelete}}></Card>
            })}
           
           
        </div>
    )
}

export default Cards;