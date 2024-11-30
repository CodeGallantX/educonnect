"use client";
import React, { useState } from "react";
import questions from "/data/questions.json";
import { PiArrowFatUpBold, PiArrowFatDownBold } from "react-icons/pi";
import { FaRegComments, FaArrowUpFromBracket } from "react-icons/fa6";

const PostCard = () => {
  const [votes, setVotes] = useState(
    questions.map((question) => ({
      upvoted: false,
      downvoted: false,
      count: question.upvotes || 0,
    }))
  );

  const handleUpvote = (index) => {
    setVotes((prevVotes) =>
      prevVotes.map((vote, i) => {
        if (i === index) {
          return {
            upvoted: !vote.upvoted,
            downvoted: vote.downvoted && !vote.upvoted ? false : vote.downvoted,
            count: vote.upvoted
              ? vote.count - 1
              : vote.downvoted
              ? vote.count + 2
              : vote.count + 1,
          };
        }
        return vote;
      })
    );
  };

  const handleDownvote = (index) => {
    setVotes((prevVotes) =>
      prevVotes.map((vote, i) => {
        if (i === index) {
          return {
            upvoted: vote.upvoted && !vote.downvoted ? false : vote.upvoted,
            downvoted: !vote.downvoted,
            count: vote.downvoted
              ? vote.count + 1
              : vote.upvoted
              ? vote.count - 2
              : vote.count - 1,
          };
        }
        return vote;
      })
    );
  };

  return (
    <div className="flex flex-col w-full items-start justify-center space-y-4">
      {questions.map((question, index) => (
        <div key={index}>
          <div className="bg-gray-900 text-white p-4 rounded-lg flex flex-col items-start justify-center w-full space-y-2">
            <h3 className="text-xl font-semibold">{question.topic}</h3>
            <span className="text-sm font-semibold">{question.subject}</span>
            <p className="text-sm">{question.answer}</p>
            <div className="flex flex-row items-center justify-start space-x-6 outline-none pt-3">
              <div className="bg-gray-800 text-white py-2 px-3 rounded-full flex flex-row items-center justify-center">
                <span
                  className={`flex cursor-pointer flex-row items-center justify-center space-x-2 pr-3 border-r-2 border-r-gray-300 ${
                    votes[index].upvoted ? "text-blue-500" : "text-white"
                  }`}
                  onClick={() => handleUpvote(index)}
                >
                  <PiArrowFatUpBold className="text-lg" />
                  <span className="text-sm">
                    {votes[index].upvoted ? "Upvoted" : "Upvote"}
                  </span>
                </span>
                <span
                  className={`ml-2 cursor-pointer ${
                    votes[index].downvoted ? "text-red-500" : "text-white"
                  }`}
                  onClick={() => handleDownvote(index)}
                >
                  <PiArrowFatDownBold className="text-lg" />
                </span>
                <span className="ml-4 text-sm">{votes[index].count}</span>
              </div>
              <div className="flex flex-row items-center justify-center space-x-1 cursor-pointer">
                <FaRegComments className="text-xl" />
                <span>{question.comments}</span>
              </div>
              <div className="flex flex-row items-center justify-center space-x-1 cursor-pointer">
                <FaArrowUpFromBracket className="text-lg" />
                <span>{question.uploads}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;