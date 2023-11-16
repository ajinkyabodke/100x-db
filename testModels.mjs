import user from "./models/user.js";
import { Sequelize, DataTypes } from "sequelize";

const User = user(Sequelize, DataTypes);
// Create a new user
console.log("Creating new user", User);

// const jane = await user.create({
//   name: "Jane",
//   username: "Doe",
//   email: "jane.doe@example.com",
//   // emailVerifiedAt: new Date(),
//   passwordHash: "hashedpassword",
//   bio: "This is Jane Doe.",
//   location: "Cityville",
//   website: "https://janedoe.com",
//   dateOfBirth: "1990-01-01", //
// });
// console.log("Jane's auto-generated ID:", jane.id);
