import React from "react";
import img1 from "./assets/img1.webp";
import img2 from "./assets/img2.webp";
import img3 from "./assets/img3.webp";
import img4 from "./assets/img4.webp";
import img5 from "./assets/img5.webp";
const Mostbookedservice = () =>{
    let arr = [{
        image : img1,
        title : "Haircut for Men",
        rating : "4.89(499K)",
        price :"259",



    },
    {
        image : img2,
        title : "Sofa Cleaning",
        rating : "4.86(479K)",
        price :"549",

    },
    {
        image : img3,
        title : "Fully automatic washing machine check-up (top load)",
        rating : "4.82(275K)",
        price :"160",

    },
    {
        image : img4,
        title : "Swedish stress relief massage",
        rating : "4.84(153K)",
        price :"1,299",

    },
    {
        image : img5,
        title : "Water purifier service",
        rating : "4.83(143K)",
        price :"299",

    }]
    return(
        <section className="Newandnoteworthy">
            <h1>Most booked service </h1>
            {arr.map((ele,i)=>{
                return (<div className="card">
                    <img src={ele.image} alt="" />
                    <p>{ele.title}</p>
                    <p>{ele.rating}</p>
                    <p>{ele.price}</p>
                </div>)
            })}
        </section>
    );
}

export default Mostbookedservice;