import React from "react";

const ReveriewsCard = (props) => {
  return (
    <div className=" w-full md:w-1/3 bg-white border-2 border-LightText md:border-none p-5 rounded-lg hover:shadow-[rgba(0,_0,_0.24)_0px_3px_8px] transition-all ">
      <div>
        <p className=" text-lime-700 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          minima cupiditate, error assumenda voluptatum exercitationem nam
          eligendi sed id ullam totam corrupti libero voluptate aspernatur
          commodi eius quas nostrum nihil.
        </p>
      </div>
      <div className=" flex flex-row justify-center">
        <img className=" rounded-full w-1/4" src={props.img} alt="img" />
      </div>
    </div>
  );
};
export default ReveriewsCard;
