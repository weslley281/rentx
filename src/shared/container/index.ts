import { ICaregoriesRepository } from "../../modules/cars/repositories/ICaregoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CaregoriesRepository";

import { container } from "tsyringe";

container.registerSingleton<ICaregoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
