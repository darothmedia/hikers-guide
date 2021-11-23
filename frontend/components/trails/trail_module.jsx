import React from "react";

const TrailModule = ({trail}) => {

  const time = () => {
    let hrs = trail.length / 2
    let base = Math.floor(hrs)
    if (hrs < 1) {
      return (`${hrs * 60} mins`)
    } else if (hrs >= 1 && hrs < 2) {return ( 
      (`${base} hr ${Math.floor((hrs - base) * 60)} mins`))
    }
    else {return (`${base} hrs ${Math.floor((hrs - base) * 60)} mins`)}
  }

  return (
    <div id='trail-module'>
      <div id='trail-stats'>
        <h1>{trail.name}</h1>
        <p>{trail.park}</p>
        <div className='difficulty' id={trail.difficulty}>{trail.difficulty}</div>
        <div id='stars'></div>
        <p><div>Length: {trail.length} mi</div><div>•</div><div>Est {time()}</div></p>
      </div>
    </div>
  )
}

export default TrailModule