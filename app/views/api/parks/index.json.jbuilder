json.array! @parks do |park|
  json.extract! park, :id, :name, :acreage, :state, :m_photo
  json.trails park.trails, :id, :name
end