import { useEffect, useState } from "react"


const Incre1=()=>{
    const [data,setData]=useState(0)
    useEffect(()=>
    console.log("Hello",{data})
    )

return(
    <>
        <h1>im from disp4</h1>
        <h1>{data}</h1>
        <button onClick={()=>{setData(data+5)}}>Click me</button>
    </>
)
}
export default Incre1;