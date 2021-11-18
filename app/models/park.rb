# == Schema Information
#
# Table name: parks
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  acreage      :integer          not null
#  description  :text             not null
#  hours        :text
#  contact      :integer
#  fb_link      :string
#  twitter_link :string
#  web_link     :string
#  lat          :float
#  lng          :float
#  state        :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Park < ApplicationRecord
  validates :name, :acreage, :description, :state, presence: true

  has_many :trails
  has_many :tags, as: :park_taggable


end