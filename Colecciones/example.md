 Mongo db model layout

## Database

**Name:** gamestore

## Collections

### games

- _id (ObjectId)
- title (string)
- description (string)
- price (int)
- release_date (date)
- developer (string)
- platform (string)
- genres (array of strings)
- rating (int)
- reviews (array of documents)
- characteristics (array of strings)
- related_games (array of documents)
- achievements (array of strings)
- user_id (ObjectId)
- rating (int)
- comment (string)
- image_url (string)
- video_url (string)

### users

- _id (ObjectId)
- username (string)
- email (string)
- password (string)
- games_owned (array of documents)
- game_id (ObjectId)
- purchase_date (date)
- wishlist (array of ObjectIds)
- reviews (array of documents)
- game_id (ObjectId)
- rating (int)
- comment (string)

### carts

- _id (ObjectId)
- user_id (ObjectId)
- games (array of ObjectIds)
- game_id (ObjectId)
- quantity (int)


### library

- _id (ObjectId)
- user_id (ObjectId)
- games (array of ObjectIds)
- game_id (ObjectId)
- purchase_date (date)

## Documents

### Games

```json
{
    "_id": ObjectId("5f9b3b3b3b3b3b3b3b3b3b3b"),
    "title": "Game Title",
    "description": "Game description",
    "price": 59.99,
    "release_date": ISODate("2020-10-29T00:00:00.000Z"),
    "developer": "Game Developer",
    "platform": "PC",
    "genres": ["Action", "Adventure"],
    "rating": 4,
    "reviews": [
        {
            "user_id": ObjectId("5f9b3b3b3b3b3b3b3b3b3b3b"),
            "rating": 4,
            "comment": "Game is good"
        }
    ],
    "related_games": [
        {
            "game_id": ObjectId("5f9b3b3b3b3b3b3b3b3b3b3b"),
            "title": "Related Game Title",
            "image_url": "https://www.google.com"
        }
    ],
    "achievements": ["Achievement 1", "Achievement 2"],
    "characteristics": ["singleplayer", "multiplayer", "online", "co-op", "controller support"],
    "image_url": "https://www.google.com",
    "video_url": "https://www.google.com"
}
```

db.createCollection("games", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "title", "description", "price", "release_date", "developer", "platform", "genres", "rating", "reviews", "characteristics", "related_games", "achievements", "user_id", "rating", "comment", "image_url", "video_url" ],
         properties: {
            title: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            description: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            price: {
               bsonType: "int",
               description: "must be an integer and is required"
            },
            release_date: {
               bsonType: "date",
               description: "must be a date and is required"
            },
            developer: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            platform: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            genres: {
               bsonType: "array",
               description: "must be an array of strings and is required"
            },
            rating: {
               bsonType: "int",
               description: "must be an integer and is required"
            },
            reviews: {
               bsonType: "array",
               description: "must be an array of documents and is required"
            },
            characteristics: {
               bsonType: "array",
               description: "must be an array of strings and is required"
            },
            related_games: {
               bsonType: "array",
               description: "must be an array of documents and is required"
            },
            achievements: {
               bsonType: "array",
               description: "must be an array of strings and is required"
            },
            user_id: {
               bsonType: "objectId",
               description: "must be an objectId and is required"
            },
            rating: {
               bsonType: "int",
               description: "must be an integer and is required"
            },
            comment: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            image_url: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            video_url: {
               bsonType: "string",
               description: "must be a string and is required"
            }
         }
      }
   }
})

db.createCollection("games", {validator: {$jsonSchema: {bsonType: "object", required: ["title", "description", "price", "release_date", "developer", "platform", "genres", "rating", "reviews", "characteristics", "related_games", "achievements", "user_id", "comment", "image_url", "video_url"], properties: {title: {bsonType: "string", description: "must be a string and is required"}, description: {bsonType: "string", description: "must be a string and is required"}, price: {bsonType: "int", description: "must be an integer and is required"}, release_date: {bsonType: "date", description: "must be a date and is required"}, developer: {bsonType: "string", description: "must be a string and is required"}, platform: {bsonType: "string", description: "must be a string and is required"}, genres: {bsonType: "array", description: "must be an array of strings and is required"}, rating: {bsonType: "int", description: "must be an integer and is required"}, reviews: {bsonType: "array", description: "must be an array of documents and is required"}, characteristics: {bsonType: "array", description: "must be an array of strings and is required"}, related_games: {bsonType: "array", description: "must be an array of documents and is required"}, achievements: {bsonType: "array", description: "must be an array of strings and is required"}, user_id: {bsonType: "objectId", description: "must be an objectId and is required"}, comment: {bsonType: "string", description: "must be a string and is required"}, image_url: {bsonType: "string", description: "must be a string and is required"}, video_url: {bsonType: "string", description: "must be a string and is required"}}}}})

db.createCollection("library", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "user_id", "games", "game_id", "purchase_date" ],
         properties: {
            user_id: {
               bsonType: "objectId",
               description: "must be an objectId and is required"
            },
            games: {
               bsonType: "array",
               description: "must be an array of ObjectIds and is required"
            },
            game_id: {
               bsonType: "objectId",
               description: "must be an objectId and is required"
            },
            purchase_date: {
               bsonType: "date",
               description: "must be a date and is required"
            }
         }
      }
   }
})

db.createCollection("carts", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "user_id", "games", "game_id", "quantity" ],
         properties: {
            user_id: {
               bsonType: "objectId",
               description: "must be an objectId and is required"
            },
            games: {
               bsonType: "array",
               description: "must be an array of ObjectIds and is required"
            },
            game_id: {
               bsonType: "objectId",
               description: "must be an objectId and is required"
            },
            quantity: {
               bsonType: "int",
               description: "must be an integer and is required"
            }
         }
      }
   }
})