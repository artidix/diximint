import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { Main } from "./Main";
import { About } from "./About";
import { Navbar } from "./Navbar";
import { Auth } from "./features/auth/Auth";


function App() {
  return (
    <Box>
      <Auth />

      <header>
        <Navbar />
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
