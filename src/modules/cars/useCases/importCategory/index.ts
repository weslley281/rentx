import { CategoriesRepository } from "../../repositories/implementations/CaregoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoryRepository = null;
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
const importCaregoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCaregoryController };
