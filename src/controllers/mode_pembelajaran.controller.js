const { where } = require('sequelize')
const {mode_pembelajaran: mode_pembelajaranModel} = require('../models')

const index = async (req, res, next) => {
    const {id} = req.params
    const mode_pembelajaran = await mode_pembelajaranModel.findAll({
        where:{
            id_kelas: id
        }
    })

    if (mode_pembelajaran.length === 0) {
        return res.status(404).send({
            message: "Data tidak ditemukan",
        });
    }
    
    return res.send({
        message: "Success",
        data : mode_pembelajaran.map(mode=>{
            return {
                id: mode.id,
                nama: mode.nama_mode_pembelajaran   
            }
        })
    })
}

module.exports = {index}