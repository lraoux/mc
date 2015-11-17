class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :url, null: false
      t.string :description, default: ''
      t.integer :imageable_id, null: false, index: true
      t.string :imageable_type, null: false

      t.timestamps null: false
    end
  end
end
