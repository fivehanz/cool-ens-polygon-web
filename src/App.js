import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/App.scss";
// import twitterLogo from "./assets/twitter-logo.svg";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />

        <main>Heyyy, wassup?</main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
