// Create user
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

// Create DB and collection
db.createCollection("books_list", { capped: false });

db.books_list.insertMany([
  {
    book: "book1",
    author: "helpdev",
    publisher: "EVENT_A",
    pages: "http://rest_client_1:8080/wh",
  },
  {
    book: "book2",
    author: "helpdev",
    publisher: "EVENT_B",
    pages: "http://rest_client_2:8081/wh",
  },
  {
    book: "book3",
    author: "github",
    publisher: "EVENT_C",
    pages: "http://rest_client_3:8082/wh",
  },
]);
