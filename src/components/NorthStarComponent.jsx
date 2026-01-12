import React from "react";

const NorthStarComponent = () => {
  return (
    <div>
      <div className="north-star">
        <p className="my-10">Scroll to Discover</p>
        <div className="star-div flex justify-between h-150 py-60">
          <div className="star-item">Item</div>
          <div className="start-text">
            <p>what drives us</p>
            <p>Our North Star</p>
            <p className="w-100">
              <span>Vision</span>
              <br />A world in which organizations are led by trust and
              committed to the continuous development of people and purpose.
            </p>
          </div>
        </div>
        <div className="square-div h-170  flex-col justify-around">
          <div className="flex h-1/2 justify-around">
            <div>Meet our founder</div>
            <div>leslie martinich </div>
          </div>
          <div className="flex justify-around">
            <div className="w-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, fuga. Deserunt itaque natus optio, ab amet cumque
              deleniti quos temporibus, numquam dignissimos pariatur, totam
              laudantium ipsa voluptatibus autem tempora consequuntur?
            </div>
            <div>Meet Leslie</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NorthStarComponent;
