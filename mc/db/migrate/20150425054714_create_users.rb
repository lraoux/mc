class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :avatar, default: "https://s3-us-west-1.amazonaws.com/asco-jkh/layout/defavie.jpg"

      t.timestamps null: false
    end
  end
end
