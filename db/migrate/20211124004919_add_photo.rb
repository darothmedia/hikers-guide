class AddPhoto < ActiveRecord::Migration[5.2]
  def change
    add_column :trails, :m_photo, :string
  end
end
