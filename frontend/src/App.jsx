import React from 'react';
import './index.css';
import "./App.css";
import Home from "./components/Home";

function App() {

  return (
    <>
      <p className="text-3xl font-bold text-red-500 cursor-pointer">
        Inside App.jsx
      </p>
      <Home />
    </>
  );
}

export default App;
