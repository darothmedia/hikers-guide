# == Schema Information
#
# Table name: trails
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  overview    :text             not null
#  description :text
#  difficulty  :string           not null
#  length      :float            not null
#  elevation   :integer          not null
#  route_type  :string           not null
#  lat         :float
#  lng         :float
#  park_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Trail < ApplicationRecord

  validates :name, :overview, :difficulty, :length, :elevation, :route_type, :park_id, presence: true
  belongs_to :park
  has_many :reviews, as: :reviewable
  has_many :tags, as: :trail_taggable

end
