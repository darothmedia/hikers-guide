json.array! @parks do |park|
  json.extract! park, :id, :name
end

json.array! @trails do |trail|
  json.extract! trail, :id, :name, :park_id
end