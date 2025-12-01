const Home=()=>{
  return(
  <div className="container bg-gray-400  items-center p-10 w-full h-[100vh]">

    <div className="flex flex-col items-center justify-center gap-10 bg-white rounded-lg px-10 py-5">
    <h2 className="text-orange-500 text-[30px] font-bold">Quiz Time!</h2>
    <p>Test Your Knowlege with the simple Questions</p>

    <button className="bg-orange-500 text-white px-3 py-4 rounded-md hover:text-gray-400 hover:bg-orange-600">Start Quiz</button>
    </div>
    
  </div>
  )

}
export default Home