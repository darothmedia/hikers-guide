# == Schema Information
#
# Table name: park_tags
#
#  id         :bigint           not null, primary key
#  tag_id     :integer          not null
#  park_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class ParkTagTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
