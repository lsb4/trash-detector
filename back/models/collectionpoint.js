"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class CollectionPoint extends Model {
    static associate(models) {}
  }

  CollectionPoint.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      accumulation_degree: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      priority: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      last_collection_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "CollectionPoint",
    }
  );

  return CollectionPoint;
};
