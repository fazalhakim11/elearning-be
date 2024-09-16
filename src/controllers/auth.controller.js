const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { user: userModel } = require("../models");
const { progress: progressModel } = require("../models");
const { where } = require("sequelize");

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await userModel.create({
      nama_user: name,
      email,
      password: passwordHash,
    });

    if (!user) {
      return res.status(500).send({
        message: "Failed to register user",
        data: null,
      });
    }

    // Bulk create progress entries for the new user
    await progressModel.bulkCreate([
      { status_progress: false, id_user: user.id, id_material: 1 },
      { status_progress: false, id_user: user.id, id_material: 2 },
      { status_progress: false, id_user: user.id, id_material: 3 },
      { status_progress: false, id_user: user.id, id_material: 4 },
      { status_progress: false, id_user: user.id, id_material: 5 },
      { status_progress: false, id_user: user.id, id_material: 6 },
    ]);

    // Respond with success message
    res.send({
      message: "User successfully registered",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("Data", [email, password]);

  const user = await userModel.findOne({ where: { email } });
  if (!user) {
    res.status(401).send({ message: "Email is not registered" });
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    res.status(401).send({ message: "Invalid password" });
  }

  const data = {
    id: user.id,
    email: user.email,
    name: user.nama_user,
  };
  const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "20s" });
  const refreshToken = jwt.sign(data, process.env.REFRESH_TOKEN, {
    expiresIn: "1d",
  });

  await userModel.update(
    { refresh_token: refreshToken },
    {
      where: {
        id: user.id,
      },
    }
  );

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.send({
    message: "Login Successfull",
    data: {
      token,
    },
  });
};

const logout = async (req, res)=>{
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await userModel.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id
  await userModel.update({ refresh_token: null}, {
    where: {
      id: userId
    }
  })
  res.clearCookie('refreshToken')
  return res.status(200).send('Logged out successfully')
}

module.exports = { register, login, logout };
