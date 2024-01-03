import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";

function App() {
  return (
    <BrowserRouter>
      <div data-testid="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
