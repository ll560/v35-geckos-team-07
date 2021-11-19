import React from "react";
import About from "./Components/About";
import Developers from "./Components/Developers";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Horoscope from './Components/Horoscope';
//import Aztro from './Components/Aztro'
import "./App.css";

class App extends React.Component {

  render () {
    return (
    <div className="page-container">
      <header>
        <Header />
      </header>
      <main>
        <Home/>
        <Horoscope/>
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
