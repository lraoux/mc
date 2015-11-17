json.extract! image, :id, :url, :description, :created_at, :updated_at, :imageable_id, :imageable_type

json.author do
  json.extract! image.author, :id, :username, :email, :avatar
end

json.package do
  json.extract! image.imageable, :id, :author_id, :title, :description, :url
end
