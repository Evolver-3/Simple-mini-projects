
import { useLocation, useNavigate } from "react-router-dom"

const Result=()=>{

  const {state} =useLocation();

  const score =state?.score ||0;

  const nav=useNavigate();
  return(
  <div className="container bg-gray-400  items-center p-10 w-full h-[100vh] ">

    <div className="flex flex-col items-center justify-center gap-10 bg-white rounded-lg px-10 py-5">
    <h2 className="text-orange-500 text-[30px] font-bold">Quiz Results</h2>
    <div className="bg-orange-100 w-auto py-10 px-10 rounded-lg">
      <p>Your Score is <span>{score}</span> out of <span>10</span></p>
    </div>
    <button className="bg-orange-500 text-white px-3 py-4 rounded-md hover:text-gray-400 hover:bg-orange-600" onClick={()=>nav("/")}>Restart Quiz</button>
    </div>

  </div>
)
}
export default Result