const Result=()=>{
  return(
  <div className="bg-white">
    <h2 className="text-orange-500 text-[30px] font-bold">Quiz Results</h2>
    <div className="bg-orange-100 w-40  ">
      <p>Your Score is <span>1</span> out of <span>4</span></p>
    </div>
    <button className="bg-orange-500 text-white px-3 py-4 rounded-md hover:text-gray-400 hover:bg-orange-600">Restart Quiz</button>
  </div>
)
}
export default Result