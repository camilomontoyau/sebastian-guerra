import {useState, useEffect} from "react"

function App() {
  const [input, setInput] = useState({string:""})
  const [messages,setMessages] = useState([])

  useEffect(() => {
    
    fetch("http://localhost:3001/")
    .then(res => res.json())
    .then(res => {
      console.log(res, "hola")
      setMessages(res)
    })
    .catch(err => console.error(err))
  },[])

  function handleInputChange(e){
    e.preventDefault();
    setInput({string:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(input)
    fetch("http://localhost:3001/string",{
      method: "POST",
      body: JSON.stringify(input),
      //body: input,
      headers: {
        "Content-Type": 'application/json'
      }
    }).then(res => res.json())
    .then(result => {
      console.log(result, "result")
      setMessages(result)
    })
    alert("mensaje enviado correctamente")
    
    setInput({string:""})
    e.target.reset()
  }


  return (
    <div >
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input type="text" name = "string" placeholder="...String" onChange = {(e) => handleInputChange(e)}></input>
          <button type="submit">Send</button>
        </div>
        <div>
          {messages && messages.map((m,index) => {
            return <h2 key = {index}>{m}</h2>
          })}
        </div>
      </form>
      
    </div>
  );
}

export default App;
