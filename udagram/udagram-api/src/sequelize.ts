import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

/* export const sequelize = new Sequelize({
  host: config.dbHost,
  username: config.dbUsername,
  password: config.dbPassword,
  database: config.dbName,
  dialect: "postgres",
}); */

export const sequelize = new Sequelize(
  "postgres://postgres:CkZYE0KU6y23PZaZxmbv@database-1.cskqfl0lhxx2.us-east-1.rds.amazonaws.com:5432/postgres"
);
