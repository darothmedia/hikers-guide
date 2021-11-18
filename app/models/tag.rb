# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  type       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tag < ApplicationRecord
    has_many :trail_tags, as: :trail_taggable
    has_many :park_tags, as: :park_taggable
end
