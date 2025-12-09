import { useState } from "react"

const Display2 = () => {
    const [name, setName] = useState("");
    console.log("the data is....: ", name);
    return (
        <>
            <h1>im from Display2 {name}</h1>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={()=> {setName("")}}>Clear</button>
        </>
    );
};
export default Display2;