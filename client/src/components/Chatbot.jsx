import { useState } from "react";
import axios from "axios";

const API_KEY = "AIzaSyBsuJILcg6aMMN7tHDvUdHgXVPyOINkfYs"; // Replace with your Gemini API Key
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const sendMessage = async () => {
    if (!userInput && !image) return;

    setLoading(true); // Start loading indicator
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
          handleResponse(response, newMessages);
          setImage(null);
        };
      } else {
        const response = await axios.post(API_URL, formData);
        handleResponse(response, newMessages);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...messages,
        { sender: "AgriBot", text: "Oops! Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  const handleResponse = (response, newMessages) => {
    const reply = response.data.candidates[0].content.parts[0].text;

    // Format response: Replace *** with bold text and add structure
    const formattedReply = reply
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") 
      .replace(/\*(.*?)\*/g, "<strong>$1</strong>") // Replace **text** with <strong>text</strong>
      .split("\n") // Split by lines for better structuring
      .map((line) => `<p>${line}</p>`) // Wrap each line in a paragraph
      .join("");

    const structuredReply = `
      <div>
        <h3 class="font-bold text-green-700">🌱 AgriBot Response:</h3>
        ${formattedReply}
      </div>
    `;

    setMessages([...newMessages, { sender: "AgriBot", text: structuredReply }]);
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition"
        onClick={toggleChat}
      >
        🌿 Chat
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-16 right-4 bg-white shadow-lg border border-gray-300 rounded-lg p-4 transition-all duration-300 ease-in-out 
                    ${isMaximized ? "w-[700px] h-[700px]" : "w-80 h-[400px]"}`}
          style={{
            maxHeight: isMaximized ? "80vh" : "60vh",
            top: isMaximized ? "10vh" : "auto",
          }}
        >
          {/* Chat Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-green-700">AgriBot 🌱</h2>
            <div>
              <button
                className="text-gray-500 hover:text-green-500 ml-2"
                onClick={() => setIsMaximized(!isMaximized)}
              >
                {isMaximized ? "🔽 Minimize" : "🔼 Maximize"}
              </button>
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
            className="flex-grow overflow-y-auto border-b mb-2 p-2 bg-green-50 rounded-md"
            style={{
              height: isMaximized ? "calc(100% - 140px)" : "calc(100% - 110px)",
              maxHeight: isMaximized ? "500px" : "250px",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${msg.sender === "User" ? "text-right" : "text-left"}`}
                dangerouslySetInnerHTML={{
                  __html: `<span class="px-3 py-1 rounded-lg inline-block ${
                    msg.sender === "User"
                      ? "bg-green-500 text-white"
                      : "bg-green-700 text-white"
                  }"><strong>${msg.sender}:</strong> ${msg.text}</span>`,
                }}
              />
            ))}
            {loading && (
              <div className="text-center mt-4">
                <p className="text-green-600 font-bold">Loading...</p>
              </div>
            )}
          </div>

          {/* Input & Upload Section */}
          <div className="flex flex-col gap-2 mt-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask AgriBot..."
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={sendMessage}
              className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
              disabled={loading}
            >
              {loading ? "Processing..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
