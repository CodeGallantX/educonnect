import React from 'react';
import subjects from '/data/subjects.json'

const SubjectSlider = () => {
    return (
        <div className="flex flex-row w-full items-start justify-center space-x-4 bg-gray-900 p-2 rounded-lg">
            {subjects.map((subject, index) => (
                <div key={index}>
                    <a href={subject.url} className="flex flex-col items-center justify-center w-full space-y-2">
                        <img src={subject.thumbnail} alt={subject.name} className="w-24 h-20 rounded-lg object-cover" />
                        <h4 className="text-white text-sm">{subject.name}</h4>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default SubjectSlider;