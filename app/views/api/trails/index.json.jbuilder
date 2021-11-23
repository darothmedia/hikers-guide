json.array! @trails do |trail|
  json.partial! 'api/trails/trail', trail: trail
end