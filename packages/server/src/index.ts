import express from "express";
import dbConnect from "./db/db-connect";

const app = express();

const port = process.env.PORT || 4000;

await dbConnect() ;

app.get("/", (req, res) => {
  res.json({
    message: `${process.env.INFO}`
  });
});

app.listen(port, () => {
  console.log("Server is working in the port", port);
});
