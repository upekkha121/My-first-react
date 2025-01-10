import Button from "./components/button";
import bulbOff from "./assets/images/bulbOff-removebg-preview.png";


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
  // const [bulb, setBulb] = useState(0);
    
  const increaseCount = () => {
      setCount(count + 1);
  };

  const decreaseCount = () => {
    if(count > 0){
      setCount(count - 1);
    }
  };

  const switchToggle = () =>{

  };

  return (
    <>
      <div className="w-screen h-screen">
       <div className="w-full h-full flex items-center justify-center flex-col gap-6">
        <h1 className='font-bold text-blue-400 text-center'>Increase or Decrease the number</h1>
        <div className="flex gap-3">
          <Button handleClick={increaseCount}  text="Increase Count" />
          {count}
          <Button handleClick={decreaseCount}  text="Decrease Count" />
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

        <div className="flex flex-col border border-blue-400 p-[40px] rounded-[4px] ">
          <div className="flex justify-center flex-col gap-3 items-center p-[30px]">
            <img className="w-[100px] h-[auto]" src={bulbOff} alt="" />
            <Button handleClick={switchToggle} text="Switch on the light" />
          </div>
        </div>

       </div>
      </div>

      
    </>
  )
}

export default App
