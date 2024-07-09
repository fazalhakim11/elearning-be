const { where,literal, Op, fn, col, sequelize, query } = require('sequelize')
const {bab: babModel} = require('../models')
const {sub_bab: sub_babModel} = require('../models')
const {progress: progressModel} = require('../models')
const {material: materialModel} = require('../models')

const index = async (req, res, next) => {
    const id = req.params.id
    const bab = await babModel.findAll({
        attributes: [
            'id',
            'nama_bab', 
            'icon_bab',
            [literal('(select COUNT(id) FROM sub_babs WHERE sub_babs.id_bab = bab.id AND sub_babs.label = 1)'), 'total_sub_bab_gratis'],
        ],
        include: [{
            model: sub_babModel,
            as: "sub_bab",
            attributes:['nama_sub_bab', 'label'],
            include:[{
                model: materialModel,
                as: "material",
                attributes: ['nama_material'],
                include: [{
                    model: progressModel,
                    as: "progresses",
                    attributes: ['status_progress']
                }]
            }]
        }],
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
        bab: bab
        .map(b=>{
            const totalSubBabGratis = b.sub_bab.reduce((total, sub_bab)=> {
                return total + sub_bab.label
            }, 0)

            const totalProgress = b.sub_bab.reduce((total, sub_bab)=>{
                return total + sub_bab.material.reduce((total, material) => {
                    return total + material.progresses.reduce((total, progress) => {
                      return total + progress.status_progress;
                    }, 0)
                  }, 0)
            }, 0)
            const progress = totalProgress/b.sub_bab[0].material.length
            const finalProgress = progress/b.sub_bab.length
            return {
                icon: b.icon_bab,
                nama: b.nama_bab,
                sub_bab_gratis: totalSubBabGratis, 
                finalProgress
            }
        }),
    })
}

module.exports = {index}