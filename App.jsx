import React from "react";
import Nav from "./Nav";
import Maincontainer from "./Maincontainer";
import GlobalContainer from "./GlobalContainer";
import Updatetodo from "./Updatetodo";
// import Updatetodo from "./Updatetodo";

const App = ()=>{
    return(
        <GlobalContainer>
        <section className="webpage">
        
            <Nav></Nav>
            <Maincontainer/>
        </section>
        {/* <Updatetodo/> */}
        </GlobalContainer>
    )
}

export default App;