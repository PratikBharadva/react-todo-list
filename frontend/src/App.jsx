import React from 'react';
import './index.css';
import "./App.css";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./components/Home";
import Register from './components/Register';
import Login from './components/Login';

const router = createBrowserRouter([
  {path:"/register", element:<Register/>},
  {path:"/login", element:<Login/>},
  {path:"/", element:<Home/>},
]);
function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      {/* <p className="text-3xl font-bold text-red-500 cursor-pointer">
        Inside App.jsx
      </p> */}
      {/* <Home /> */}
    </>
  );
}

export default App;
