import React, { useContext } from "react";
import Sidecontainer from "./Sidecontainer";
import Container1 from "./Container1";
import Updatetodo from "./Updatetodo";
import { globalVar } from "./GlobalContainer";

const Maincontainer =()=>{
           let {updatePanel}=useContext(globalVar)
    return(
        <div className="main">
          {   updatePanel &&   <Updatetodo/>}
            <Sidecontainer/>
            <Container1/>
        
        </div>
    )
}

export default Maincontainer;