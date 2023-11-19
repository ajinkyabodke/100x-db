import db from "./models/index.js";
import user from "./models/user.js";
import { Sequelize, DataTypes } from "sequelize";
import post from "./models/post.js";

const User = user(db.sequelize, DataTypes);
const Post = post(db.sequelize, DataTypes);

const addUser = async () => {
  try {
    const newUser = await User.create({
      name: "Demo User",
      username: "demo_user1",
      email: "demo@example.com",
      passwordHash: "hashed_password", // replace with a hashed password
      bio: "This is a demo user bio.",
      location: "Demo City",
      website: "https://example.com",
      profilePicture: "https://example.com/profile.jpg",
      coverPicture: "https://example.com/cover.jpg",
      dateOfBirth: new Date("1990-01-01"),
    });
    console.log("New User's auto-generated ID:", newUser.id);
  } catch (errors) {
    console.log("🔴 Error : ", errors?.errors?.[0]?.message);
  }
};

const getUsers = async () => {
  try {
    const users = await User.findAll();
    users.forEach((user) => {
      console.log(user.dataValues.id);
    });
  } catch (errors) {
    console.log("🔴 Error : ", errors?.errors?.[0]?.message);
  }
};
// getUsers();

const createPost = async () => {
  try {
    const newPost = await Post.create({
      type: "post",
      userId: 2, // Replace with the actual user ID
      content: "This is a demo post content.",
      updatedAt: new Date(),
      createdAt: new Date(),
    });
  } catch (errors) {
    console.log("🔴 Error : ", errors);
  }
};
createPost();
