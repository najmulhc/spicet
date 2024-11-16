import express from "express";

const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({
    message: "Congratulations! you can see the data from backend."
  });
});

app.listen(port, () => {
  console.log("Server is working in the port", port);
});
