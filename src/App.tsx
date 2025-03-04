import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing.tsx"



const App: React.FC = ()=>{
  return(
    <Router basename="/Twm-deploy">
      <Routes>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </Router>
  )
}
export default App;
