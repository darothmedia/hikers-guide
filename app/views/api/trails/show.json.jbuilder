json.extract! @trail, :id, :name, :overview, :description, :difficulty, :length, :elevation, :route_type, :lat, :lng, :park_id, :m_photo
json.park @trail.park.name
json.parkId @trail.park.id
json.mainPhoto @trail.main_photo
json.reviews @trail.reviews, :id, :body, :rating, :actdate, :author_id