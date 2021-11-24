import React from "react";

export default class TrailPage extends React.Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    this.props.fetchTrail(this.props.match.params.trailId)
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps !== this.props) {
  //     this.props.fetchTrail(this.props.trailId)
  //   }
  // }
  
  render(){
    return (
      <div>
        {console.log(this.props.trailId)}
        <h1>{this.props.trail ? this.props.trail.name : ""}</h1>
      </div>
    )
  }
}