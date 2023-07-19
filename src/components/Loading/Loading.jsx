import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loading = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[calc(100vh-68px)]">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
      </div>
    </div>
  );
};

export default Loading;