import app from "./src/app.js";

const port = process.env.PORT || 3000;

app.listen(port, (err, res) => {
  console.log(`Listening on ${port}`);
});
