import React from "react";
import NorthStarElement from "./NorthStarElement";

const NorthStarComponent = () => {
  return (
    <div>
      <div className="north-star ">
        <p className="my-10 ibm-plex-serif-regular text-[16px]">
          Scroll to Discover
        </p>

        <div className="star-div flex justify-around h-150 py-40">
          <div className="star-item">
            <NorthStarElement />
          </div>

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
              <div>
                <p>Meet our founder</p>
                <span className="ibm-plex-serif-regular text-[54px]">
                  Leslie Martinich
                </span>
              </div>
            </div>
            <div className=" ">
              <img
                src="\images\leslie.png"
                alt="img"
                className="w-159.75 h-94"
              />
            </div>
          </div>
          <div className="flex justify-around">
            <div className="w-[700px] py-20 px-30 -mr-14.5 mt-9 border">
              <p className="w-110.25 mb-6">
                Leslie Martinich is a leadership expert with 20+ years of
                experience who founded the Institute of Trusted Leadership to
                address the global crisis of trust in organizations.
              </p>
              <p className="w-110.25">
                Through evidence-based, practical approaches, her work develops
                leaders, transforms cultures, and scales trusted leadership
                worldwide.
              </p>
            </div>
            <div className="w-1/2 py-15 px-15 ibm-plex-serif-regular text-[42px]">
              Meet Leslie
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NorthStarComponent;
