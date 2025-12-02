import { useState } from "react";
import Timer from "./Timer";
import ques from './ques.json'
import { useNavigate } from "react-router-dom";
const QuizArea=()=>{

  const [currentIndex,setIndex]=useState(0);
  const [score,setScore]=useState(0);
  const navigate=useNavigate();

  const handleClick=(selected)=>{
    if(selected===ques[currentIndex].answer){
      setScore(prev=>prev+1)
    }

    if(currentIndex<ques.length-1){
      setIndex(prev=>prev+1)
    }else{
      navigate("/Result",{state:{score}})
    }
    
  }

  return(
  <div  className="container bg-gray-400 items-center p-10  w-full h-[100vh]">
    <div className="flex flex-col items-center justify-center gap-10 bg-white rounded-lg px-10 py-5">
      {ques[currentIndex].question}

      <span><Timer/></span>

      <div className="flex justify-between w-full text-sm text-gray-500">
      <p>Question <span>{(currentIndex+1)}</span> of <span>{(ques.length)}</span></p>

      <p>Score: <span>{(score)}</span></p>
      </div>

      <div className="w-full">
         <div className="w-full  h-auto text-white rounded-lg px-2 flex flex-col gap-2">
          {ques[currentIndex].options.map((option)=>{
            return <button key= {option}className="bg-orange-300 rounded-lg text-gray-600 hover:bg-orange-400 hover:text-black" onClick={()=>{
              handleClick(option)
            }}> {option}</button>
          })}
         </div>
      </div>

    </div>

  </div>
)
}
export default QuizArea