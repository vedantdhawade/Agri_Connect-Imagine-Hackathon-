import React, { useState } from "react";
import axios from "axios";

const API_KEY = "AIzaSyBsuJILcg6aMMN7tHDvUdHgXVPyOINkfYs"; // Replace with your Gemini API Key
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

const CropCondition = () => {
  const [score, setScore] = useState(0);
  const [userInput, setUserInput] = useState(
    "Rate this image at a scale of 1 to 10 and give me the crop health score only as output (integer)."
  );
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
          setScore(reply);
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

  // Determine image based on crop condition score
  let conditionImage = "";
  if (score <= 3) {
    conditionImage =
      "https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Sad-Face-Emoji.png";
  } else if (score <= 6) {
    conditionImage =
      "https://i3.cpcache.com/merchandise/110709047/203_300x300_Front_Color-NA.jpg?Size=NA&AttributeValue=NA&c=True&region={%22name%22:%22FrontCenter%22,%22width%22:4.66,%22height%22:4.66,%22alignment%22:%22MiddleCenter%22,%22orientation%22:0,%22dpi%22:150,%22crop_x%22:0,%22crop_y%22:0,%22crop_h%22:520,%22crop_w%22:520,%22scale%22:0.26,%22template%22:{%22id%22:110709047,%22params%22:{}}}&cid=PUartJBjiF%2Fyg4FdKqiggQ%3D%3D+%7C%7C+%2FiDquUmsEmvZnjmsNwceUA%3D%3D&ProductNo=100535127%20&thumbs=1&Filters=[{%22name%22:%22background%22,%22value%22:%22ddddde%22,%22sequence%22:2}]";
  } else {
    conditionImage =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgFjrG_0zAzNLWLo6OULuFynY2haCp9RgrQ&s";
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Form Container */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
        <div className="text-center mb-4">
          <img
            src="https://media.istockphoto.com/id/965148388/photo/green-ripening-soybean-field-agricultural-landscape.jpg?s=612x612&w=0&k=20&c=cEVP3uj34-5obt-Jf_WI3O9qfP6tVrFaQIv1rBvvpzc=" // Replace with your image URL
            alt="Crop Image"
            className="rounded-lg shadow-md w-full"
          />
        </div>
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          Crop Health Evaluation
        </h2>

        {/* File Input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        {/* Submit Button */}
        <button
          onClick={sendMessage}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>

      {/* Crop Condition Score and Result */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          Crop Condition Result
        </h2>
        <div className="text-center mb-4">
          <img
            src={conditionImage}
            alt={`Crop Condition ${score}`}
            className="rounded-lg shadow-md w-full"
          />
        </div>
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-2">
          {`Crop Condition: ${score}`}
        </h1>
        <p className="text-center text-lg text-gray-600">
          {score <= 3
            ? "The crop is in poor condition. Immediate attention is required."
            : score <= 6
            ? "The crop condition is average. Some improvement is needed."
            : "The crop is in good condition. Keep up the good work!"}
        </p>
      </div>
    </div>
  );
};

export default CropCondition;
