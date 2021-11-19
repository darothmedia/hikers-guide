# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  tag_type   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tag < ApplicationRecord
    has_many :trail_tags
    has_many :park_tags

    has_many :parks,
        through: :park_tags,
        class_name: :Park
    
    has_many :trails,
        through: :trail_tags,
        class_name: :Trail
end
