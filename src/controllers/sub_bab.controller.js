const { where,literal, Op, fn, col, query } = require('sequelize')
const {Sequelize} = require('../models')
const {bab: babModel} = require('../models')
const {sub_bab: sub_babModel} = require('../models')
const {progress: progressModel} = require('../models')
const {material: materialModel} = require('../models')

const index = async (req, res, next) => {
    const id = req.params.id
    const userId = req.user.id
    const sub_bab = await sub_babModel.findAll({
        attributes: [
            'id',
            'label',
            'nama_sub_bab', 
            'icon_sub_bab',
        ],
        include: [{
            model: materialModel,
            as: "material",
            attributes: ['nama_material'],
            include :[{
                model: progressModel,
                as: "progresses",
                attributes: ['status_progress'],
                where: {id_user : userId}
            }]
        }],
        where:{
            id_bab: id
        },
    })

    if (sub_bab.length === 0) {
        return res.status(404).send({
            message: "Data tidak ditemukan",
        });
    }

    return res.send({
        message: "Success",
        sub_bab: sub_bab
        .map(sub=>{
            const totalProgress = sub.material.reduce((total, material) => {
                return total + material.progresses.reduce((total, progress) => {
                  return total + progress.status_progress;
                }, 0);
              }, 0);
            const progress = totalProgress/sub.material.length
            return {
                id: sub.id,
                icon: sub.icon_sub_bab,
                nama: sub.nama_sub_bab,
                label: sub.label,
                progress: progress
            }
        }),
    })
}

module.exports = {index}