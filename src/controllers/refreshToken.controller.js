const jwt = require("jsonwebtoken");
const { user: userModel } = require("../models");

const refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(401);
  const user = await userModel.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decoded) =>{
    if(err) return res.sendStatus(403)
    const data = { id: user[0].id, name: user[0].name, email: user[0].email}
    const token = jwt.sign(data, process.env.JWT_SECRET, {expiresIn: "20s"})
    res.json({ token })
  })
};

module.exports = { refreshToken };
