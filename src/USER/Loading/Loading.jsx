import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="sm:mb-10 mb-5 text-2xl sm:text-5xl text-pink-900">ᕵᕼᗩᖇᙏᗩᙅᖻ</div>
        <div className="animate-spin rounded-full border-t-4 border-pink-900 border-opacity-50 h-12 w-12"></div>
    </div>
  );
};

export default Loading;