@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :body, :rating, :actdate, :author_id, :trail_id
    json.author review.author, :id, :fname, :lname
  end
end

# json.array! @reviews do |review|
#   json.extract! review, :id, :body, :rating, :actdate, :author_id, :trail_id
#   json.author review.author, :id, :fname, :lname
# end