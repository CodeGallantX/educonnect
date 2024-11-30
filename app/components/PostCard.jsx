import React from 'react';
import questions from '/data/questions.json'

const PostCard = () => {
    return (
        <div className="flex flex-row w-full items-start justify-center space-x-4 bg-gray-900 p-2 rounded-lg">
            {questions.map((question, index) => (
                <div key={index}>
                    <div className="flex flex-col items-center justify-center w-full space-y-2">
                        <h3 className="text-white text-sm">{question.topic}</h3>
                        <span className="text-sm">{question.suject}</span>
                        <p>{question.answer}</p>
                        
                        <h4 className="text-white text-sm">{question.name}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostCard;