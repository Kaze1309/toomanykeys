import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {LandingPage} from "./Pages/LandingPage";
import './index.css'
import { Hundred } from "./Pages/Hundred"
import { TwentyFive} from "./Pages/TwentyFive"
import { Fifty } from "./Pages/Fifty"
import { Ten } from "./Pages/Ten"
export function App(){
  return(

    <>
    <Router>
      <Routes>

        <Route path="/" element={<LandingPage/>}/>
        <Route path="/tt10" element={<Ten/>}/>
        <Route path="/tt25" element={<TwentyFive/>}/>
        <Route path="/tt50" element={<Fifty/>}/>
        <Route path="/tt100" element={<Hundred/>}/>

      </Routes>
    </Router>
    <div className="footer">
      <h2>Designed By Sameer P.</h2>
    </div>
    </>

  )
}

export default App;
