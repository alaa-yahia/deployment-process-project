import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize(
  'postgres://alaa@localhost:5432/deploy'
  );
