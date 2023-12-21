const dotenv = require("dotenv");
const app = require("./app");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const DB = process.env.DATABASE_LOCAL;
// const DB = process.env.DATABASE_CLOUD.replace(
//   "<password>",
//   process.env.DATABASE_CLOUD_PASSWORD
// );

console.log(DB);

dotenv.config("./.env");

mongoose.set("strictQuery", true);
mongoose
  .connect(DB, {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB successfully connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server is open at ${PORT}`);
});
