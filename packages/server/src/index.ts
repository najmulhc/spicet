import express from "express";
import dbConnect from "./db/db-connect";
import authRouter from "./routes/auth.route";

const app = express();

const port = process.env.PORT || 4000;

await dbConnect();
// for taking
app.use(express.json());


app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.json({
    message: `${process.env.INFO}`
  });
});

app.listen(port, () => {
  console.log("Server is working in the port", port);
});
