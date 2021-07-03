import React from "react";

const Card = (props) => {
    
  const dragStart = (e) => {
    e.dataTransfer.setData("card_id", e.target.id);
    setTimeout(() => {
      e.target.style.display = "none";
    }, 10);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };
  
  return (
    <div
      id={props.id}
      className={props.className}
      draggable="true"
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
};

export default Card;
