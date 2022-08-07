import { json, request, response, Router } from "express";
import multer from "multer";
import createCategoryController from "../modules/cars/useCases/createCategory";
import { importCaregoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

//cria uma nova categoria
categoriesRoutes.post("/", (request, response) => {
  console.log("Reload Funcionado");
  return createCategoryController().handle(request, response);
});

//lista as categorias
categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

//faz upload
categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCaregoryController.handle(request, response);
});

export { categoriesRoutes };
