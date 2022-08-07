import { CategoriesRepository } from "../../repositories/implementations/CaregoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoryController => {
  const caregoriesRepository = new CategoriesRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(caregoriesRepository);
  const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
  );

  return createCategoryController;
};
