import React from "react";
import Link from 'next/link';
import communities from "/data/communities.json";

const CommunityCard = () => {
  if (!communities || communities.length === 0) {
    return <div className="text-white text-sm">No communities available.</div>;
  }

  return (
    <div className="flex flex-col items-start justify-center space-y-4 border-b border-gray-500 pb-4">
      {communities.map((community, index) => (
        <div key={index}>
          <Link
            href={community.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center justify-center w-full space-x-2"
          >
            <div className="relative">
              <img
                src={community.img}
                alt={community.name || "Community"}
                className="min-w-12 min-h-12 max-w-14 max-h-14 rounded-lg object-cover"
              />
              <span className="absolute w-2 h-2 -top-0.5 -right-0.5 rounded-full bg-red-500"></span>
            </div>
            <h4 className="text-white text-sm">{community.name}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CommunityCard;
