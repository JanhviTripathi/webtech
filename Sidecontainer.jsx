import React from "react";
import { IoToday } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsCalendar3WeekFill } from "react-icons/bs";
import { MdOutlinePersonalInjury } from "react-icons/md";
const Sidecontainer =()=>{
    return(
        <div className="side">
        <ul>
            <li><FaHome />Home</li>
            <li><IoToday />Today</li>
            <li><BsCalendar3WeekFill />This week</li>
            <li><MdWork />Work</li>
            <li><MdOutlinePersonalInjury />Personal</li>
            <li><button>LOGOUT</button></li>
        </ul>
        </div>
    )
}

export default Sidecontainer;