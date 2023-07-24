const express = require("express");
const handleError = require("./shared/errors/handle");
const config = require("./shared/config");
const userRouter = require("./modules/users/_api");
const descRouter = require("../src/modules/description/_api");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(userRouter);
app.use(descRouter);
app.use(handleError);

app.listen(config.port, () => {
  console.log(`http://${config.db.host}:${config.port}`);
});
