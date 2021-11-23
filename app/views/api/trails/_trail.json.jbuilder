json.extract! trail, :id, :name, :overview, :difficulty, :length, :elevation, :route_type, :lat, :lng, :park_id

json.trail do
  json.park trail.park
end