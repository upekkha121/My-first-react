import Button from "./components/button"
//usestate Hooks
import { useState } from "react";
// passing props


const user__data = {
  fname: "binary",
  lname: "Labs",
};

//usestate Hooks



function App() {

  const [count, setCount] = useState(0);
    
  const handleClick1 = () => {
      setCount(count + 1);
  };
  const handleClick2 = () => {
      setCount(count + 2);
  };

  return (
    <>
      <div className="w-screen h-screen">
       <div className="w-full h-full flex items-center justify-center flex-col gap-6">
        <h1 className='font-bold text-blue-400 text-center'>Increase or Decrease the number</h1>
        <div className="flex gap-3">
          <Button handleClick={handleClick1}  text="Click me" />
          {count}
          <Button handleClick={handleClick2}  text="Click Here" />
        </div>
        <div className="flex flex-col border border-blue-400 p-[40px] rounded-[4px] ">
          <h2 className="mb-[10px] font-bold  text-blue-400">User data</h2>
          <span>
            Firstname: <span className="font-bold">{user__data.fname}</span> 
          </span>
          <span>
            Lastname: <span className="font-bold">{user__data.lname}</span>
          </span>
        </div>

       </div>
      </div>

      
    </>
  )
}

export default App
