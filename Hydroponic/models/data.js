"use strict";

module.exports = function(sequelize, DataTypes) {
  var Data = sequelize.define('Data', {
    // time: {
    //   type: DataTypes.DATE,
    //   allowNull: false
    // },
    ph: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ppm: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    humidity: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    temperature: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    classMethods: {
      createData: function(data, callback){
        Data.create(data).then(callback);
      },
      getNewestDataByCropId: function(cropId, callback){
        var query = {
          where: {
            CropId: cropId
          },
          order: [['createdAt', 'DESC']]
        };
        Data.findOne(query).then(callback);
      },
      getAllDataByCropId: function(cropId, callback){
        var query = {
          where: {
            CropId: cropId
          },
          order: [['createdAt', 'DESC']]
        }
        Data.findAll(query).then(callback);
      },
      associate: function(models){
      }
    },
    tableName: 'Data'
  });
  return Data;
};
