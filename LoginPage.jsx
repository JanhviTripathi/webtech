import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import style from "./LoginPage.module.css";
import axios from 'axios';

const LoginPage = () => {
  let navigate=useNavigate()
  let [loginData,setLoginData]=useState({
    userName:"",
    
    password:"",
    
    
})

let handelChange=(e)=>{
let {name,value}=e.target;
setLoginData({...loginData, [name]:value})

}

let handleSubmit=async (e)=>{
  console.log("hello")
  e.preventDefault();
     let response=await axios.get("http://localhost:4500/customer");
     console.log(response)
      let costomer = response.data;
     let userData= costomer.find(element => element.password == loginData.password);
      console.log(userData)
      if (userData) {
        console.log("succesful")
             toast.success("Login Succesfully");
     setTimeout(()=>{
        navigate("/homePage")
     },1500)
      }else{
        console.log("error")
        toast.error("something went wrong")
      }

}
  return (
    <div className={style["loginPage"]}>
      <div className={style["login"]} >
        <form action="" onSubmit={handleSubmit}>
        <h1>Login</h1>
          <div>
          <label htmlFor="">Username</label>
          <input type="text" name='username' onClick={handelChange}/>
          </div>
         
         <div>
         <label htmlFor="">Password</label>
         <input type="password" name='password'  onClick={handelChange}/>
         </div>
          
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage