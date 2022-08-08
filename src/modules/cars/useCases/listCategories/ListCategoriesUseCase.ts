import { Category } from "../../entities/category";
import { CategoriesRepository } from "../../repositories/implementations/CaregoriesRepository";
import { ICaregoriesRepository } from "../../repositories/ICaregoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICaregoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
