import { useState } from 'react'


function App() {
  const [color,setcolor] = useState("grey")

  return (
    <>

     <div className='w-full h-screen duration-200' style = {{backgroundColor:color}}>
      
     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-2 '>
      <div className=' flex  flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl'>
        <button className='outline-none px-4 py-1  rounded-3xl  text-white  shadow-lg' style={{backgroundColor:'red'}} 
        onClick={()=>setcolor("red")}> Red</button>
        <button className='outline-none px-4 py-1  rounded-3xl  text-white  shadow-lg' style={{backgroundColor:'green'}}
        onClick={()=>setcolor("green")}>  Green</button>
        <button className='outline-none px-4 py-1  rounded-3xl  text-white  shadow-lg' style={{backgroundColor:'blue'}}
        onClick={()=>setcolor("blue")}>  blue</button>
        <button className='outline-none px-4 py-1  rounded-3xl  text-white  shadow-lg' style={{backgroundColor:'yellow'}}
        onClick={()=>setcolor("yellow")}> Yellow</button>
        <button className='outline-none px-4 py-1  rounded-3xl  text-white  shadow-lg' style={{backgroundColor:'brown'}}
        onClick={()=>setcolor("brown")}> Brown</button>
        <button className='outline-none px-4 py-1  rounded-3xl  text-white  shadow-lg' style={{backgroundColor:'black'}}
        onClick={()=>setcolor("black")}> Black</button>
        <button className='outline-none px-4 py-1  rounded-3xl  text-white  shadow-lg' style={{backgroundColor:'olive'}}
        onClick={()=>setcolor("olive")}> Olive </button>
       
      </div>
     </div>
     </div>

     <button></button>

     </>
  )
}

export default App
