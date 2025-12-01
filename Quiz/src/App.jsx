import {Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import "./index.css"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/" element={<></>}></Route>
    </Routes>
  
  )
}

export default App
