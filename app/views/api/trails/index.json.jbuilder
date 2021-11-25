json.array! @trails do |trail|
  json.extract! trail, :id, :name, :difficulty, :length, :m_photo
  json.park trail.park.name
  json.mainPhoto trail.main_photo
end