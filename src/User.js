import React from "react";

export const User = (props) => {
    // console.warn(props.data.name)
   const  {data} = props;
  return (
    <div>
      <h1>User Component</h1>
      <h2>{data.name}</h2>
      <h2>{data.age}</h2>
    </div>
  );
};
