import { Category } from "../../entities/category";
import { CategoriesRepository } from "../../repositories/implementations/CaregoriesRepository";
import { ICaregoriesRepository } from "../../repositories/ICaregoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoryRepository: ICaregoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
