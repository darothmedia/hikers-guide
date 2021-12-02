json.array! @parks do |park|
  json.extract! park, :name
end

json.array! @trails do |trail|
  json.extract! trail, :name
end