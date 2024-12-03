import React from "react";
import img1 from "./assets/footer1.webp";
import img2 from "./assets/footer2.webp";
import img3 from "./assets/footer3.webp";
const Footer=()=>{
    return(
        <section className="Footer">
            <div>
            <img src={img3} alt="" className="mainimg"/>
            </div>
            <ul>
                <li><h2>Company</h2></li>
                <li>About Us</li>
                <li>Terms & conditions</li>
                <li>Privacy policy</li>
                <li>Anti-discrimination policy</li>
                <li>UC impact</li>
                <li>Careers</li>
            </ul>
            <ul>
                <li><h2>For customers</h2></li>
                <li>UC reviews</li>
                <li>Categories near you</li>
                <li>Blog</li>
                <li>Contact us</li>
            </ul>
            <ul>
                <li><h2>For Partners</h2></li>
                <li>Register as a professional </li>
            </ul>
            <ul>
                <li><h2>Social links</h2></li>
                <li><img src={img1} alt="" /></li>
                <li><img src={img2} alt="" /></li>
            </ul>
        </section>
    )
}

export default Footer;