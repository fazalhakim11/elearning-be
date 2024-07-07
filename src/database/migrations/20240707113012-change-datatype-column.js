'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('progresses', 'status_progress',{
      type: Sequelize.BOOLEAN
    })
    await queryInterface.changeColumn('sub_babs', 'label',{
      type: Sequelize.BOOLEAN
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
