import React from "react";

const VisionComponent = () => {
  return (
    <div>
      <div>
        <div className="text-center mt-50 flex flex-col gap-5">
          <p className="text-[14px] ibm-plex-sans-medium">
            BUILT ON SOLID GROUND
          </p>
          <h1 className="ibm-plex-serif-regular text-[54px]">
            One Vision.
            <br /> Four Pathways to Impact.
          </h1>
          <p className="px-100 text-center text-[20px] ibm-plex-sans-medium">
            The Institute of Trusted Leadership operates through an integrated
            ecosystem of specialized divisions, each designed to address
            different aspects of leadership development and organizational
            transformation.
          </p>
        </div>

        <div className="cards flex gap-10 h-150 my-30 px-50">
          <div className="border min-w-auto rounded-lg">
            <div className="text-[14px] ibm-plex-sans-medium">OPEN TO ALL</div>
            <div className="w-5/5 bg-gray-400 h-1/2 mt-10  "></div>
            <div className="px-10">
              <h1 className="ibm-plex-serif-regular text-[32px]">
                LUCA The Leader
              </h1>
              <p className="ibm-plex-serif-regular text-[20px] mb-5">
                Where Leadership Awareness Begins
              </p>
              <p className="ibm-plex-sans-regular text-[14px]">
                Our flagship CSR initiative bringing trusted leadership
                awareness to communities, organizations, and emerging leaders.
                Start your journey with free resources, assessments, and
                community connection.
              </p>
            </div>
          </div>
          <div className="border p-5 rounded-lg">
            <div className="text-[12px] mb-10">FOR ORGANIZATIONS</div>
            <div></div>
            <div className="flex pt-10">
              <h1 className="ibm-plex-serif-regular text-[32px] [writing-mode:vertical-rl] rotate-180 ">
                MARTINICH CONSULTING
              </h1>
              <p className="ibm-plex-serif-regular text-[20px] [writing-mode:vertical-rl] rotate-180">
                Strategic Leadership Partnerships
              </p>
            </div>
          </div>
          <div className="border p-5 rounded-lg">
            <div className="text-[12px] mb-10">FOR INDIVIDUALS & TEAMS</div>
            <div></div>
            <div className="flex pt-10">
              <h1 className="ibm-plex-serif-regular text-[32px] [writing-mode:vertical-rl] rotate-180">
                MARTINICH INSTITUTE
              </h1>
              <p className="ibm-plex-serif-regular text-[20px] [writing-mode:vertical-rl] rotate-180">
                Learning That Transforms
              </p>
            </div>
          </div>
          <div className="border p-5 rounded-lg">
            <div className="text-[12px] mb-10">FOR RESEARCH & INNOVATION</div>
            <div></div>
            <div className="flex pt-40">
              <h1 className="ibm-plex-serif-regular text-[32px] [writing-mode:vertical-rl] rotate-180">
                MARTINICH R&D
              </h1>
              <p className="ibm-plex-serif-regular text-[20px] [writing-mode:vertical-rl] rotate-180">
                Innovation Meets Insight
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionComponent;
