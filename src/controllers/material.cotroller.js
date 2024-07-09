const {
    material: materialModel,
    progress: progressModel
} = require('../models')

const index = async (req, res, next) => {
    const id = req.params.id
    const materials = await materialModel.findAll({
        include:[{
            model: progressModel,
            as: "progresses",
            attributes: ['status_progress'],
            where: {id_user: 1}
        }],
        where: {id_sub_bab: id}
    })

    if (materials.length === 0) {
        return res.status(404).send({
            message: "Data tidak ditemukan",
        });
    }
    
    return res.send({
        message: "Success",
        data : materials
        .map(material=>{
            return {
                thumbnail: material.thumbnail,
                nama: material.nama_material,
                xp: material.xp,
                gold: material.gold,
                checked: material.progresses[0].status_progress === 1
            }
        })
    })
}

module.exports = {index}