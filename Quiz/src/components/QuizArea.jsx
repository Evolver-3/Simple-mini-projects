const QuizArea=()=>{
  return(
  <div  className="container bg-gray-400 items-center p-10  w-full h-[100vh]">
    <div className="flex flex-col items-center justify-center gap-10 bg-white rounded-lg px-10 py-5">
      <p className="text-[20px] font-bold ">Question</p>

      <div className="flex justify-between w-full text-sm text-gray-500">
      <p>Question <span> 4 </span> of <span> 5 </span></p>

      <p>Score: <span>2</span></p>
      </div>

      <div className="w-full">
         <div className="w-full bg-orange-300 h-auto text-white rounded-lg px-2">heool</div>
      </div>

    </div>

  </div>
)
}
export default QuizArea