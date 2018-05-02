
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|


### Association

- has_many messages

- has_many members

- has_many groups, through :members



## membersテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|


### Association

- belongs_to group

- belongs_to user




## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|owner|references|null: false, foreign_key: true|


### Association

- has_many members

- has_many messages

- has_many users, through: member



## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text| |
|image|text| |
|created_at|timestamp|null: false|
|user_id|integer|null: false, foreign_key: true |
|group_id|integer|null: false, foreign_key: true|


### Association

- belongs_to user

- belongs_to group


