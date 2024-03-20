import express from "express";

import { deleteUser, getAllUsers, updateUser } from "../controllers/users";
import { isAuthenticated, isOwner } from "../middlewares";

export default (router: express.Router) => {
  router.get("/api/users",isAuthenticated, getAllUsers);
  router.delete("/api/users/:id", isAuthenticated, isOwner, deleteUser);
  router.patch("/api/users/:id", isAuthenticated, isOwner, updateUser);
};
