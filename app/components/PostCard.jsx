import React from 'react';
import questions from '/data/questions.json'

const PostCard = () => {
    return (
        <div className="flex flex-col w-full items-start justify-center space-y-4">
            {questions.map((question, index) => (
                <div key={index}>
                    <div className="bg-gray-900 text-white p-2 rounded-lg flex flex-col items-start justify-center w-full space-y-2">
                        <h3 className="text-xl font-semibold">{question.topic}</h3>
                        <span className="text-sm font-semibold">{question.subject}</span>
                        <p className="text-sm">{question.answer}</p>
                        <div>
                            <button className="bg-gray-800 text-white p-2 rounded-full">

                                <span>Upvote</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostCard;