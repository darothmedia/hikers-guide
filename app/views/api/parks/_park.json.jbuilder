json.extract! park, :id, :name, :overview, :difficulty, :length, :elevation, :route_type, :lat, :lng, :park_id

json.park do
  json.trails park.trails
end