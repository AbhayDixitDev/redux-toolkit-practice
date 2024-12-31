import { useSelector,useDispatch } from "react-redux"

import { increment,decrement } from "./counterSlice"


const App=()=>{

  const count = useSelector(state=>state.count)
  const dispatch = useDispatch()
  return (
    <div style={{display:"flex",gap:"10px",alignItems:"center",justifyContent:"center",height:"100vh"}}>
      <button onClick={()=>dispatch(decrement())}>-</button>
      {count}
      <button onClick={()=>dispatch(increment())}>+</button>
    </div>
  )
}

export default App