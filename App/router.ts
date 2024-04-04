import { addUser, getUserById, getUsers } from "./Handler";

const express = require("express");

export const router = express.Router();

router.get("/User", getUsers);
router.post("/User", addUser);
router.get("/User/:id", getUserById);
