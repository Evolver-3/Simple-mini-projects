import {useState,useEffect} from "react"
const Timer=()=>{

  const [leftTime,setLeftTime]=useState(10);

 useEffect(()=>{
   let intervalId=setInterval(()=>{
     setLeftTime(p=>{
      if(p<=0){
        clearInterval(intervalId);
        return 0;
      }else{
        return p-1;
      }
   })
  },1000)

  return()=>
  clearInterval(intervalId)
 },[])

  return(
  <div>
    🕗 Time left: {leftTime}
  </div>
)
}
export default Timer