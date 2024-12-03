import React from "react";
import img1 from "./assets/Salon1.webp";
import img2 from "./assets/Sa.webp";
import img3 from "./assets/Salon3.webp";
import img4 from "./assets/Salon4.webp";
import img5 from "./assets/Salon5.webp";
const Salon = () =>{
    let arr = [{
        title : "Waxing",
        image : img1,
        
    },
    {
        title : "Cleanup",
        image : img2,
       
    },
    {
        title : "Manicure",
        image : img3,
        
    },
    {
        title : "Hair Care",
        image : img4,
       
    },
    {
        title : "Threading & Face Waxing",
        image : img5,
       
    }]
    return(
        <section className="Newandnoteworthy">
            <h1>Salon for women</h1>
            {arr.map((ele,i)=>{
                return (<div className="card">
                    <p>{ele.title}</p>
                    <img src={ele.image} alt="" />
                    
                </div>)
            })}
        </section>
    );
}

export default Salon;