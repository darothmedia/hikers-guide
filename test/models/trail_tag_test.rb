# == Schema Information
#
# Table name: trail_tags
#
#  id         :bigint           not null, primary key
#  tag_id     :integer          not null
#  trail_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class TrailTagTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
