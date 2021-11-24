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
require 'test_helper'

class TrailTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
