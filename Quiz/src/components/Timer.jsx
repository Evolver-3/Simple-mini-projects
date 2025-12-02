import {useState,useEffect} from "react"
const Timer=()=>{

  const [leftTime,setLeftTime]=useState(10);
  const [displayTime,setDisplayTime]=useState('')

 useEffect(()=>{
  let intervalId=setInterval(()=>{
    setLeftTime(p=>{
      if(p<=0){
        clearInterval(intervalId)
        return 0;
       }
       else{
        return p-1; 
       }
  })
  },1000)

  return()=>clearInterval(intervalId)

 },[])

 useEffect(()=>{
  let setTime=(`${Math.floor(leftTime/60).toString().padStart(2,"0")} : ${(leftTime%60).toString().padStart(2,"0")} sec`);

  setDisplayTime(setTime)

 },[leftTime])

  return(
  <div>
    🕗 Time left: {displayTime}
  </div>
)
}
export default Timer