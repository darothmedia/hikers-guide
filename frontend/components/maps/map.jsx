import mapboxgl from "mapbox-gl";
import React from "react";

export default class TrailMap extends React.Component {
  constructor(props) {
    super(props)
    this.lat = this.props.lat
    this.lng = this.props.lng
    this.token = this.props.token
  }

  componentDidMount(){
    mapboxgl.accessToken = this.token
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [this.lng, this.lat],
      zoom: 13
    })

    const mapnav = new mapboxgl.NavigationControl({
      showCompass: true,
      showZoom: true,
      visualizePitch: true
    });
    this.map.addControl(mapnav, 'bottom-right')

    const trailhead = new mapboxgl.Marker({
      draggable: false,
      color: '#629730'
    })
      .setLngLat([this.lng, this.lat])
      .addTo(this.map)
  }

  render(){
    return (
      <div ref={e => this.mapContainer = e} id='map-container'>
      </div>
    )

  }
  

}