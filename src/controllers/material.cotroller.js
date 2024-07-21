const {
    material: materialModel,
    progress: progressModel
} = require('../models')

const index = async (req, res, next) => {
    const id = req.params.id
    const userId = req.user.id
    const materials = await materialModel.findAll({
        attributes: ['nama_material', 'thumbnail', 'xp', 'gold'],
        where: {id_sub_bab: id},
        include:[{
            model: progressModel,
            as: "progresses",
            attributes: ['status_progress'],
            where: {id_user: userId},
            required: false
        }],
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
                id: material.id,
                thumbnail: material.thumbnail,
                nama: material.nama_material,
                xp: material.xp,
                gold: material.gold,
                checked: material.progresses.length === 0 ? false : material.progresses[0].status_progress 
            }
        })
    })
}

module.exports = {index}