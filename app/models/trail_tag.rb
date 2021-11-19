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
class TrailTag < ApplicationRecord
  belongs_to :trail,
    class_name: :Trail
    
  belongs_to :tag,
    class_name: :Tag

end
