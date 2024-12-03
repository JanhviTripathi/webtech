import React from "react";
import img1 from "./assets/1708420872681-c2f387.webp";
import img2 from "./assets/1687428458328-9e147d.webp";
import img3 from "./assets/1723808286533-2d276b.webp";
import img4 from "./assets/1651040407144-95eb6e.webp";
import img5 from "./assets/1651040420198-fe6d1d.webp";
const Newandnoteworthy = () =>{
    let arr = [{
        image : img1,
        title : "Wall Panels",
    },
    {
        image : img2,
        title : "Native Water Purifier",
    },
    {
        image : img3,
        title : "Native Smart Locks",
    },
    {
        image : img4,
        title : "Spa Ayurveda",
    },
    {
        image : img5,
        title : "Hair Studio for women",
    }]
    return(
        <section className="Newandnoteworthy">
            <h1>New and noteworthy</h1>
            {arr.map((ele,i)=>{
                return (<div className="card">
                    <img src={ele.image} alt="" />
                    <p>{ele.title}</p>
                </div>)
            })}
        </section>
    );
}

export default Newandnoteworthy;