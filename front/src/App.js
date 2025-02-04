import axios from 'axios'
import './App.css';
import { useEffect, useState} from 'react'

const messsages = [];





const Message =({role, message, index}) =>{
  const[messi, setMessi] = useState('')
  useEffect (()=>{
    if( role === 'AI' && index == messsages.length -1 )
    [...message].map((e,index) =>{
        setTimeout(() =>{
        setMessi(message.substr(0,index+1))
      },50*index)
    })
    else 
      setMessi(message)
  },[]);
  

  return (
    <div
      className={`  mx-2 h-fit text-black bg-gray-400 my-2 max-w-[500px]  p-2 rounded-md   
        ${
          role === "user"
            ? "ml-auto  flex flex-row-reverse "
            : "mr-auto  flex flex-row"
        } 
`}
    >
      <div className=" mx-1 h-fit text-sm bg-gray-700  rounded-lg px-1">{role}</div>
      <div>{messi}</div>
    </div>
  );

}



 function  App() {
  const[input,setInput]=useState("")
  const[messages,setMessages]=useState(messsages)
  const[blockSubmitButton,setSubmitButton]=useState(false)

   const submitPrompt= async ()=>{
    if(blockSubmitButton) 
      return

    setSubmitButton(true)
    messsages.push({role:"user",content:input})
    setMessages([...messsages])
    setInput("")
    try{

      const response = await axios.post("http://127.0.0.1:5001/ask", { content: input });
         messsages.push({role:"AI",content:response.data})
    }catch(e){
      messsages.push({role:"AI",content:"error"})
    }

    setMessages([...messsages])
    setSubmitButton(false)

   }

   const handleInput = (event) =>{

    setInput(event.target.value)
   }


  return (
    <div className="h-screen flex w-screen  flex-col items-center  ">
      <div className="h-2/10 w-3/4  flex justify-center items-center ">
        Ask Anything
      </div>
      <div className=" flex flex-col  gap-3 w-3/4 h-4/5 bg-gray-800 overflow-y-auto rounded-xl shadow-lg shadow-black ">
        {messages.map((e, index) => {
          return <Message role={e.role} message={e.content} index={index} />;
        })}
      </div>
      <div className="  flex  items-center w-3/4 h-1/5 gap-1 ">
        <input
          type="text"
          placeholder="Click here, then press down Enter ."
          value={input}
          onKeyDown={(e) => {
            if (e.key === "Enter")  submitPrompt(e);
          }}
          onChange={(e) => handleInput(e)}
          className=" bg-gray-400 h-2/3 w-11/12 rounded-lg border-4  "
        />
        <div className="flex item-center bg-gray-400 h-2/3 w-1/12 rounded-lg border-4">
          <button
            onClick={() => submitPrompt()}
            className=" p-4 rounded-lg right-4 bg-gray-400 "
          >
            {" "}
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}


export default App;