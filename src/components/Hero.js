import React, { useState } from "react";
// import Type from "./Type";
import ChangeImage from "./Changeimage"; // Make sure to import ChangeImage
import Header from "./Header";
import Footer from "./Footer";

const MyCollection = [
  {
    imgPath: "https://w.wallhaven.cc/full/72/wallhaven-72yzje.jpg",
  },
  {
    imgPath: "https://w.wallhaven.cc/full/l8/wallhaven-l8vp7y.jpg",
  },
  {
    imgPath: "https://w.wallhaven.cc/full/2y/wallhaven-2ywd3y.png",
  },
];

function Hero() {
  const [index, setIndex] = useState(0);

  // const goToNextPicture = () => {
  //   setIndex((prevIndex) => (prevIndex + 1) % MyCollection.length);
  // };

  return (
    <>
   
    
   {/* "flex justify-center h-5/6 pt-20 backdrop-blur-sm" */}

    <div className=" h-screen  ">
    <Header />
    
      <div className= " h-screen flex-col items-center   overflow-hidden justify-center " style={{ backgroundImage: `url(${MyCollection[index].imgPath})` }}>
      
        <div className=" backdrop-blur-xl flex justify-center overflow-hidden  h-screen  pt-20">
        <ChangeImage index={index} setIndex={setIndex}  />
       
        </div> 
        
      </div>
      <Footer/>
    </div>  
    
   
    </>
  );
}

export default Hero;
