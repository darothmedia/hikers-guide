json.extract! @review, :id, :body, :rating, :actdate, :author_id, :trail_id
json.author @review.author, :id, :fname, :lname
json.trail @review.trail, :id, :name