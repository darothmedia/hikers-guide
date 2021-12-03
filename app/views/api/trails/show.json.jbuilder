json.extract! @trail, :id, :name, :overview, :description, :difficulty, :length, :elevation, :route_type, :lat, :lng, :park_id
json.park @trail.park.name
json.parkId @trail.park.id
json.mainPhotoUrl url_for(@trail.main_photo)
json.reviews @trail.reviews, :id, :body, :rating, :actdate, :author_id