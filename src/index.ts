import express from "express";
import router from "./routes";

const app = express();
const port = process.env.PORT || 1337;

app.use(router);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
