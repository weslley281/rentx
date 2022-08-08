import { container } from "tsyringe";

import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificationRepository";
import { ICaregoriesRepository } from "../../modules/cars/repositories/ICaregoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CaregoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository";

container.registerSingleton<ICaregoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationsRepository",
  SpecificationRepository
);
