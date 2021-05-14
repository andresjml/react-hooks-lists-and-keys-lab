import React from "react";

function ProjectItem({ key, name, about, technologies }) {

  const techList= technologies.map((techItem)=>(
    <span key={key}>{techItem}</span>
  ));

  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techList}
      </div>
    </div>
  );
}

export default ProjectItem;
