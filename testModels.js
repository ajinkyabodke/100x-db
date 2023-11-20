import db from "./models/index.js";
import { User, Post, Follow, Like } from "./models";
import { Sequelize, DataTypes } from "sequelize";
import post from "./models/post.js";
import follow from "./models/follow.js";
import like from "./models/like.js";

const Table = require("cli-table");

// const User = user(db.sequelize, DataTypes);
// const Post = post(db.sequelize, DataTypes);
// const Follow = follow(db.sequelize, DataTypes);
// const Like = like(db.sequelize, DataTypes);

const addUser = async () => {
  try {
    const newUser = await User.create({
      id: "3",
      name: "Demo User 2",
      username: "demo_user2",
      email: "demo2@example.com",
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
// addUser();
const getUsers = async () => {
  try {
    const users = await User.findAll();

    users.forEach((user) => {
      const table = new Table();
      table.push(
        { "User ID": user.dataValues.id },
        { Name: user.dataValues.name },
        { Email: user.dataValues.email }
      );

      console.log(table.toString());
    });
  } catch (errors) {
    console.log("🔴 Error : ", errors?.errors?.[0]?.message);
  }
};
// getUsers();

const addPost = async () => {
  try {
    const newPost = await Post.create({
      type: "repost",
      userId: 1, // Replace with the actual user ID
      content: "This is a demo repost.",
      updatedAt: new Date(),
      createdAt: new Date(),
    });
    console.log("New post auto-generated ID:", newPost.id);
  } catch (errors) {
    console.log("🔴 Error : ", errors);
  }
};
// addPost();
const getPosts = async () => {
  try {
    const posts = await Post.findAll();
    posts.forEach((post) => {
      const table = new Table();
      table.push(
        { "Post ID": post.dataValues.id },
        { Content: post.dataValues.content },
        { Type: post.dataValues.type }
      );

      console.log(table.toString());
    });
  } catch (errors) {
    console.log("🔴 Error : ", errors?.errors?.[0]?.message);
  }
};
getPosts();

const addFollow = async () => {
  try {
    const newFollow = await Follow.create({
      userId: 1,
      followerId: 1,
      followingId: 1,
      updatedAt: new Date(),
      createdAt: new Date(),
    });
    console.log("New follow auto-generated ID:", newFollow.id);
  } catch (errors) {
    console.log("🔴 Error : ", errors);
  }
};
// addFollow();

const getFollow = async () => {
  try {
    const follows = await Follow.findAll();
    follows.forEach((follow) => {
      console.log(
        `👥 Follow ID : ${follow.dataValues.id} => ${follow.dataValues.followerId} `
      );
    });
  } catch (errors) {
    console.log("🔴 Error : ", errors?.errors?.[0]?.message);
  }
};
// getFollow();

const addLike = async () => {
  try {
    const newLike = await Like.create({
      userId: 2,
      postId: 1,
      timestamp: new Date(),
      updatedAt: new Date(),
      createdAt: new Date(),
    });
    console.log("New like auto-generated ID:", newLike.id);
  } catch (errors) {
    console.log("🔴 Error : ", errors);
  }
};
// addLike();

const getLike = async () => {
  try {
    const likes = await Like.findAll();
    likes.forEach((like) => {
      console.log(
        `👍 Like ID : ${like.dataValues.id} => ${like.dataValues.userId} `
      );
    });
  } catch (errors) {
    console.log("🔴 Error : ", errors?.errors?.[0]?.message);
  }
};
// getLike();
