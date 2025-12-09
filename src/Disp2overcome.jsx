import { useRef } from "react"
import { useState } from "react"

const Disp2overcome = () => {   
    const [name,setName]=useState("");
    const inputdata = useRef();
    const view =()=>{
        console.log("the data is....: ", inputdata.current?.value);
        setName(inputdata.current.value);
    }
    
    return (
        <>
            <h1>im from Disp2overcome{name}</h1>
            <input type="text" ref={inputdata} > </input>
            <button onClick={view}>Click</button>
        </>
    );
};
export default Disp2overcome;