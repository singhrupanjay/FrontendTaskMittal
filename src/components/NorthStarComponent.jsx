import React from "react";

const NorthStarComponent = () => {
  return (
    <div>
      <div className="north-star ">
        <p className="my-10 ibm-plex-serif-regular text-[16px]">
          Scroll to Discover
        </p>
        <div className="star-div flex justify-around h-150 py-40">
          <div className="star-item">Item</div>
          <div className="start-text">
            <p className="ibm-plex-sans-medium">what drives us</p>
            <p className="ibm-plex-serif-regular text-6xl my-5">
              Our North Star
            </p>
            <p className="w-100 ">
              <p className="ibm-plex-serif-medium-italic text-3xl">Vision</p>
              <br />A world in which organizations are led by trust and
              committed to the continuous development of people and purpose.
            </p>
          </div>
        </div>
        <div className="square-div h-170  flex-col justify-around ">
          <div className="w-full h-1/2 flex justify-around">
            <div className="ibm-plex-sans-medium flex w-1/2">
              Meet our founder <br /> leslie martinich
            </div>
            <div className="border w-1/2">image</div>
          </div>
          <div className="flex justify-around">
            <div className="w-1/2">
              <p>
                Leslie Martinich is a leadership expert with 20+ years of
                experience who founded the Institute of Trusted Leadership to
                address the global crisis of trust in organizations. Through
                evidence-based, practical approaches, her work develops leaders,
                transforms cultures, and scales trusted leadership worldwide.
              </p>
            </div>
            <div className="w-1/2 text-center">Meet Leslie</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NorthStarComponent;
