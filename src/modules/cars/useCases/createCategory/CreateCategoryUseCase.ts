import { inject, injectable } from "tsyringe";
import { ICaregoriesRepository } from "../../repositories/ICaregoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICaregoriesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    //verifica se há uma categoria de mesmo nome
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new Error("Category Already Exists!");
    }
    this.categoriesRepository.create({ description, name });
  }
}

export { CreateCategoryUseCase };
