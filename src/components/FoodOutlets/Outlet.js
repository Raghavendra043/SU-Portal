import React from "react";

export default function Outlet(props) {
  const name = props.Name;
  return (
    <div className="outlet">
      <div className="part1">
        <h1>{name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          dolore voluptatem aut praesentium odio unde fuga totam laudantium
          nobis sunt, dolorem officia! Voluptatum, necessitatibus ipsum!
        </p>
      </div>
      <div className="part2">
          <img src="" alt="This is a picture" />
        </div>
    </div>
  );
}
