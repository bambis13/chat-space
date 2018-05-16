class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.text :text
      t.text :image
      t.timestamps
      t.integer :user_id, null: false, foreign_key: true
      t.integer :group_id, null: false, foreign_key: true
    end
  end
end
