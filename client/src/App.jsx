import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Chatbot />
      <Footer />
    </>
  );
}

export default App;
