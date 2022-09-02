import { AppError } from "@shared/errors/AppErros";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlredyExists =
      await this.specificationRepository.findByName(name);

    if (specificationAlredyExists) {
      throw new AppError("Specification Already Exixits");
    }
    await this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
