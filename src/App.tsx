import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Sheets from "./pages/Sheets/Sheets";
import Transitions from "./pages/Transitions/Transitions";
import UserPage from "./pages/UserPage/UserPage";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/navBar";
import { Container } from '@mui/material'; // Importe componentes do MUI

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sheets" element={<Sheets />} />
          <Route path="/transitions" element={<Transitions />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;