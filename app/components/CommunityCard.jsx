import React from 'react';
import communities from '/data/communities.json'

const CommunityCard = () => {
    return (
        <div className="flex flex-col items-start justify-center space-y-4">
            {communities.map((community, index) => (
                <div key={index}>
                    <a href={community.url} className="flex flex-row items-center w-full space-x-2">
                        <img src={community.img} alt="img" className="w-10 h-10 rounded-lg object-cover" />
                        <h4 className="text-white text-sm">{community.name}</h4>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default CommunityCard;