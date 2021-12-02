json.extract! @park, :id, :name, :acreage, :description, :hours, :contact, :fb_link, :twitter_link, :web_link, :lat, :lng, :state, :m_photo
json.trails @park.trails do |trail|
  json.extract! trail, :id, :name, :difficulty, :length, :m_photo, :lat, :lng
  json.mainPhotoUrl url_for(trail.main_photo)
end