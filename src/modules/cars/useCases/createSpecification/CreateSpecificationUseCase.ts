import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

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

  execute({ name, description }: IRequest): void {
    const specificationAlredyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlredyExists) {
      throw new Error("Specification Already Exixits");
    }
    this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
