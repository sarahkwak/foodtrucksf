class AddDetailsToFoods < ActiveRecord::Migration
  def change
    add_column :foods, :longitude, :string
    add_column :foods, :latitude, :string
    add_column :foods, :fooditems, :string
  end
end
