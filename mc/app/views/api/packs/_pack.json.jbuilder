json.extract! pack, :id, :author_id, :title, :description, :url, :created_at, :updated_at, :prev, :downloads

json.author do
  json.author pack.author, :id, :username, :email, :avatar
end

json.subpacks do
  json.subpacks pack.subpacks, :id, :author_id, :title, :description, :url, :pack, :images, :downloads, :tags
end

json.images do
  json.images pack.images, :id, :url, :description
end

json.all_images do
  json.all_images pack.all_images, :id, :url, :description
end

json.tags do
  json.tags pack.tags, :title
end

json.all_tags do
  json.all_tags pack.all_tags, :title
end
