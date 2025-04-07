import "./App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"

import Footer from "./components/footer/Footer"
import Header from "./components/navbar/Header"


const App = () => {
  return (
    <div>

      <Router>

       

        <Header />

        
        <Routes>
          <Route path="/" element={< Home />} />
     

        </Routes>

        <Footer />

      </Router>


    
    </div>
  )
}

export default App
