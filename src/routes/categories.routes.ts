import { json, request, response, Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "modules/cars/useCases/createCategory/CreateCategoryController";
import { importCaregoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

//cria uma nova categoria
categoriesRoutes.post("/", createCategoryController.handle);

//lista as categorias
categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

//faz upload
categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCaregoryController.handle(request, response);
});

export { categoriesRoutes };
