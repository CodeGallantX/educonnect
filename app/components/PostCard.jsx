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
                <div key={index} className="bg-gray-900 text-white p-4 rounded-lg w-full">
                    <h3 className="text-xl font-semibold">{question.topic}</h3>
                    <span className="text-sm font-semibold text-gray-400">{question.subject}</span>
                    <p className="text-sm mt-2">{question.answer}</p>
                    <div className="flex flex-row items-center justify-start space-x-6 mt-4">
                        <div className="flex flex-row bg-gray-700 rounded-full px-4 py-2">
                            <div className="flex items-center space-x-2 cursor-pointer border-r border-r-gray-500">
                                <span
                                    className={`flex flex-row items-center space-x-2 ${votes[index].upvoted ? "text-blue-500" : "text-gray-400"
                                        }`}
                                    onClick={() => handleUpvote(index)}
                                >
                                    <PiArrowFatUpBold className="text-lg" />
                                    <span className="text-sm">
                                        {votes[index].upvoted
                                            ? `${votes[index].count} Upvoted`
                                            : "Upvote"}
                                    </span>
                                </span>
                            </div>

                            <div
                                className={`flex items-center space-x-2 cursor-pointer ${votes[index].downvoted ? "text-red-500" : "text-gray-400"
                                    }`}
                                onClick={() => handleDownvote(index)}
                            >
                                <PiArrowFatDownBold className="text-lg" />
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 cursor-pointer text-gray-400">
                            <FaRegComments className="text-lg" />
                            <span>{question.comments} Comments</span>
                        </div>

                        <div className="flex items-center space-x-2 cursor-pointer text-gray-400">
                            <FaArrowUpFromBracket className="text-lg" />
                            <span>{question.uploads} Shares</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostCard;
