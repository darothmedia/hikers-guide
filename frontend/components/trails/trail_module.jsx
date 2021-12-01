import React from "react";
import { Link } from "react-router-dom";
import reviewAverage from "../../util/avg_review_util";

const TrailModule = ({trail, type}) => {

  const time = () => {
    let hrs = trail.length / 2
    let base = Math.floor(hrs)
    if (hrs < 1) {
      return (`${hrs * 60} mins`)
    } else if (hrs >= 1 && hrs < 2) {
      return (`${base} hr ${Math.floor((hrs - base) * 60)} mins`)
    } else {
      return (`${base} hrs ${Math.floor((hrs - base) * 60)} mins`)
    }
  }

  return (
    <Link to={`/trails/${trail.id}`}>
    <div id={`${type}-module`}>
      <div><img src={trail.mainPhotoUrl} alt={trail.name} /></div>
      <div id='trail-stats'>
        <h1>{trail.name}</h1>
        <p>{trail.park}</p>
        <div id='flex'>
            <div className='difficulty' id={trail.difficulty}>{trail.difficulty}</div>
            <div id='stars'>{trail.reviews ? reviewAverage(trail.reviews, 'Module') : ""}</div>
        </div>
        <div id='lower-info'><div>Length: {trail.length} mi</div><div>•</div><div>Est. {time()}</div></div>
      </div>
    </div>
    </Link>
  )
}

export default TrailModule