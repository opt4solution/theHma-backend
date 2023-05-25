const User = require("../database/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  try {
    let users = await User.find()
      .select("-password")
      .then((data) => {
        res.status(200).json({
          data,
          length: data.length,
        });
      })
      .catch((err) => res.status(400).json("Incorrect request, try again"));
  } catch (err) {
    console.log(err.messsage);
  }
};

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("All fields are mandatory.");
    }
    let user = await User.findOne({ email });
    // compare password with hashed password --->
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            name: user.name,
            email: user.email,
            id: user.id,
            role: user.role,
          },
        },
        process.env.JWT_SECRETE,
        { expiresIn: "20m" }
      );
      res.status(200).json({ accessToken });
    } else {
      res.status(400);
      throw new Error("Email or Password is not valid.");
    }
  } catch (err) {
    res.status(400).json(err.messsage);
  }
};

module.exports = { postUser, getUsers };
