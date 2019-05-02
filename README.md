# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false, foreign_key: true|
|e_mail|string|null: false, foreign_key: true|

### Association
- has_many :groups, through: :members

- has_many :messages
- has_many :members



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :users, through: :members

- belongs_to :member

- has_many :messages



## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false, foreign_key: true|
|image|string|foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
