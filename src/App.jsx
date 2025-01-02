import { useSelector,useDispatch } from "react-redux"
import { useState } from "react"
import { increment,decrement } from "./counterSlice"
import { bgcolorChange } from "./colorSlice"


const App=()=>{
  const [color,setColor]=useState("red")
  const count = useSelector(state=>state.count)
  const bgcolor = useSelector(state=>state.color.bgcolor)
  const dispatch = useDispatch()
  return (
    
    <div style={{display:"flex",gap:"10px",alignItems:"center",justifyContent:"center",height:"100vh"}}>
      

    <div style={{width:"300px",height:"400px",background:bgcolor}}>
    <h1>Color Change using redux</h1>
    <input type="text" value={color} onChange={(e)=>setColor(e.target.value)}/>
    <button onClick={()=>dispatch(bgcolorChange({clr:color}))}>Color Change</button>

    </div>

         <br /> <br />

      
      <button onClick={()=>dispatch(decrement())}>-</button>
      {count}
      <button onClick={()=>dispatch(increment())}>+</button>
    </div>

  )
}

export default App