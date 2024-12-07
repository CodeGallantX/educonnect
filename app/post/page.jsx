import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import LeftPane from '../components/LeftPane';
import PostBox from '../components/PostBox';
import UpvotedPostBox from '../components/UpvotedPostBox';
import PostCard from '../components/PostCard';
import AskQuestion from '../components/AskQuestion';

const App = () => {
  return (
    <div>
    <div className="bg-gray-800 hidden md:block">
      <Header />
      <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6 px-4 md:px-6 lg:px-10 xl:px-24">
        <div className='hidden md:block lg:hidden xl:block lg:col-span-0'>
          <LeftPane />
        </div>  
        <div className="md:col-span-3 lg:col-span-4 flex flex-col items-start justify-start space-y-4">
          <PostBox />
          <UpvotedPostBox />
        </div>
        <div className="hidden lg:block col-span-2">
          <AskQuestion />
        </div>
      </div>
    </div>
    <div className="bg-gray-800 block md:hidden">
    <HeaderMobile/>
    <div className="flex flex-col items-start justify-start space-y-4 px-4 md:px-6 mt-6">
          <PostBox />
          <UpvotedPostBox />
          {/* <AskQuestion /> */}
        </div>
    </div>
    </div>
  );
};

export default App;