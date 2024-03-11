import React, { useState, useEffect } from "react";

const MyCollection = [
  {
    bgImage: "https://w.wallhaven.cc/full/72/wallhaven-72yzje.jpg",
    otherImage: "https://w.wallhaven.cc/full/2y/wallhaven-2ywd3y.png",
  },
  {
    bgImage: "https://w.wallhaven.cc/full/l8/wallhaven-l8vp7y.jpg",
    otherImage: "https://w.wallhaven.cc/full/72/wallhaven-72yzje.jpg",
  },
  {
    bgImage: "https://w.wallhaven.cc/full/2y/wallhaven-2ywd3y.png",
    otherImage: "https://w.wallhaven.cc/full/l8/wallhaven-l8vp7y.jpg",
  },
];

const ChangeImage = ({ index, setIndex }) => {
  const [bgImageUrl, setBgImageUrl] = useState(MyCollection[index].bgImage);
  const [otherImageUrl, setOtherImageUrl] = useState(MyCollection[index].otherImage);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % MyCollection.length);
    }, 2000); // Change image every 2 seconds 

    return () => clearInterval(interval);
  }, [index, setIndex]);

  useEffect(() => {
    setBgImageUrl(MyCollection[index].bgImage);
    setOtherImageUrl(MyCollection[index].otherImage);
  }, [index]);

  return (
    <div className=" w-4/5 h-auto  overflow-clip relative  backdrop:blur-md  ">
      <img
        src={otherImageUrl}
        className="rounded-lg h-5/6  overflow-clip  "
        alt={`Other Slide ${index}`}
      />
      <img
        src={bgImageUrl}
        className="absolute top-0 left-0 w-full h-5/6 border-8 b-2 object-cover "
        alt={`Slide ${index}`}
      />
    </div>
  );
};

export default ChangeImage;
