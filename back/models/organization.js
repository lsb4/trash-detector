"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    static associate(models) {}
  }
  Organization.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      trucks: DataTypes.INTEGER,
      busy_trucks: DataTypes.INTEGER,
      collects: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Organization",
    }
  );
  return Organization;
};
