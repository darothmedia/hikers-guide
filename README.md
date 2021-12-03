# [HikersGuide](https://hikers-guide.herokuapp.com/)

![HikersGuide Header](https://hikers-guide.s3.us-west-1.amazonaws.com/logo/img/logo/hikersGuideLogo4x.png "HikersGuide Logo")

HikersGuide is a clone of AllTrails where users can log in, create/write/update/delete reviews of a trail, and view park / trail detail pages with helpful info. The site draws references from The Hitchhiker's Guide to the Galaxy, and has several easter eggs that fans of the book will appreciate.

### **Tech Stack:**

* **Database:** PostgreSQL
* **Backend:** Ruby on Rails
* **Queries:** jQuery AJAX
* **Frontend:** React-Redux (JavaScript)

## Components:
* **Image Hosting:** AWS S3 with Rails Active Storage
* **Mapping:** Mapbox GL JS

### **Features:**
HikersGuide's primary content is trail listings, with secondary park listings that contain
lists of trails.

## Home Page:
The home page contains a dynamic search bar that populates results as a user types. Users can click through to a given trail or park from the search results.

![Search Bar SG](https://hikers-guide.s3.us-west-1.amazonaws.com/screenshots/Screen+Shot+2021-12-03+at+9.41.30+AM.png, "Search Bar Component")

The search results component receives both trail and park results. It assesses the type of result based on the existance of a "park_id" in the returned JSON, and renders the correct icon and link for a given result.

```js
render() {
    const searchResults = this.props.results.map((result, i) => (
      <li id='result-mod' key={i}>
        {result.park_id ? (this.trailLink(result)) : (this.parkLink(result))}
      </li>
    ))

trailLink(result) {
    return(
      <Link to={`/trails/${result.id}`} key={result.id} className={result} id={result.id}>
        <div id='result-icon'><FaMapMarkerAlt color='#629730' size={30} key={result.id} /> </div>
        <p id='result-name'>{result.name}</p>
      </Link>
    )
  }

parkLink(result) {
    return (
      <Link to={`/parks/${result.id}`} key={result.id} className={result} id={result.id}>
        <div id='result-icon'><FaTree color='#629730' size={30} key={result.id} /> </div>
        <p id='result-name'>{result.name}</p>
      </Link>
    )
  }
```

## Trails:
Users can interact with trails by leaving reviews. These reviews are shown on a given trail and update the trail's average review, which is featured throughout the site.

All the site's trails have the following details:
* Primary Photo
* Overview
* Difficulty
* Average Rating
* Park (belongs to association)
* Length
* Route Type
* Elevation Gain
* Mapbox module with trailhead marker
* Reviews
  * Reviewer first & last name
  * Rating
  * Review Body

## Parks:

 



[HikersGuide Design Documents](https://github.com/darothmedia/hikers-guide/wiki)

