class EditTrails < ActiveRecord::Migration[5.2]
  def change
    change_column :parks, :contact, :string
  end
end
