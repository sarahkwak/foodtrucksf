class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.references :user
      t.references :food
      t.integer :rating
      t.string :comment

      t.timestamps null: false
    end
  end
end
