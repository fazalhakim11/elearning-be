'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        nama_user: 'John Doe',
        email: "johndoe@example.com",
        password: "$2a$12$L9UMgVVMDXz7BvNfQEkkGufPdsfTMy0xiJDfx.xnMJSOFBp1yEQfq",
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_user: 'John Chena',
        email: "johnchena@example.com",
        password: "$2a$12$L9UMgVVMDXz7BvNfQEkkGufPdsfTMy0xiJDfx.xnMJSOFBp1yEQfq",
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_user: 'Aboel Khodir',
        email: "abdoelkhodir@example.com",
        password: "$2a$12$L9UMgVVMDXz7BvNfQEkkGufPdsfTMy0xiJDfx.xnMJSOFBp1yEQfq",
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      }
    ])

    await queryInterface.bulkInsert('kelas',[
      {
        nama_kelas: "Kelas 1",
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_kelas: "Kelas 2",
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_kelas: "Kelas 3",
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_kelas: "Kelas 4",
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_kelas: "Kelas 5",
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_kelas: "Kelas 6",
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
    ])
    await queryInterface.removeColumn('mode_pembelajarans', 'id_mode_pembelajaran')
    await queryInterface.bulkInsert('mode_pembelajarans',[
      {
        nama_mode_pembelajaran: "Pembelajaran Tematik",
        id_kelas: 1,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_mode_pembelajaran: "Pembelajaran Menurut Topik",
        id_kelas: 1,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_mode_pembelajaran: "Kurikulum Merdeka",
        id_kelas: 1,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_mode_pembelajaran: "Pembelajaran Tematik",
        id_kelas: 2,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_mode_pembelajaran: "Pembelajaran Menurut Topik",
        id_kelas: 2,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_mode_pembelajaran: "Kurikulum Merdeka",
        id_kelas: 2,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
    ])

    await queryInterface.bulkInsert('mata_pelajarans',[
      {
        nama_mata_pelajaran: "IPA",
        icon_mata_pelajaran: "ipa.jpg",
        id_mode_pembelajaran: 1,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_mata_pelajaran: "IPS",
        icon_mata_pelajaran: "ips.jpg",
        id_mode_pembelajaran: 1,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_mata_pelajaran: "Matematika",
        icon_mata_pelajaran: "matematika.jpg",
        id_mode_pembelajaran: 1,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_mata_pelajaran: "IPA",
        icon_mata_pelajaran: "ipa.jpg",
        id_mode_pembelajaran: 2,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_mata_pelajaran: "IPS",
        icon_mata_pelajaran: "ips.jpg",
        id_mode_pembelajaran: 2,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_mata_pelajaran: "Matematika",
        icon_mata_pelajaran: "matematika.jpg",
        id_mode_pembelajaran: 2,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_mata_pelajaran: "IPA",
        icon_mata_pelajaran: "ipa.jpg",
        id_mode_pembelajaran: 3,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_mata_pelajaran: "IPS",
        icon_mata_pelajaran: "ips.jpg",
        id_mode_pembelajaran: 3,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_mata_pelajaran: "Matematika",
        icon_mata_pelajaran: "matematika.jpg",
        id_mode_pembelajaran: 3,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      }
    ])

    await queryInterface.bulkInsert('babs',[
      {
        nama_bab: "Tumbuhan",
        icon_bab: "tumbuhan.jpg",
        id_mata_pelajaran: 1,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_bab: "Hewan",
        icon_bab: "hewan.jpg",
        id_mata_pelajaran: 1,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_bab: "Lingkungan",
        icon_bab: "lingkungan.jpg",
        id_mata_pelajaran: 1,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      }
    ])

    await queryInterface.changeColumn('sub_babs', 'label', {
      type: Sequelize.BOOLEAN
    })    
    await queryInterface.bulkInsert('sub_babs',[
      {
        nama_sub_bab: "Anatomi Tumbuhan",
        icon_sub_bab: "anatomitumbuhan.jpg",
        label: true,
        id_bab: 1,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_sub_bab: "Anatomi Tumbuhan 2",
        icon_sub_bab: "anatomitumbuhan2.jpg",
        label: false,
        id_bab: 1,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },{
        nama_sub_bab: "Anatomi Tumbuhan 3",
        icon_sub_bab: "anatomitumbuhan3.jpg",
        label: false,
        id_bab: 1,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
    ])

    await queryInterface.bulkInsert('materials',[
      {
        nama_material: "Material 1",
        thumbnail: "Video 1.mp4",
        tipe: "Video",
        xp: 125,
        gold: 10,
        id_sub_bab: 1,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_material: "Material 2",
        thumbnail: "Video 2.mp4",
        tipe: "Video",
        xp: 125,
        gold: 10,
        id_sub_bab: 1,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_material: "Material 3",
        thumbnail: "material 3.jpg",
        tipe: "Single Quiz",
        xp: 50,
        gold: 50,
        id_sub_bab: 1,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_material: "Material 4",
        thumbnail: "material 4.jpg",
        tipe: "Single Quiz",
        xp: 50,
        gold: 50,
        id_sub_bab: 1,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_material: "Material 5",
        thumbnail: "material 5.jpg",
        tipe: "Summary",
        xp: 0,
        gold: 0,
        id_sub_bab: 1,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        nama_material: "Material 6",
        thumbnail: "material 6.jpg",
        tipe: "End Quiz",
        xp: 0,
        gold: 0,
        id_sub_bab: 1,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
    ])

    await queryInterface.changeColumn('progresses', 'status_progress', {
      type: Sequelize.BOOLEAN
    })  
    await queryInterface.bulkInsert('progresses',[
      {
        status_progress: true,
        id_user: 1,
        id_material: 1,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        status_progress: false,
        id_user: 1,
        id_material: 2,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
      {
        status_progress: true,
        id_user: 1,
        id_material: 3,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      },
    ])    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
