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
      "https://img.freepik.com/premium-photo/cartoon-character-with-plant-pot-with-sad-face_579873-3909.jpg";
  } else if (score <= 6) {
    conditionImage =
      "https://masterpiecer-images.s3.yandex.net/605fbb636e3411ee965c2aacdc0146ad:upscaled";
  } else {
    conditionImage =
      "https://t3.ftcdn.net/jpg/09/87/91/02/360_F_987910272_7v4Ugfnp51Xy3yyH7s57EbR1VZX8ONqg.jpg";
  }

  return (
    <div className="bg-green-50 min-h-screen p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Form Container */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
        <div className="text-center mb-4">
          <img
            src="https://media.istockphoto.com/id/965148388/photo/green-ripening-soybean-field-agricultural-landscape.jpg?s=612x612&w=0&k=20&c=cEVP3uj34-5obt-Jf_WI3O9qfP6tVrFaQIv1rBvvpzc=" // Replace with your image URL
            alt="Crop Image"
            className="rounded-lg shadow-md w-full"
          />
        </div>
        <h2 className="text-xl font-bold text-center text-green-700 mb-4">
          Crop Health Evaluation
        </h2>

        {/* File Input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-3 border-2 border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Submit Button */}
        <button
          onClick={sendMessage}
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>

      {/* Crop Condition Score and Result */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
        <h2 className="text-xl font-bold text-center text-green-700 mb-4">
          Crop Condition Result
        </h2>
        <div className="text-center mb-4">
          <img
            src={conditionImage}
            alt={`Crop Condition ${score}`}
            className="rounded-lg shadow-md w-full"
          />
        </div>
        <h1 className="text-3xl font-semibold text-center text-green-700 mb-2">
          {`Crop Condition: ${score}`}
        </h1>
        <p className="text-center text-lg text-gray-700">
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
