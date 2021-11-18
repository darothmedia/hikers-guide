class CreateTrails < ActiveRecord::Migration[5.2]
  def change
    create_table :trails do |t|
      t.string :name, null: false
      t.text :overview, null: false
      t.text :description
      t.string :difficulty, null: false
      t.float :length, null: false
      t.integer :elevation, null: false
      t.string :route_type, null: false
      t.float :lat
      t.float :lng
      t.integer :park_id, null: false

      t.timestamps
    end

    add_index :trails, :name
    add_index :trails, :park_id
  end
end
