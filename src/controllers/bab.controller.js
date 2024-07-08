const { where,literal } = require('sequelize')
const {bab: babModel} = require('../models')

const index = async (req, res, next) => {
    const id = req.params.id
    const bab = await babModel.findAll({
        attributes: [
            'nama_bab', 
            'icon_bab',
            [literal('(SELECT COUNT(id) FROM sub_babs WHERE sub_babs.id_bab = bab.id AND sub_babs.label = 1)'), 'total_sub_bab_gratis']
        ],
        where:{
            id_mata_pelajaran: id
        }
    })

    if (bab.length === 0) {
        return res.status(404).send({
            message: "Data tidak ditemukan",
        });
    }

    return res.send({
        message: "Success",
        data : bab
    })
}

module.exports = {index}