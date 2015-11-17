json.extract! subpack, :id, :author_id, :title, :description, :url, :created_at, :updated_at, :prev, :downloads

json.author do
  json.author subpack.author, :id, :username, :email, :avatar
end

json.pack do
  json.pack subpack.pack, :id, :author_id, :title, :description, :url, :tags, :all_tags, :downloads
end

json.images do
  json.images subpack.images, :id, :url, :description
end

json.tags do
  json.tags subpack.tags, :title
end
