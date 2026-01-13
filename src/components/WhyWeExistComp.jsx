import React from "react";

const WhyWeExistComp = () => {
  return (
    <div>
      <div className="text-center text-3xl mt-15">
        01::::::::::::::::::::02::::::::::::::::::::03
      </div>
      <div className="text-center my-40 flex flex-col gap-5">
        <p className="ibm-plex-sans-regular text-[14px]">The Solution</p>
        <h1 className="ibm-plex-serif-regular-italic text-[54px]">
          This is Why We Exist
        </h1>
        <p className="px-100 ibm-plex-sans-regular text-center ">
          Trust transforms everything engagement, innovation, performance, &
          culture. The Institute of Trusted Leadership scales this impact
          through research-backed methods, turning trusted leadership into the
          global standard.
        </p>
      </div>

      <div className="three-points relative flex justify-center items-end gap-16 my-20 max-w-6xl mx-auto">
        <div className="point-1 flex max-w-xs ">
          <h1 className="text-9xl ibm-plex-serif-medium pb-30 absolute bottom-5 -left-12">1</h1>
          <div  className="pb-24">
            <h2 className="text-3xl ibm-plex-serif-medium  mb-3">
              ITL APPROACH
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Evidence-based methodology combining research, training, and
              consulting to build trusted leaders.
            </p>
          </div>
        </div>

        {/* Point 2 - Elevated */}
        <div className="point-2 flex max-w-xs mb-32">
          <h1 className="text-9xl ibm-plex-serif-medium pb-30 absolute bottom-35 left-85 ">2</h1>
          <div  className="pb-24">
            <h2 className="text-3xl  ibm-plex-serif-medium mb-3">
              OUR ECOSYSTEM
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Four integrated divisions delivering comprehensive leadership
              solutions from awareness to transformation.
            </p>
          </div>
        </div>

        {/* Point 3 */}
        <div className="point-3 flex max-w-xs">
          <h1 className="text-9xl ibm-plex-serif-medium pb-30 absolute bottom-3 right-88">3</h1>
          <div className="pb-24">
            <h2 className="text-3xl ibm-plex-serif-medium mb-3">
              GLOBAL IMPACT
            </h2>
            <p className="text-gray-400 leading-relaxed">
              UN SDG-aligned programs ensuring every initiative creates
              measurable social value.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="relative h-full max-w-6xl mx-auto">
            <div className="absolute inset-0 border-b-2 border-dotted border-gray-600"></div>
            <div className="absolute inset-0 border-b-2 pt-4  border-dotted border-gray-600"></div>
            <div className="absolute left-[16.66%] bottom-0 w-px h-24 bg-gray-600"></div>
            <div className="absolute left-1/2 bottom-0 w-px h-52 bg-gray-600"></div>
            <div className="absolute right-[16.66%] bottom-0 w-px h-24 bg-gray-600"></div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default WhyWeExistComp;
