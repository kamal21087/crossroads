'use strict'; // This line is used to enable strict mode, which catches common coding errors and "unsafe" actions. 

/** @type {import('sequelize-cli').Migration} */  // This line is used to import the Migration type from the sequelize-cli package.
module.exports = {
  async up (queryInterface, Sequelize) {  // async function to create a table in the database.  
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) { // async function to drop a table from the database.
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
