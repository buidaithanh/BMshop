const mongose = require("mongoose");

const connectDB = () => {
  mongose.connect(process.env.MONGODB_URL).then((data) => {
    console.log(`mongodb connected with server: ${data.connection.host}`);
  });
};

module.exports = connectDB;
