import React from "react";
import img1 from "./assets/spa4.webp";
import img2 from "./assets/spa5.webp";
import img3 from "./assets/spa6.webp";

const Spa2 = () =>{
    let arr = [{
        title : "Pain relief",
        image : img1,
        
    },
    {
        title : "Post workout",
        image : img3,
        
    },
    {
        title : "Stress relief",
        image : img2,
       
    },
  
   ]
    return(
        <section className="Newandnoteworthy">
            <h1>Spa for men</h1>
            <p id="para">Curated massages by top therapists.</p>
            {arr.map((ele,i)=>{
                return (<div className="card">
                     <p>{ele.title}</p>
                    <img src={ele.image} alt="" />
                   
                </div>)
            })}
        </section>
    );
}

export default Spa2;