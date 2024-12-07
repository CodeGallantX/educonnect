"use client";
import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const QuestionBox = () => {
  const [activeTab, setActiveTab] = useState('question');
  const [isPublic, setIsPublic] = useState(true);
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (content.trim()) {
      console.log(`Submitted: ${content}`);
      setContent('');
    } else {
      alert('Please enter some text before submitting!');
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white space-y-4">
      <div className="flex space-x-4 border-b border-gray-700">
        <button
          className='text-lg font-semibold text-gray-400 pb-2 text-gray-400'
        >
          Ask Question
        </button>
      </div>


      <div className="relative space-y-4">
        <fieldset className="space-y-1">
          <label className="text-gray-300 font-semibold">Topic <span className="text-red-500 font-bold">*</span></label>
          <input required type="text" className="w-full text-[12px] sm:text-sm rounded-md pt-1.5 sm:py-2 px-4 text-gray-800 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 border border-gray-500 focus:outline-none focus:ring-1 light:focus:ring-primary dark:focus:ring-gray-300 transition-all"/>
        </fieldset>
        <fieldset className="space-y-1">
          <label className="text-gray-300 font-semibold">Subject </label>
          <input type="text" className="w-full text-[12px] sm:text-sm rounded-md pt-1.5 sm:py-2 px-4 text-gray-800 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 border border-gray-500 focus:outline-none focus:ring-1 light:focus:ring-primary dark:focus:ring-gray-300 transition-all"/>
        </fieldset>
        <fieldset className="space-y-1">
          <label className="text-gray-300 font-semibold">Description <span className="text-red-500 font-bold">*</span></label>
        <textarea
          rows="3"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Ask your question here...'
          className="w-full bg-gray-800 rounded-md p-4 text-white text-sm border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-200 pr-10"
          />
          </fieldset>
        <button
          onClick={handleSubmit}
          className="absolute right-3 bottom-3 bg-gray-600 text-white p-2 rounded-full"
          aria-label="Submit"
        >
          <FaPaperPlane className="text-base" />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-gray-400">Visibility:</span>
        <button
          onClick={() => setIsPublic(!isPublic)}
          className={`py-1 px-4 rounded-full text-sm font-medium transition ${
            isPublic ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-red-600 text-white hover:bg-red-700'
          }`}
        >
          {isPublic ? 'Everyone' : 'Only friends'}
        </button>
      </div>
    </div>
  );
};

export default QuestionBox;
