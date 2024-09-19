const { progress: progressModel } = require('../models')

const index = async (req, res, next) => {
    const { userId, materialId } = req.body
    
    await progressModel.update(
        { status_progress: true },
        {
          where: {
            id_user: userId,
            id_material: materialId
          }
        }
    )
    .then((progress) => {
        if (!progress) {
          return res.status(500).send({
            message: "Failed to update progress",
            data: null,
          });
        }
  
        return res.send({
          message: "Successfully updated progress!",
          data: null,
        });
      })
      .catch((err) => {
        next(err);
      })
}

module.exports = {index}