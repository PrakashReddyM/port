import React from "react";

const SkillCard = ({name,imageUrl,starsTotal,starsActive}) => {
  const starsList = []

  for(let i=0;i<starsTotal;i++){
    if(i<starsActive){
      starsList.push(<span className="text-info">★</span>)
    }else{
      starsList.push(<span >★</span>)
    }
  }
  return (
    <div className="d-flex flex-column  align-items-center">
      <img
        className="rounded-md"
        src={imageUrl}
        alt={name}
        style={{width: "100px", height: "100px"}}
      />
      <div >{starsList}</div>
    </div>
  );
};

export default SkillCard;
