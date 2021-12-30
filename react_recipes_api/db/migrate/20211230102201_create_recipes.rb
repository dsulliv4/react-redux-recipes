class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :category
      t.string :description
      t.boolean :vegan
      t.boolean :gluten_free
      t.boolean :contains_dairy
      t.boolean :contains_nuts
      t.string :image
      t.integer :user_id

      t.timestamps
    end
  end
end
