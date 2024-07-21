import { useState, useCallback, useEffect, useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacter] = useState(false);
  const [password, setPassword] = useState("")

  // useCallback() is a React Hook (useState is also a hook) that lets you cache a function definition between re-renders. 
  //syntax: useCallback(function, dependencies)
  //useref hook:

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    
    if(numberAllowed){
      str += "0123456789"
    }

    if(characterAllowed){
      str += "!@#$%^&*{}[]~"
    }

    // we are using this for loop to randomly generate the password and storing it in the pass variable.

    for (let i = 1; i <= length; i++) {
      // the char variable will generate a number from range 1 to the length of the array. 
      // so the char variable basically gives you a random index from the array str.
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])


  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,10);
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect( () => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])
  


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-20 text-white bg-gray-700">
        <h1 className="text-center mb-7 mt-5 text-white text-2xl">Password Generator</h1>
        
      <div className="flex shadow rounded-lg overflow-hidden mb-10">
        <input type="text" 
        value={password} 
        className="outline-none w-full py-1 px-3 text-black"
        placeholder="Password"
        readOnly
        ref={passwordRef}/>
        
        <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-500 text-white px-8 py-3 text-lg hover:bg-blue-800 ">Copy</button>

      </div>

      <div className="flex text-sm gap-x-2 ">
        <div className="flex items-center gap-x-1">

          <input type="range"
          min = {8}
          max = {30}
          value = {length}
          className="cursor-pointer"
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label >Length: {length}</label>

        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked = {numberAllowed} 
          id = "numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}/>
          <label>Numbers</label>


        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked = {characterAllowed} 
          id = "characterInput"
          onChange={() => {
            setCharacter((prev) => !prev)
          }}/>
          <label>Characters</label>


        </div>
      </div>
      
      </div>
    </>
  )
}

export default App
