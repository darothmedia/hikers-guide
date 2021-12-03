json.array! @trails do |trail|
  json.extract! trail, :id, :name, :difficulty, :length, :lat, :lng
  json.park trail.park.name
  json.mainPhoto trail.main_photo
  json.mainPhotoUrl url_for(trail.main_photo)
  json.reviews trail.reviews, :id, :rating
end