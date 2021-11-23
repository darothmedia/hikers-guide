json.array! @trails do |trail|
  json.extract! trail, :id, :name, :overview, :difficulty, :length, :elevation, :route_type, :lat, :lng, :park_id
  json.park trail.park.name
end