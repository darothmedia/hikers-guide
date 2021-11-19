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
class ParkTag < ApplicationRecord
  belongs_to :park,
    class_name: :Park

  belongs_to :tag,
    class_name: :Tag
end
