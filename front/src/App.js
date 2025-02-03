import logo from './logo.svg';
import './App.css';
import {useState, useSyncExternalStore} from 'react'

const messsages = [
  {role:"user", content:"hi"},
  {role:"chatboot", content:"hool\la"},
  {role:"user", content:"booodkkd"},
  {role:"chatboot", content:"kkkkskskkskskskskkskskkss"}
]







const Message =({role, message}) =>{

  console.log(role,':',message)
  return (
    <div
      className={`   h-fit text-black bg-blue-500   p-2 rounded-md  items-center 
        ${
        role === "user" ? "mr-auto  flex flex-row " : "ml-auto  flex flex-row-reverse"
      } 
`}
    >
    <div className=" mx-1  text-sm bg-gray-600  rounded-lg px-1">{role}</div>
      <div>{message}</div>
    </div>
  );

}









function App() {
  const[input,setInput]=useState("")
  const[messages,setMessages]=useState(messsages)

   const submitPrompt= ()=>{
     messsages.push({role:"user",content:input})
     setInput("")
     console.log({messsages})
     setMessages([...messsages])


   }

   const handleInput = (event) =>{
    setInput(event.target.value)
   }


  return (
    <div className="h-screen flex w-screen  flex-col items-center ">
     <div className=' flex flex-col  w-3/4 h-4/5 bg-red-600'>
      {messages.map((e) =>{
        return(<Message  role={e.role} message={e.content}/>)
      })}
     </div>
     <div className='  flex justify-around items-center w-3/4 h-1/5 bg-blue-600'>
     <input type="text"  value={input}  onChange={(event) =>handleInput(event)}  className=" bg-gray-500 h-2/3 w-10/12 rounded "/>
     <button onClick={() => submitPrompt()} className="  p-2 rounded-lg right-4 border-2 border-black mr-5 "> Enter</button>
     </div>
    </div>
  );
}

export default App;
