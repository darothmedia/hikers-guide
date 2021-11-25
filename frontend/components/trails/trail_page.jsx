import React from "react";

export default class TrailPage extends React.Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    this.props.fetchTrail(this.props.trailId)
  }

  // NEED TO FIX THIS, CONSTANTLY UPDATING

  // componentDidUpdate(prevProps) {
  //   if (prevProps !== this.props) {
  //     this.props.fetchTrail(this.props.trailId)
  //   }
  // }
  
  render(){
    const trail = this.props.trail
    return (
      <div id='trail-page-container'>
        <header>
          <div id='image-cntr'>
            <img src={trail ? trail.m_photo : ""} alt="" />
            <div id='gradient' />
          </div>
          <div id='gradient'>
            <div id='top-info'>
              <h1>{trail ? trail.name : ""}</h1>
              <div className='difficulty' id={trail ? trail.difficulty : ""}>{trail ? trail.difficulty : ""}</div>
              <h2>{trail ? trail.park : ""}</h2>
            </div>
          </div>
        </header>
        <div id='divider'></div>
        <div id='page-split'>
          <section id='left-page'>
            <div id='trail-overview'>
              <p id='text-block'>{trail ? trail.overview : ""}</p>
            </div>
            <div id='trail-info'>
              <div id='length'>
                Length
                <br />
                <p>{trail ? trail.length : ""} mi </p>
              </div>
              <div id='elevation'>
                Elevation gain
                <br />
                <p>{trail ? trail.elevation : ""} ft</p>
              </div>
              <div id='rtype'>
                Route Type
                <br />
                <p>{trail ? trail.route_type : ""}</p>
              </div>
            </div>
            <div id='tags'>
            </div>
            <div id='description'>
              <div id='divider'><p id='desc-header'>Description</p></div>
              <p id='text-block'>{trail ? trail.description : ""}</p>
              <div id='divider'><p id='reviews-header'>Reviews</p></div>
            </div>
            <div id='bottom'></div>
          </section>
          <section id='right-page'>
            <div id='map'>
            </div>
            <div id='nearby'>
            </div>
          </section>
      </div>

        

        
        



      </div>
    )
  }
}