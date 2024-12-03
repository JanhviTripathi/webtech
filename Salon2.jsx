import React from "react";
import img1 from "./assets/salon6.webp";
import img2 from "./assets/salon7.webp";
import img3 from "./assets/salon8.webp";
import img4 from "./assets/salon9.webp";

const Salon2 = () =>{
    let arr = [{
        title : "Haircut & beard grooming & shaving",
        image : img1,
        
    },
    {
        title : "Pedicure & Manicure",
        image : img2,
       
    },
    {
        title : "Hair color & Hair spa",
        image : img3,
        
    },
    {
        title : "Facial & cleanup",
        image : img4,
       
    }]
    return(
        <section className="Newandnoteworthy">
            <h1>Salon for kids & men</h1>
            {arr.map((ele,i)=>{
                return (<div className="card">
                    <p>{ele.title}</p>
                    <img src={ele.image} alt="" />
                    
                </div>)
            })}
        </section>
    );
}

export default Salon2;