import express from "express";

const server = express();

const router = express.Router();

const port = process.env.PORT || 1337;

router.get("/", (req: express.Request, res: express.Response) => {
  res.json("This works!");
});

server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
  server.use(router);
})
