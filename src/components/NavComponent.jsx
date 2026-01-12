import React from "react";

const NavComponent = () => {
  return (
    <div className="nav border-b">
      <div className="flex gap-2 mb-4">
        <span className="text-5xl font-bold italic">I.T.L</span>
        <h1>
          Institute for
          <br />
          Trusted Leadership
        </h1>
      </div>

      <div className="nav-links flex gap-10">
        <div>The Institute</div>
        <div>Our Approach</div>
        <div>Ecosystem</div>
        <div>Insight</div>
        <div>Contact Us</div>
      </div>
    </div>
  );
};

export default NavComponent;
