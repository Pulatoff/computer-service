const sequelize = require("../configs/db");

const User = require("../models/userModel");
const Vacancy = require("../models/vacancyModel");

const { DataTypes, Sequelize } = require("sequelize");

const SubmitVacancy = sequelize.define("submitVacancies", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  status: { type: DataTypes.INTEGER, allowNull: false, defaultValue: "1" },
});

User.hasMany(SubmitVacancy, { onDelete: "CASCADE" });
SubmitVacancy.belongsTo(User, { onDelete: "CASCADE" });

Vacancy.hasMany(SubmitVacancy, { onDelete: "CASCADE" });
SubmitVacancy.belongsTo(Vacancy, { onDelete: "CASCADE" });

SubmitVacancy.sync({ alter: true });

module.exports = SubmitVacancy;
