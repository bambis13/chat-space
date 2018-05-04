class CreateMembers < ActiveRecord::Migration[5.1]
  def change
    create_table :members do |t|
      t.references :group_id,  null: false, foreign_key: true
      t.references :user_id,   null: false, foreign_key: true
      t.timestamps
    end
  end
end
