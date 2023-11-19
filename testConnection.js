import db from "./models/index.js";
import user from "./models/user.js";
import { DataTypes } from "sequelize";

const User = user(db.sequelize, DataTypes);
const test = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

test();
