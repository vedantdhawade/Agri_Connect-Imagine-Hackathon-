import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

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
