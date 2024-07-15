const {kelas: kelasModel} = require('../models')

const index = async (req, res, next) => {
    const kelas = await kelasModel.findAll({

    })
    
    return res.send({
        message: "Success",
        data : kelas.map(kel=>{
            return {
                id: kel.id,
                nama: kel.nama_kelas
            }
            
        })
    })
}

module.exports = {index}