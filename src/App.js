import React from "react"
import Navbar from "./compoent/Navbar"
import Home from "./compoent/Home"
import Footer from "./compoent/Footer"
import Contacto from "./compoent/Contacto"
import Menu from "./compoent/Menu"
import WhatsAppButton from "./compoent/WhatsAppButton"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MiniFooter from "./compoent/MiniFooter"

//npm install react-router-dom@5

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Switch>
          <Route path='/' compoent={Home} exact>
            <Home />
          </Route>
          <Route path='/Contacto' compoent={Contacto} exact>
            <Contacto />
          </Route>
          <Route path='/Menu' compoent={Menu} exact>
            <Menu />
          </Route>
           
        </Switch>
        <WhatsAppButton/>
      
        <Footer/>
        <MiniFooter/>
      </Router>
    
    </>
  )
}

export default App
