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
#  m_photo     :string
#
class Trail < ApplicationRecord

  validates :name, :overview, :difficulty, :length, :elevation, :route_type, :park_id, presence: true
  validates :difficulty, inclusion: {in: ['Easy', 'Moderate', 'Hard']}
  validates :route_type, inclusion: {in: ['Out & Back', 'Loop', 'Point-to-Point']}
  
  has_one_attached :main_photo
  belongs_to :park
  has_many :reviews
  has_many :trail_tags
  has_many :tags,
    through: :trail_tags,
    class_name: :Tag

end
