class CreateParkTags < ActiveRecord::Migration[5.2]
  def change
    create_table :park_tags do |t|
      t.integer :tag_id, null:false
      t.integer :park_id, null:false

      t.timestamps
    end

    add_index :park_tags, :tag_id
    add_index :park_tags, :park_id
  end
end
