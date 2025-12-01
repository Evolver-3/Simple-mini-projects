import {Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Result from "./components/Result";
import "./index.css"
import QuizArea from "./components/QuizArea";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Result" element={<Result/>}></Route>
      <Route path="/Area" element={<QuizArea/>}></Route>
    </Routes>
  
  )
}

export default App
