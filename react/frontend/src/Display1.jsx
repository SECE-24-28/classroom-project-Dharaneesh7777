import { useState } from "react";

function Display1(){
    const [myName, setMyName] = useState("hello");
    // var name = "demo";
    // console.log("disp1 comp", {name});
    console.log("im inside disp1",myName)
    // function changeName(d){
    //     var name = d;
    //     console.log("im inside the disp1", {name})
    // }
    
    return(
        <>
        <h1> Im From {myName}</h1>
        <button onClick={()=>{setMyName('not demo')}}> click</button>
        </>
    )
}
export default Display1;