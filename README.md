# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_name|text|null: false, foreign_key: true|
|e_mail|string|null: false, foreign_key: true|

### Association
- has_many :groups
- has_many :massages
- has_many :members



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|text|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :member

- has_many :massages



## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false, foreign_key: true|
|image|string|foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user



## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
- belongs_to :group
