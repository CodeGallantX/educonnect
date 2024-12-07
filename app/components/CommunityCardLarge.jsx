import communities from "../../data/communities.json";

const CommunityCard = () => {
  if (!communities || communities.length === 0) {
    return <div className="text-white text-sm">No communities available.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4 border-b border-gray-500 py-4">
      {communities.slice(0, 4).map((community, index) => (
        <div key={index}>
          <a
            href={community.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start justify-start w-full space-y-4 bg-gray-900 p-4 rounded-lg"
          >
            <div className="flex flex-row items-center justify-start space-x-4">
              <img
                src={community.img}
                alt={community.name || "Community"}
                className="min-w-12 min-h-12 max-w-24 max-h-24 rounded-lg object-cover"
              />
              <h4 className="text-gray-300 text-sm mt-2 font-semibold text-xl">{community.name}</h4>
            </div>
            <p className="text-sm text-gray-400">{community.description}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default CommunityCard;
