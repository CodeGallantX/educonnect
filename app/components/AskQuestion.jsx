"use client";
import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const QuestionBox = () => {
  const [activeTab, setActiveTab] = useState('question');
  const [isPublic, setIsPublic] = useState(true);
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');

  const handleSubmit = () => {
    if (topic.trim() && description.trim()) {
      console.log(`Topic: ${topic}`);
      console.log(`Subject: ${subject}`);
      console.log(`Description: ${description}`);
      setTopic('');
      setSubject('');
      setDescription('');
      alert('Question posted successfully!!')
    }
    else {
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


      <form onSubmit={handleSubmit} className="relative space-y-4">
        <fieldset className="space-y-1">
          <label className="text-gray-300 font-semibold">Topic <span className="text-red-500 font-bold">*</span></label>
          <input 
            type="text" 
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full text-[12px] sm:text-sm rounded-md pt-1.5 sm:py-2 px-4 text-gray-100 bg-gray-800 border border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all"/>
        </fieldset>
        <fieldset className="space-y-1">
          <label className="text-gray-300 font-semibold">Subject </label>
          <input 
            type="text" 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full text-[12px] sm:text-sm rounded-md pt-1.5 sm:py-2 px-4 text-gray-100 bg-gray-800 border border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all"/>
        </fieldset>
        <fieldset className="space-y-1">
          <label className="text-gray-300 font-semibold">Description <span className="text-red-500 font-bold">*</span></label>
        <textarea
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
      </form>

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
