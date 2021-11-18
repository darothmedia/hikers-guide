class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :name, null: false
      t.integer :acreage, null: false
      t.text :description, null: false
      t.text :hours
      t.integer :contact
      t.string :fb_link
      t.string :twitter_link
      t.string :web_link
      t.float :lat
      t.float :lng
      t.string :state, null: false

      t.timestamps
    end

    add_index :parks, :name
  end
end
