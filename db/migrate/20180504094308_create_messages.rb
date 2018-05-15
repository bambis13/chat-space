class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text :text
      t.text :image
      t.timestamps
      t.references :user, null: false, foreign_key: true
      t.references :group, null: false, foreign_key: true
    end
  end
end
