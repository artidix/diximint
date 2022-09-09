import React from 'react';
import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./Main";
import { About } from "./About";

function App() {
  return (
    <div>
      <header>
        <Button variant="contained">Just Web3 it!</Button>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
