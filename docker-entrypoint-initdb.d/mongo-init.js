// Create db
db = db.getSiblingDB("books");

db.createUser({
  user: "monica",
  pwd: "m123",
  roles: [
    {
      role: "readWrite",
      db: "books",
    },
  ],
  mechanisms: ["SCRAM-SHA-1"],
});

// Authenticate user
db.auth({
  user: "monica",
  pwd: "m123",
  mechanisms: ["SCRAM-SHA-1"],
  digestPassword: true,
});

// Create collection
db.createCollection("books_list", { capped: false });

db.books_list.insertMany([
  {
    book: "book1",
    author: "helpdev",
    publisher: "EVENT_A",
    pages: 125,
  },
  {
    book: "book2",
    author: "helpdev",
    publisher: "EVENT_B",
    pages: 123,
  },
  {
    book: "book3",
    author: "github",
    publisher: "EVENT_C",
    pages: 254,
  },
]);
