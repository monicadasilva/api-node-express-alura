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
db.createCollection("authors", { capped: false });

db.authors.insertMany([
  {
    author: "Author I",
    country: "Nationality I",
  },
  {
    author: "Author II",
    country: "Nationality II",
  },
  {
    author: "Author III",
    country: "Nationality III",
  },
]);

db.createCollection("publishers", { capped: false });

db.publishers.insertMany([
  {
    publisher: "Publisher I",
    country: "Country I",
    state: "State I",
    city: "City I",
  },
  {
    publisher: "Publisher II",
    country: "Country II",
    state: "State II",
    city: "City II",
  },
  {
    publisher: "Publisher III",
    country: "Country III",
    state: "State III",
    city: "City III",
  },
]);
