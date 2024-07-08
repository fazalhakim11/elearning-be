const { where,literal, Op, fn, col, Sequelize } = require('sequelize')
const {bab: babModel} = require('../models')
const {sub_bab: sub_babModel} = require('../models')
const {progress: progressModel} = require('../models')
const {material: materialModel} = require('../models')

const index = async (req, res, next) => {
    const id = req.params.id
    const progress = await sub_babModel.findAll({
        attributes: [
          'id_bab',
          [Sequelize.fn('SUM', Sequelize.literal('CASE WHEN complete THEN 1 ELSE 0 END')), 'completedCount'],
          [Sequelize.fn('COUNT', Sequelize.col('id')), 'totalCount'],
          [Sequelize.literal('SUM(CASE WHEN complete THEN 1 ELSE 0 END) * 1.0 / COUNT(id)'), 'progress']
        ],
        where: {
          id_bab: {
            [Op.in]: Sequelize.literal(`(SELECT id_bab FROM babs WHERE id_mata_pelajaran = ${id})`)
          }
        },
        group: ['id_bab']
      })
    const bab = await babModel.findAll({
        attributes: [
            'id',
            'nama_bab', 
            'icon_bab',
            [literal('(select COUNT(id) FROM sub_babs WHERE sub_babs.id_bab = bab.id AND sub_babs.label = 1)'), 'total_sub_bab_gratis'],
        ],
        where:{
            id_mata_pelajaran: id
        },
    })

    if (bab.length === 0) {
        return res.status(404).send({
            message: "Data tidak ditemukan",
        });
    }

    return res.send({
        message: "Success",
        bab, 
        progress
    })
}

module.exports = {index}