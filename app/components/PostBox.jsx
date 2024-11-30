"use client";
import React, { useState } from "react";
import ProfilePic from "./ProfilePic";
import { FaImage, FaCode, FaMarkdown, FaPaperPlane } from "react-icons/fa";

const PostBox = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  return (
    <div className="w-full p-4 rounded-lg light:bg-gray-400 dark:bg-gray-900">
      <div className="flex items-start space-x-4">
        <ProfilePic className="w-12 h-12" />
        <div className="w-full">
          <textarea
            id="postBox"
            className={`w-full rounded-md py-2 px-4 text-gray-800 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 border border-gray-500 focus:outline-none focus:ring-1 light:focus:ring-primary dark:focus:ring-gray-300 transition-all ${isFocused ? "h-32" : "h-12"
              }`}
            placeholder="What do you want to ask or answer?"
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              // Prevent textarea from losing focus when interacting with icons
              if (!e.relatedTarget || !e.relatedTarget.closest(".icon-button")) {
                setIsFocused(false);
              }
            }}
          ></textarea>
          {isFocused && (
            <div className="flex justify-between items-center mt-2">
              <div className="flex space-x-4 light:text-gray-500 dark:text-white">
                <button
                  className={`p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 icon-button ${selectedIcon === "image" ? "bg-gray-300 dark:bg-gray-600" : ""
                    }`}
                  onClick={() => setSelectedIcon("image")}>
                  {/* <input type="file" /> */}
                  <FaImage size={20} />
                </button>
                <button
                  className={`p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 icon-button ${selectedIcon === "code" ? "bg-gray-300 dark:bg-gray-600" : ""
                    }`}
                  onClick={() => setSelectedIcon("code")}
                >
                  <FaCode size={20} />
                </button>
                <button
                  className={`p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 icon-button ${selectedIcon === "markdown"
                    ? "bg-gray-300 dark:bg-gray-600"
                    : ""
                    }`}
                  onClick={() => setSelectedIcon("markdown")}
                >
                  <FaMarkdown size={20} />
                </button>
              </div>
              <button
                className="icon-button flex items-center space-x-2 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
                onClick={() => alert("Post submitted")}
              >
                <FaPaperPlane size={16} />
                <span>Submit</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostBox;