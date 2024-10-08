import React from "react";

export default function Skill(props) {
  const { title, imgs = [] } = props;
  return (
    <div className="skillBlock">
      <div className="skills-list">
        <h3 className="h4 clients-title">{title}</h3>
        <br />
        {imgs.map((item, index) => (
          <img className = "skillImg"key={index} src={item.src} alt={item.alt}></img>
        ))}
      </div>
    </div>
  );
}
