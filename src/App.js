import React from "react";
import About from "./Components/About";
import Developers from "./Components/Developers";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Horoscope from "./Components/Horoscope";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {horoscope: ""};
    this.state ={sign:""};
  
  }
  
    

    setHoroscopeCallback =(data) =>{
      console.log("this"+ JSON.stringify(data))
      this.setState({
        horoscope: data,  
      });
    }
    setSignCallback = (sign) => {
      console.log("Sign date on App.js: " + JSON.stringify(sign))
      this.setState({
        sign: sign,
      });
    }
  
  render(){
  return (
    <Router>
      <div className="page-container">
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/v35-geckos-team-07" element={<Home setHoroscopeCallback={this.setHoroscopeCallback} setSignCallback={this.setSignCallback}/>}/>
            <Route path="/horoscope" element={<Horoscope data={this.state.horoscope} sign={this.state.sign} />}/>
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Developers />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );

}
}


export default App;
