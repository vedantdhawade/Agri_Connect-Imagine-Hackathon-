import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Chatbot/>
    </>
  );
}

export default App;
