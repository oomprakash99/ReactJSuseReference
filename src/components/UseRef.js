import { useState,createRef,useRef } from "react"

function UseRef(){
    const [data2,updateData2]=useState({num:0})
    const [inputValue,updateValue]=useState("")

    const elem=createRef()
    const data=useRef(0)

    function handleRef(){
        data.current=data.current+1
        console.log(data)
    }
    function handleState(){
        updateData2({num:data2.num+1})
    }
    function handleFocus(){
        updateValue(elem.current.value)
    }
    return <div>
    <h1>UseRef</h1>
    <h3>Ref Value :{data.current}</h3>
    <button onClick={handleRef}>Click to Update Ref</button>
    <h3>State Value:{data2.num}</h3>
    <button onClick={handleState}>Click to Update State</button>
    <h3>{inputValue}</h3>
    <input onChange={handleFocus} placeholder="Enter a Username" ref={elem}/>
    </div>
}
export default UseRef;