class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :tag_id, null: false
      t.integer :tagable_id, null: false
      t.string :tagable_type, null: false

      t.timestamps null: false
    end
  end
end
