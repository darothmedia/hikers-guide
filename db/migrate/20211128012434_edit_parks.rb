class EditParks < ActiveRecord::Migration[5.2]
  def change
    add_column :parks, :m_photo, :string
  end
end
