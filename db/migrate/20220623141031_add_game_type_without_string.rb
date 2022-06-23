class AddGameTypeWithoutString < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :type, :string, array: true, default: []
  end
end
