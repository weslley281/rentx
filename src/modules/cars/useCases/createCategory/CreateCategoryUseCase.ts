import { inject, injectable } from "tsyringe";
import { ICaregoriesRepository } from "../../repositories/ICaregoriesRepository";

interface IRequest {
  name: string;
  descripition: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICaregoriesRepository
  ) {}

  async execute({ name, descripition }: IRequest): Promise<void> {
    //verifica se há uma categoria de mesmo nome
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new Error("Category Already Exists!");
    }
    this.categoriesRepository.create({ descripition, name });
  }
}

export { CreateCategoryUseCase };
