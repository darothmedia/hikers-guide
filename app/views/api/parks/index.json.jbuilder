json.array! @parks do |park|
  json.extract! park, :id, :name, :acreage, :state
  json.trails park.trails, :id, :name
end