import React from "react";

const Instructions = (props) => {
  const { number } = props;
  return (
    <div className="flex justify-evenly items-center">
      <p className="mx-3 bg-white rounded text-gradient-start flex items-center justify-center text-3xl font-bold p-5">
        {number}
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore
        quam iure cupiditate? Porro ex aut dolorum ut consequuntur minus
        consequatur iure maxime provident dicta. Veritatis molestias ab
        expedita.
      </p>
    </div>
  );
};

export default Instructions;
