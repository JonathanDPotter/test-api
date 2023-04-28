import express from "express";
import router from "./routes";

const app = express();
const port = process.env.PORT || 1337;

app.listen(port, () => {
  app.use(router);
  return console.log(`Server is listening on ${port}`);
});
