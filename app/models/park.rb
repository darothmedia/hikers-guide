# == Schema Information
#
# Table name: parks
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  acreage      :integer          not null
#  description  :text             not null
#  hours        :text
#  contact      :string
#  fb_link      :string
#  twitter_link :string
#  web_link     :string
#  lat          :float
#  lng          :float
#  state        :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  m_photo      :string
#
class Park < ApplicationRecord
  validates :name, :acreage, :description, :state, presence: true

  has_many :trails
  has_many :park_tags
  has_many :tags,
    through: :park_tags,
    class_name: :Tag

end
