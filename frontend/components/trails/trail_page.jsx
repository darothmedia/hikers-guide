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
          <image>
            {/* <img src={this.props.trail.mPhoto ? this.props.trail.mPhoto : ""} alt="" /> */}
          </image>
          <div id='top-info'>
            <h1>{trail ? trail.name : ""}</h1>
            <div className='difficulty' id={trail ? trail.difficulty : ""}>{trail ? trail.difficulty : ""}</div>
            <h2>{trail ? trail.park : ""}</h2>
          </div>
        </header>
        <div id='divider'></div>
        <div id='page-split'>
          <section id='left-page'>
            <div id='trail-overview'>
              <p>{trail ? trail.overview : ""}</p>
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
              <div id='divider'><p>Description</p></div>
              <p>{trail ? trail.description : ""}</p>
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