import React from "react";

const VisionComponent = () => {
  return (
    <div>
      <div>
        <div className="text-center mt-100 flex flex-col gap-5">
          <p>BUILT ON SOLID GROUND</p>
          <h1>
            One Vision.
            <br /> Four Pathways to Impact.
          </h1>
          <p className="px-100 text-center ">
            The Institute of Trusted Leadership operates through an integrated
            ecosystem of specialized divisions, each designed to address
            different aspects of leadership development and organizational
            transformation.
          </p>
        </div>

        <div className="cards flex gap-10 h-100 my-30">
          <div className="border flex-1 ">
            <div>OPEN TO ALL</div>
            <div></div>
            <div>
              <h1>LUCA The Leader</h1>
              <p>Where Leadership Awareness Begins</p>
              <p>
                Our flagship CSR initiative bringing trusted leadership
                awareness to communities, organizations, and emerging leaders.
                Start your journey with free resources, assessments, and
                community connection.
              </p>
            </div>
          </div>
          <div className="border">
            <div>FOR ORGANIZATIONS</div>
            <div></div>
            <div>
              <h1>MARTINICH CONSULTING</h1>
              <p>Strategic Leadership Partnerships</p>
            </div>
          </div>
          <div className="border">
            <div>FOR INDIVIDUALS & TEAMS</div>
            <div></div>
            <div>
              <h1>MARTINICH INSTITUTE</h1>
              <p>Learning That Transforms</p>
            </div>
          </div>
          <div className="border">
            <div>For Research & Innovation</div>
            <div></div>
            <div>
              <h1>MARTINICH R&D</h1>
              <p>Innovation Meets Insight</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionComponent;
