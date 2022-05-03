const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./src/user/user.router");

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/user", userRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server initied`);
});

app.use((error, req, res, next) => {
  res.status(error.status).json({
    message: error.message
  });
});
