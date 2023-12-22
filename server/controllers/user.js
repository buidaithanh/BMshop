const path = require("path");
const User = require("../models/user");
const ErrorHandler = require("../utils/ErrorHandler");
module.exports.createUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const file = req.file;
  console.log("hien ra", file);
  console.log("hello");
  const user = await User.findOne({ email });
  if (user) {
    console.log(user);
    return next(new ErrorHandler("User already exists", 400));
  }
  const filename = req.file.filename;
  const fileUrl = path.join(filename);
  const newUser = {
    name: name,
    email: email,
    password: password,
    avatar: fileUrl,
  };

  res.json({
    success: true,
    user: newUser,
    message: `please check your email:- to activate your account!`,
  });
};
