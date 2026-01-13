import React from "react";

const TransformLeadershipComp = () => {
  return (
    <div>
      <div className="flex justify-around  h-75">
        <div className="ibm-plex-sans-regular">
          OUR METHODOLOGY
          <br />
          <span className="ibm-plex-serif-medium text-6xl">
            How We Transform <br /> Leadership
          </span>
        </div>
        <div className="w-100 py-10 text-[20px]">
          Trusted leadership isn't built on theory alone. Our integrated
          approach combines rigorous research, practical training to create
          lasting organizational change.
        </div>
      </div>

      <div class="flex justify-center gap-4 h-fit px-50 ">
        <div className="bar-text1 -pl-30 flex gap-7">
          <div className="w-30 h-150 bg-amber-300"></div>
          <div>
            <h1 className="ibm-plex-serif-medium text-[28px]">
              Research & Insights
            </h1>
            <ul className="pl-5">
              <li className="list-disc">Evidence-based leadership models</li>
              <li className="list-disc">Continuous innovation</li>
              <li className="list-disc">Data-driven understanding</li>
            </ul>
          </div>
        </div>
        <div className="bar-text2 mt-50 flex gap-7">
          <div className="w-30 h-100 bg-amber-300"></div>
          <div>
            <h1 className="ibm-plex-serif-medium text-[28px]">
              Training & Development
            </h1>
            <ul className="pl-5">
              <li className="list-disc">Practical skill-building</li>
              <li className="list-disc">Certification programs</li>
              <li className="list-disc">Organizational transformation</li>
            </ul>
          </div>
        </div>
        <div className="bar-text3 mt-100 flex gap-7">
          <div className="w-30 h-50 bg-amber-300"></div>
          <div>
            <h1 className="ibm-plex-serif-medium text-[28px]">
              Consulting & Implementation
            </h1>
            <ul className="pl-5">
              <li className="list-disc">Strategic partnership</li>
              <li className="list-disc">Custom solutions</li>
              <li className="list-disc">Measurable impact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformLeadershipComp;
