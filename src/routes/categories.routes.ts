import { json, request, response, Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCaregoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

//cria uma nova categoria
categoriesRoutes.post("/", createCategoryController.handle);

//lista as categorias
categoriesRoutes.get("/", listCategoriesController.handle);

//faz upload
categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCaregoryController.handle
);

export { categoriesRoutes };
