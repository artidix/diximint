import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./Main";
import { About } from "./About";

function App() {
  return (
    <div>
      <header>
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
