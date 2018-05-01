#README
## userテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string||
|email|text|null: false, foreign_key: true, unique: true|
|password|text|null: false|


add_index :name



## membersテーブル
|id|string|null: false, foreign_key: true|
|group_id|string|null: false, foreign_key: true|
|user_id|string|null: false, foreign_key: true|

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|text|text| |
|image|text| |
|created_at|timestamp|null: false|
|user_id|string|null: false, foreign_key: true |
|group_id|integer|null: false, foreign_key: true|

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|owner|integer|null: false, foreign_key: true|


