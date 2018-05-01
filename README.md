
## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string||


add_index :name

belongs_to member

has_many messages



## memberテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|string|null: false, foreign_key: true|
|user_id|string|null: false, foreign_key: true|

belongs_to group

has_many users

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|text|text| |
|image|text| |
|created_at|timestamp|null: false|
|user_id|integer|null: false, foreign_key: true |
|group_id|integer|null: false, foreign_key: true|

belongs_to user

belongs_to group

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|owner|integer|null: false, foreign_key: true|


has_many members

has_many messages


