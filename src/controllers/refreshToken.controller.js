const jwt = require("jsonwebtoken");
const { user: userModel } = require("../models");

const refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.status(401);
  const user = await userModel.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user) return res.status(403);
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) =>{
    if(err) return res.status(403)
    const data = { userId: user[0].id, name: user[0].name, email: user[0].email}
    const token = jwt.sign(data, process.env.JWT_SECRET, {expiresIn: "20s"})
    res.json({ token })
  })
};

module.exports = { refreshToken };
