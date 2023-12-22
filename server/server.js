const app = require("./app");
const connectDB = require("./db/Database");

//handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for handling uncaught exceptions`);
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}
//connect db
connectDB();

//create a server instance
const server = app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});

//unhandled promise  rejection
process.on("unhandledRejection", (err) => {
  console.log(`shutting down server for ${err.message}`);
  console.log(`shutting down server for unhandle promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
