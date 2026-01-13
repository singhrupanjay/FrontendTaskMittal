// CircularInterface.jsx
import {
  EyeIcon,
  AdjustmentsVerticalIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

import star from "../assets/Star 1.png";
import eye from "../assets/eye.png";
import target from "../assets/target.png";
import cup from "../assets/cup.png";

export default function NorthStarElement() {
  return (
    <div className="flex items-center justify-center ">
      <div className="relative w-100 h-100 rounded-full  bg-white/10 border-2 border-dashed border-white flex items-center justify-center">
        <div className="absolute w-50   rounded-full flex items-center justify-center text-black font-bold">
          <img src={star} alt="star" />
        </div>

        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-15 h-15">
          <div className="absolute w-20 h-20 -left-2.5 -top-5 border  bg-gray-500/30  rounded-full"></div>
          <img
            src={eye}
            alt="star"
            className="relative z-10 left-2"
          />
        </div>

        <div className="absolute top-75 left-6">
          <div className="absolute inset-0 w-20 h-20 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  bg-gray-500/30  rounded-full border"></div>
          <img src={target} alt="star" className="relative z-10" />
        </div>

        <div className="absolute top-75 right-6">
          <div className="absolute inset-0 w-20 h-20 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-gray-500/30 rounded-full border"></div>
          <img src={cup} alt="star" className="relative z-10" />
        </div>
      </div>
    </div>
  );
}
