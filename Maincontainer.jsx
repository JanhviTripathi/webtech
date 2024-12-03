import React from "react";
import img1 from "./assets/1658402794135-faf080.webp";
import img2 from "./assets/1674120935535-f8d5c8.webp";
import img3 from "./assets/1678864013225-bfc1de.webp";
import img4 from "./assets/1679292077307-6143d7.webp";
import img5 from "./assets/1681711961404-75dfec.webp";
import img6 from "./assets/1710241114433-5cfa7c.webp";
import img7 from "./assets/1705340729734-0a23f7.webp";
import img8 from "./assets/1724138391296-c1780b.webp";
import img9 from "./assets/1696852847761-574450.webp";

const Maincontainer = () => {
    let arr = [{
        image: img3,
        title : "Women's Salon & Spa"
    },
    {
        image: img6,
        title : "Men's Salon & Massage"
    },
    {
        image: img4,
        title : "AC & Application Repair"
    },
    {
        image: img5,
        title : "Cleaning & Pest Control"
    },
    {
        image: img1,
        title : "Electrical , plumber & Carpenter"
    },
    {
        image: img7,
        title : "Native Water Purifier"
    },
    {
        text : "Room/walls Painting",
        image: img2,
       
    },
    {
        text:"Wall Panel",
        image: img8,

    }]
    return (
        <section>

            <div className="box1">
                <h2>Home services at your doorstep</h2>
                <div className="look">
                    <h2>What are you looking for?</h2>
                    {arr.map((ele, i) => {
                      return(  <div className="b" id={`b${i + 1}`}>
                            <p>{ele.text}</p>
                            <img src={ele.image} alt="" />
                            <p>{ele.title}</p>
                        </div>
                     
                      )
                  
                    })}
                </div>
                {/* <div>
                    <div></div>
                    <div></div>
                </div> */}
            </div>   
            <div className="box2">
                <img src={img9} alt="" />
            </div>


        </section>
            )
}

 export default Maincontainer;