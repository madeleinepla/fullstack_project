json.(@list, :id, :title, :author_id, :title, :body, :created_at, :updated_at)
json.author @list.author
json.list_items @list.list_items