const Sequelize = require('sequelize');

module.exports =  new Sequelize('d4mf1c044buqbs', 'aadnpmeiomltqe', 'a0e55bdd8d46e29bba2e5676c8184ba98cf2ff9f65a9bdf5758979b97f3bd2a0', {
  host: 'ec2-107-22-238-217.compute-1.amazonaws.com',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,	
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
