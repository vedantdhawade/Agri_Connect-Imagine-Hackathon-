import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import { UserProvider } from "./store/auth";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <UserProvider>
        <ToastContainer />
        <Navbar />
        <Outlet />
        <Chatbot />
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
