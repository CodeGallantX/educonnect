import Header from '../components/Header';
import LeftPane from '../components/LeftPane';
import PostBox from '../components/PostBox';
import SubjectSlider from '../components/SubjectSlider';
import PostCard from '../components/PostCard';
import RightPane from '../components/RightPane';

const App = () => {
  return (
    <div className="light:bg-gray-200 dark:bg-gray-800">
      <Header />
      <div className="md:mt-10 grid grid-cols-7 gap-6 px-4 md:px-6 lg:px-16 xl:px-24">
        <div>
          <LeftPane />
        </div>
        <div className="col-span-4 flex flex-col items-start justify-start space-y-4">
          <PostBox />
          <SubjectSlider />
          <PostCard />
        </div>
        <div className="col-span-2">
          <RightPane />
        </div>
      </div>
    </div>
  );
};

export default App;