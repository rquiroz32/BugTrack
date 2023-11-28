import React from "react";
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import LoginPage from "./pages/loginPage";
import { MainPage } from "./pages/MainPage";
import "./App.css"
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path='/main' element={<SearchBar/>}/>
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App