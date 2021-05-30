const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { mogourl } = require("./key");

app.use(cors());
app.use(express.json());

require("./models/User");
app.use(bodyParser.json());

const requireToken = require("./middleware/requireToken");
const auhtroute = require("./routes/auhtroute");
const { response } = require("express");
app.use(auhtroute);

mongoose
  .connect(mogourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

mongoose.connection.on("connected", () =>
  console.log("Connected to mongo data")
);
mongoose.connection.on("error", (err) => console.log(err));

app.get("/", requireToken, (req, res) => {
  response.send({ email: req.user.email });
});

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
