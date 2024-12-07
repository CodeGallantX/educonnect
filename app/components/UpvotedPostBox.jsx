"use client";
import { useState } from "react";
import questions from "../../data/questions.json";
import { FaRegComments, FaArrowUpFromBracket } from "react-icons/fa6";

const PostCard = () => {
    return (
        <div className="flex flex-col w-full items-start justify-center space-y-4">
            {questions.map((question, index) => (
                <div key={index} className="bg-gray-900 text-white p-4 rounded-lg w-full">
                    <h3 className="text-xl font-semibold">{question.topic}</h3>
                    <span className="text-sm font-semibold text-gray-400">{question.subject}</span>
                    <p className="text-sm mt-2">{question.answer}</p>
                    <div className="flex flex-row items-center justify-start space-x-6 mt-4">
                        <div className="flex flex-row bg-gray-700 rounded-full px-4 py-2">
                            <div className="flex items-center space-x-2 cursor-pointer">
                                
                            </div>

                        </div>

                        <div className="flex items-center space-x-2 cursor-pointer text-gray-200">
                            <FaRegComments className="text-lg" />
                            <span>{question.comments} Reply</span>
                        </div>

                        <div className="flex items-center space-x-2 cursor-pointer text-gray-200">
                            <FaArrowUpFromBracket className="text-lg" />
                            <span>{question.uploads} Share</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostCard;
