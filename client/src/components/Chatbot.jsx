import { useState } from "react";
import axios from "axios";

const API_KEY = "AIzaSyBsuJILcg6aMMN7tHDvUdHgXVPyOINkfYs"; // Replace with your Gemini API Key
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [userInput, setUserInput] = useState(
    "Rate this image at a scale of 1 to 10 and give me the crop health give score only as output only integer as output"
  );
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

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
          console.log(reply);
          setMessages([...newMessages, { sender: "LeafBot", text: reply }]);

          setImage(null);
          setLoading(false);
        };
      } else {
        const response = await axios.post(API_URL, formData);
        const reply = response.data.candidates[0].content.parts[0].text;

        setMessages([...newMessages, { sender: "Gemini", text: reply }]);

        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
        onClick={toggleChat}
      >
        💬 Chat
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-16 right-4 bg-white shadow-lg border border-gray-300 rounded-lg p-4 transition-all duration-300 ease-in-out 
                    ${isMaximized ? "w-[600px] h-[700px]" : "w-80 h-[400px]"}`}
        >
          {/* Chat Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-blue-600">LeafBot</h2>
            <div>
              {/* Maximize Button */}
              <button
                className="text-gray-500 hover:text-blue-500 ml-2"
                onClick={() => setIsMaximized(!isMaximized)}
              >
                {isMaximized ? "🔽 Minimize" : "🔼 Maximize"}
              </button>

              {/* Close Button */}
              <button
                className="text-gray-500 hover:text-red-500 ml-2"
                onClick={toggleChat}
              >
                ✖
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div
            className="overflow-y-auto border-b mb-2 p-2"
            style={{ height: isMaximized ? "500px" : "250px" }}
          >
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
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
