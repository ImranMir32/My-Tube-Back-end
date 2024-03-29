const asyncHandler = require("../utils/asyncHandler");

const registerUser = (req, res) => {
  console.log("yess");
  res.status(200).json({
    message: "ok",
  });
};

module.exports = {
  registerUser,
};
