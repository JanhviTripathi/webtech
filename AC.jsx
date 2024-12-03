import React from "react";
import img1 from "./assets/AC1.webp";
import img2 from "./assets/AC2.webp";
import img3 from "./assets/AC3.webp";
import img4 from "./assets/AC4.webp";
import img5 from "./assets/AC5.webp";

const AC = () =>{
    let arr = [{
        title : "AC Repair & Service",
        image : img1,
        
    },
    {
        title : "Washing Machine Repair",
        image : img2,
       
    },
    {
        title : "Water Purifier Repair & Service",
        image : img3,
        
    },
    {
        title : "Television Repair",
        image : img4,
       
    },
    {
        title : "Chimney Repair & Service",
        image : img5,
        
    },
   ]
    return(
        <section className="Newandnoteworthy">
            <h1>AC & APPLICATION REPAIR</h1>
            {arr.map((ele,i)=>{
                return (<div className="card">
                     <p>{ele.title}</p>
                    <img src={ele.image} alt="" />
                   
                </div>)
            })}
        </section>
    );
}

export default AC;