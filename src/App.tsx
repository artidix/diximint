import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./Main";
import { About } from "./About";
import SimpleSnackbar from './SimpleSnackbar';

function App() {
  return (
    <div>
      <header>
      </header>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

      <SimpleSnackbar />
    </div>
  );
}

export default App;
