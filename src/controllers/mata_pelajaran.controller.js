const { where } = require('sequelize')
const {mata_pelajaran: mata_pelajaranModel} = require('../models')

const index = async (req, res, next) => {
    const id = req.params.id
    const mata_pelajaran = await mata_pelajaranModel.findAll({
        where:{
            id_mode_pembelajaran: id
        }
    })

    if (mata_pelajaran.length === 0) {
        return res.status(404).send({
            message: "Data tidak ditemukan",
        });
    }
    
    return res.send({
        message: "Success",
        data : mata_pelajaran.map(mode=>{
            return {
                icon: mode.icon_mata_pelajaran,
                nama: mode.nama_mata_pelajaran,
            }
        })
    })
}

module.exports = {index}