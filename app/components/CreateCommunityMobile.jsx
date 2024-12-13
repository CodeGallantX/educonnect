"use client";
import { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { PiPencilSimple } from "react-icons/pi";
import { FaAngleLeft } from "react-icons/fa6";

const QuestionBox = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  // const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (content.trim()) {
      console.log(`Submitted: ${content}`);
      setContent("");
      setImage(null);
    } else {
      alert("Please enter some text before submitting!");
    }
  };

  return (
    <div className="bg-gray-900 p-6 flex flex-col items-center justify-center min-h-screen text-white space-y-4">
      <button
      //  onClick={() => (navigate('/community'))}
       >
          <FaAngleLeft className="absolute left-8 top-6 p-2 light:bg-gray-500 dark:bg-gray-700 rounded-full text-4xl light:text-gray-500 dark:text-white font-bold" />
        </button>
      <div className="flex flex-col space-y-2 border-b border-gray-700 pb-2">
        <button className="text-xl font-semibold">
          Create a student community
        </button>
        <span className="text-gray-200 text-sm text-center">Build a thriving student community and grow together</span>
      </div>

      <div className="relative space-y-4">
        <fieldset className="space-y-2 flex flex-col items-center justify-center">
          <button
            className="relative w-28 h-28 rounded-full bg-gray-700 border border-gray-500 flex items-center justify-center text-gray-600"
            onClick={() => fileInputRef.current.click()}
          >
            {image ? (
              <img
                src={image}
                alt="Uploaded"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              ""
            )}
            <PiPencilSimple className="absolute bottom-0 right-0 text-gray-200 bg-gray-700 border border-gray-500 rounded-full py-3 px-2 text-4xl"/>
          </button>
          <label className="text-gray-300 font-semibold">Upload Image</label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </fieldset>

        <fieldset className="space-y-1">
          <label className="text-gray-300 font-semibold">
            Name <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            type="text"
            className="w-full text-[12px] sm:text-sm rounded-md pt-1.5 sm:py-2 px-4 text-gray-100 bg-gray-800 border border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all"
            
          />
        </fieldset>

        <fieldset className="space-y-1">
          <label className="text-gray-300 font-semibold">
            Description <span className="text-red-500 font-bold">*</span>
          </label>
          <textarea
            rows="3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Describe your community here..."
            className="w-full bg-gray-800 rounded-md p-4 text-white text-sm border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </fieldset>

      </div>
        <button
          onClick={handleSubmit}
          className="bg-primary w-full text-white py-3 rounded-lg"
          aria-label="Submit"
        >
          Create Community
        </button>
    </div>
  );
};

export default QuestionBox;
