class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :body, null: false
      t.string :type, null: false

      t.timestamps
    end

    add_index :tags, :body
  end
end
