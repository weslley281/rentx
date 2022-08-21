import { Router } from "express";
import multer from "multer";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRouters = Router();

const upload = multer({
  dest: "./avatar",
});

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRouters.post("/", createUserController.handle);

usersRouters.patch(
  "/avatar",
  upload.single("file"),
  updateUserAvatarController.handle
);

export { usersRouters };
