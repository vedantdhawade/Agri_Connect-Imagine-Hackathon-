import { useState } from "react";
import axios from "axios";

const API_KEY = "AIzaSyBsuJILcg6aMMN7tHDvUdHgXVPyOINkfYs"; // Replace with your Gemini API Key
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

const Consult = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const sendMessage = async () => {
    if (!userInput && !image) return;

    setLoading(true);
    const newMessages = [...messages, { sender: "User", text: userInput }];
    setMessages(newMessages);

    try {
      let formData = {
        contents: [{ role: "user", parts: [{ text: userInput }] }],
      };

      if (image) {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = async () => {
          const base64Image = reader.result.split(",")[1];
          formData.contents[0].parts.push({
            inlineData: { mimeType: image.type, data: base64Image },
          });

          const response = await axios.post(API_URL, formData);
          const reply = response.data.candidates[0].content.parts[0].text;

          setMessages([...newMessages, { sender: "LeafBot", text: reply }]);
          setUserInput("");
          setImage(null);
          setLoading(false);
        };
      } else {
        const response = await axios.post(API_URL, formData);
        const reply = response.data.candidates[0].content.parts[0].text;

        setMessages([...newMessages, { sender: "LeafBot", text: reply }]);
        setUserInput("");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-300">
          <h2 className="text-xl font-bold text-black text-center">LeafBot</h2>
        </div>

        {/* Chat Messages */}
        <div className="overflow-y-auto p-4" style={{ height: "400px" }}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.sender === "User" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`px-3 py-1 rounded-lg inline-block ${
                  msg.sender === "User"
                    ? "bg-blue-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                <strong>{msg.sender}: </strong>
                {msg.text}
              </span>
            </div>
          ))}
          {loading && <p className="text-gray-500">Loading...</p>}
        </div>

        {/* Input & Upload */}
        <div className="p-4 border-t border-gray-300">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border rounded mb-2"
          />
          <button
            onClick={sendMessage}
            className="w-full bg-gray-400 text-black font-bold p-2 rounded hover:bg-white hover:text-black hover:border hover:border-black transition duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consult;
