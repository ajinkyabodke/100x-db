# 100x-db

## Schema Design

### - User (table name: Users)

- id: bigint serial primary key
- name: string 100 chars max (not null)
- username: string unique 50 chars max (not null)
- email: string unique 120 chars max (not null)
- emailVerifiedAt: timestamp nullable
- passwordHash: string 512 chars max (not null)
- bio: string 160 chars max (not null)
- location: string 50 chars max (nullable)
- website: string 50 chars max (nullable)
- dateOfBirth: timestamp (not null)
- createdAt: timestamp (not null, default: NOW)
- updatedAt: timestamp (not null, default: NOW)

### - Post (table name: Posts)

- id: bigint serial primary key
- type: enum ['post' | 'repost' | 'reply'] (not null, default: 'post')
- referenceId: bigint foreign key nullable (references: posts.id)
- userId: bigint foreign key (not null, references: users.id)
- content: string 280 chars max (not null)
- postedAt: timestamp nullable //drafts
- createdAt: timestamp (not null, default: NOW)
- deletedAt: timestamp nullable

### - Media (table name: Media)

- id: bigint serial primary key
- index: int (not null)
- postId: bigint foreign key nullable (references: posts.id)
- url: string 2048 chars max (not null)
- type: enum ['image' | 'video' | 'gif'] (not null)
- deletedAt: { type: DataTypes.DATE, allowNull: true }, // not including this in the actual schema since we will only get the media of Posts using SQL joins.

### - Like (table name: Likes)

- id: bigint serial primary key
- userId: bigint foreign key (not null, references: users.id)
- postId: bigint foreign key (not null, references: posts.id)
- timestamp: timestamp (not null, default: NOW) // notifications
- //not including deletedAt,coz we would just delete the record(no biz adv by storing it)

### - Follow (table name: Follows)

- id: bigint serial primary key
- followerId: bigint foreign key (not null, references: users.id)
- followingId: bigint foreign key (not null, references: users.id)
- timestamp: timestamp (not null, default: NOW) // notifications
- //not including deletedAt
