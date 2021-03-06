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
const gpsroute = require("./routes/gpsroute");
const { response } = require("express");
app.use(auhtroute);
app.use(gpsroute);

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

app.get("/", requireToken, (request, response) => {
  response.send({ email: request.user.email });
});

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
