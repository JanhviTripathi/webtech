import React from "react";
import img1 from "./assets/spa1.webp";
import img2 from "./assets/spa2.webp";
import img3 from "./assets/spa3.webp";

const Spa = () =>{
    let arr = [{
        title : "Stress relief",
        image : img1,
        
    },
    {
        title : "Pain relief",
        image : img2,
       
    },
    {
        title : "Natural Skincare",
        image : img3,
        
    },
   ]
    return(
        <section className="Newandnoteworthy">
            <h1>Spa for women</h1>
            <p id="para">Refresh. Rewind. Rejuvenate.</p>
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