import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Update from "./pages/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/add" Component={Add} />
          <Route path="/update/:id" Component={Update} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
