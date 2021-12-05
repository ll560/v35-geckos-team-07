import React from "react";
import About from "./Components/About";
import Developers from "./Components/Developers";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Horoscope from './Components/Horoscope';
import "./App.css";



class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {horoscope: ""};
  this.state ={sign:""};
}
  setHoroscopeCallback =(data) =>{
    console.log("this "+ JSON.stringify(data))
    this.setState({
      horoscope: data,  
    });
  }

  setSignCallback = (sign) => {
    console.log("NEW sign" + JSON.stringify(sign))
    
    this.setState({
      sign: sign,
    });
  }
  

  render () {
    return (
    <div className="page-container">
      <header>
        <Header />
      </header>
      <main>
        <Home setHoroscopeCallback={this.setHoroscopeCallback} setSignCallback={this.setSignCallback}/>
        <Horoscope data={this.state.horoscope} sign={this.state.sign}></Horoscope>
        
        
        <About />
        <Developers />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
}

export default App;
