import React from "react";
import img1 from "./assets/pest1.webp";
import img2 from "./assets/pest2.webp";
import img3 from "./assets/pest3.webp";
import img4 from "./assets/pest4.webp";

const Spa = () =>{
    let arr = [{
        title : "Full home cleaning",
        image : img1,
        
    },
    {
        title : "Bathroom & kitchen cleaning",
        image : img2,
       
    },
    {
        title : "Sofa & carpet cleaning",
        image : img3,
        
    },
    {
        title : "Cockroach , ant & general pest control",
        image : img4,
        
    },
   ]
    return(
        <section className="Newandnoteworthy">
            <h1>Cleaning & pest control</h1>
            {arr.map((ele,i)=>{
                return (<div className="card">
                     <p>{ele.title}</p>
                    <img src={ele.image} alt="" />
                   
                </div>)
            })}
        </section>
    );
}

export default Spa;