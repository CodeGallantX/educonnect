import React from 'react';
import QuestionBox from './QuestionBox';
import ProAdvertisement from './ProAdvertisement';

const RightPane = () => {
  return (
    <div className="flex-col items-start justify-center text-white space-y-4">
      <QuestionBox />
      <ProAdvertisement />
    </div>
  )
}

export default RightPane