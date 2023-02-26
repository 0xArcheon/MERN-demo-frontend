import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Employee from './pages/Employee';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}>
        </Route>
        <Route path="/view" element={<Employee />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
