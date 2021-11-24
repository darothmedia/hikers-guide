json.array! @trails do |trail|
  json.extract! trail, :id, :name, :overview, :difficulty, :length, :elevation, :route_type, :lat, :lng, :park_id, :m_photo
  json.park trail.park.name
  json.mainPhoto trail.main_photo
end